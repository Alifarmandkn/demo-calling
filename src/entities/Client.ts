import { Country, CountryTypeInfo } from './Country.ts'
import { ClientDialingConfig, ClientDialingConfigTypeInfo } from './ClientDialingConfig.ts'

export interface ClientUpdatableProperties {
}

export interface ClientProperties extends ClientUpdatableProperties {
   readonly CountryId: Id<Country>;
   readonly CreatedAt: Date;
   readonly DisabledAt: Date | null;
   readonly IsActive: boolean;
   readonly IsDeleted: boolean;
   readonly Name: string;
   readonly UpdatedAt: Date | null;
}

export interface ClientAssociations {
   readonly Country?: Country;
   readonly DialingConfig?: ClientDialingConfig;
}

export interface Client extends ClientProperties, ClientAssociations {
   readonly Id: Id<Client>;
}

const defaultUpdatableProperties: ClientUpdatableProperties = {

}

const defaultProperties: ClientProperties = {
    ...defaultUpdatableProperties,
   CountryId: 0 as Id<Country>,
   CreatedAt: new Date(),
   DisabledAt: null,
   IsActive: false,
   IsDeleted: false,
   Name: '',
   UpdatedAt: null
}

export const ClientTypeInfo: IEntityInfo<Client, ClientProperties, ClientUpdatableProperties, ClientAssociations> = {
    Name: "Client",
    EntityType: {} as Client,
    PropertiesType: {} as ClientProperties,
    UpdatablePropertiesType: {} as ClientUpdatableProperties,
    Default: defaultProperties,
    DefaultUpdatable: defaultUpdatableProperties,
    AssociationTypeInfos: {
        Country: () => CountryTypeInfo,
        DialingConfig: () => ClientDialingConfigTypeInfo,
     },
     Properties: {
         Id: {
            Name: "Id", 
            Type: "Id<Client>",
            PrimaryKeyOrder: 0,
            IsGeneratedKey: true,
            IsNullable: false,
            IsUpdatable: false,
            IsInsertable: false,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },

 
         CountryId: {
            Name: "CountryId", 
            Type: "Id<Country>",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: false,
            IsInsertable: true,
            IsAssociationId: true,
            IsAssociation: false,
            AssociationType: "Country",
            AssociationProp: "Country",
        },
        CreatedAt: {
            Name: "CreatedAt", 
            Type: "Date",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: false,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        DisabledAt: {
            Name: "DisabledAt", 
            Type: "Date",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: false,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        IsActive: {
            Name: "IsActive", 
            Type: "boolean",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: false,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        IsDeleted: {
            Name: "IsDeleted", 
            Type: "boolean",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: false,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        Name: {
            Name: "Name", 
            Type: "string",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: false,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        UpdatedAt: {
            Name: "UpdatedAt", 
            Type: "Date",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: false,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },

 
         Country: {
            Name: "Country", 
            Type: "Country",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: false,
            IsInsertable: false,
            IsAssociationId: false,
            IsAssociation: true,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        DialingConfig: {
            Name: "DialingConfig", 
            Type: "ClientDialingConfig",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: false,
            IsInsertable: false,
            IsAssociationId: false,
            IsAssociation: true,
            AssociationType: undefined,
            AssociationProp: undefined,
        },

     }
}
