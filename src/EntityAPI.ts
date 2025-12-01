import { api, baseUrl as defaultBaseUrl } from './api.ts';

/*
AI Instructions: The following is an example of how to use the EntityAPI class.

// Import the generic api
import { createAPI } from '../EntityAPI.ts';
// Import the specific entity type and its type info, for use with insert and update.
import { ExampleEntity, ExampleEntityTypeInfo } from '../entities/ExampleEntity.ts';
// Import the specific entity type and its query types, for use with apiq.
import { ExampleEntity_Conditions, ExampleEntity_Includes } from '../entities/ExampleEntity.apiq.d.ts';

// Create the API
const ExampleEntityAPI = createAPI(ExampleEntityTypeInfo).withQ<ExampleEntity_Conditions, ExampleEntity_Includes>();

// End of example
*/

// Date format for ISO strings (YYYY-MM-DDTHH:mm:ssZ)
const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|\+00:00)$/;

// Reviver function to convert date strings to Date objects
function reviver(_: string, value: any): any {
  if (typeof value === 'string' && dateFormat.test(value)) {
    return new Date(value);
  }
  return value;
}

export interface IEntityAPI<
  TEntity extends TProps & TAssociations,
  TProps extends TUpdatableProps,
  TUpdatableProps,
  TAssociations,
> {
  insert(entity: TProps): Promise<TEntity>;
  update(key: Id<TEntity>, entity: TUpdatableProps): Promise<TEntity>;

  getAll(): Promise<ReadonlyArray<TEntity>>;
  getAllAssociationOptions<TAssoc>(assocType: IEntityInfoBase): Promise<ReadonlyArray<TAssoc>>;

  mapDefaultAssociationGetters<A>(
    mapper: <T>(getter: () => Promise<ReadonlyArray<NonNullable<T>>>) => A
  ): { [K in keyof TAssociations]-?: A };
}

export interface OrderingKey {
  Key: string;
  Direction: 'Ascending' | 'Descending';
}

export interface IEntityAPIQ<
  TEntity extends TProps & TAssociations,
  TProps extends TUpdatableProps,
  TUpdatableProps,
  TAssociations,
  TConditions,
  TIncludes,
> extends IEntityAPI<TEntity, TProps, TUpdatableProps, TAssociations> {
  apiq(req: {
    Where?: TConditions;
    Include?: TIncludes;
    Limit?: number;
    Ordering?: OrderingKey[];
  }): Promise<ReadonlyArray<TEntity>>;
}

interface IEntityAPIBuilder<
  TEntity extends TProps & TAssociations,
  TProps extends TUpdatableProps,
  TUpdatableProps,
  TAssociations,
> {
  withQ<TConditions, TIncludes>(): IEntityAPIQ<
    TEntity,
    TProps,
    TUpdatableProps,
    TAssociations,
    TConditions,
    TIncludes
  >;
}

export function createAPI<
  TEntity extends TProps & TAssociations,
  TProps extends TUpdatableProps,
  TUpdatableProps,
  TAssociations,
>(
  typeInfo: IEntityInfo<TEntity, TProps, TUpdatableProps, TAssociations>,
  baseUrlOverride?: string
): IEntityAPI<TEntity, TProps, TUpdatableProps, TAssociations> &
  IEntityAPIBuilder<TEntity, TProps, TUpdatableProps, TAssociations> {
  return new EntityAPI<TEntity, TProps, TUpdatableProps, TAssociations, unknown, unknown>(
    typeInfo,
    baseUrlOverride
  );
}

function mapObject<K extends PropertyKey, A, B>(
  object: { [P in K]: A },
  mapper: (value: A) => B
): { [P in K]: B } {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => [key, mapper(value as A)])
  ) as { [P in K]: B };
}

export class EntityAPI<
    TEntity extends TProps & TAssociations,
    TProps extends TUpdatableProps,
    TUpdatableProps,
    TAssociations,
    TConditions,
    TIncludes,
  >
  implements
    IEntityAPI<TEntity, TProps, TUpdatableProps, TAssociations>,
    IEntityAPIBuilder<TEntity, TProps, TUpdatableProps, TAssociations>
{
  area: string = 'entities';
  typeInfo: IEntityInfo<TEntity, TProps, TUpdatableProps, TAssociations>;
  baseUrl: string;

  // Normal signature with defaults
  constructor(
    typeInfo: IEntityInfo<TEntity, TProps, TUpdatableProps, TAssociations>,
    baseUrlOverride?: string
  ) {
    this.typeInfo = typeInfo;
    this.baseUrl = baseUrlOverride ?? defaultBaseUrl;
  }

  withQ<TConditions, TIncludes>(): IEntityAPIQ<
    TEntity,
    TProps,
    TUpdatableProps,
    TAssociations,
    TConditions,
    TIncludes
  > {
    return this as unknown as IEntityAPIQ<
      TEntity,
      TProps,
      TUpdatableProps,
      TAssociations,
      TConditions,
      TIncludes
    >;
  }

  async getAll() {
    return this.apiq({});
  }

  async getAllAssociationOptions<TAssoc>(
    assocType: IEntityInfoBase
  ): Promise<ReadonlyArray<NonNullable<TAssoc>>> {
    const res = await api.post(`${this.baseUrl}/${this.area}/apiq/${assocType.Name}/`, {
      Where: {},
    });

    if (!res.ok) {
      throw new Error(await res.text());
    }

    // Get the text from the response and parse it with our reviver
    const text = await res.text();
    return JSON.parse(text, reviver);
  }

  mapDefaultAssociationGetters<A>(
    mapper: <T>(getter: () => Promise<ReadonlyArray<NonNullable<T>>>) => A
  ): {
    [K in keyof TAssociations]-?: A;
  } {
    const defaultAssocGetters = mapObject(
      this.typeInfo.AssociationTypeInfos,
      (assocTypeInfoGetter: () => IEntityInfoBase) => {
        return mapper(() => this.getAllAssociationOptions(assocTypeInfoGetter()));
      }
    );
    return defaultAssocGetters as {
      [K in keyof TAssociations]-?: A;
    };
  }

  async apiq(req: {
    Where?: TConditions;
    Include?: TIncludes;
    Limit?: number;
    Ordering?: OrderingKey[];
  }): Promise<ReadonlyArray<TEntity>> {
    const res = await api.post(`${this.baseUrl}/${this.area}/apiq/${this.typeInfo.Name}/`, {
      Where: {},
      ...req,
    });

    if (!res.ok) {
      throw new Error(await res.text());
    }

    // Get the text from the response and parse it with our reviver
    const text = await res.text();
    return JSON.parse(text, reviver);
  }

  async insert(entity: TProps): Promise<TEntity> {
    const res = await api.post(`${this.baseUrl}/${this.area}/${this.typeInfo.Name}/`, entity);

    if (!res.ok) {
      throw new Error(await res.text());
    }

    const text = await res.text();
    return JSON.parse(text, reviver);
  }

  async update(key: Id<TEntity>, entity: TUpdatableProps): Promise<TEntity> {
    const res = await api.put(`${this.baseUrl}/${this.area}/${this.typeInfo.Name}/`, {
      Key: key,
      Src: entity,
    });

    if (!res.ok) {
      throw new Error(await res.text());
    }

    const text = await res.text();
    return JSON.parse(text, reviver);
  }
}
