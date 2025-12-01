declare global {
  declare const IdSymbol: unique symbol;
  export type Id<T> = (number | string) & { readonly [IdSymbol]: T };

  type HTMLInputEvent = InputEvent & { target: HTMLInputElement; currentTarget: HTMLInputElement };

  interface IEntityPropertyInfo<T> {
    Name: keyof T;
    Type: string;
    PrimaryKeyOrder: number | null;
    IsGeneratedKey: boolean;
    IsNullable: boolean;
    IsUpdatable: boolean;
    IsInsertable: boolean;
    IsAssociationId: boolean;
    IsAssociation: boolean;
    AssociationType?: string;
    AssociationProp?: keyof T;
  }

  interface IEntityInfoBase {
    Name: string;
  }

  interface IEntityInfo<
    TEntity extends TProps & TAssociations,
    TProps extends TUpdatableProps,
    TUpdatableProps,
    TAssociations,
  > extends IEntityInfoBase {
    EntityType: TEntity;
    PropertiesType: TProps;
    UpdatablePropertiesType: TUpdatableProps;
    Default: TProps;
    DefaultUpdatable: TUpdatableProps;
    AssociationTypeInfos: {
      [K in keyof TAssociations]-?: () => IEntityInfoBase;
    };
    Properties: Record<keyof TEntity, IEntityPropertyInfo<TEntity>>;
  }

  // Note: Backend uses "None = 0", but for CallFlow purposes, 0 semantically means "Both"
  type CallDirection = 'None' | 'Outbound' | 'Inbound' | 'Outbound, Inbound';
}

export {};
