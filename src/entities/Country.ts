
export interface CountryUpdatableProperties {
}

export interface CountryProperties extends CountryUpdatableProperties {
   readonly Currency: string | null;
   readonly IsoCode: string | null;
   readonly Language: string | null;
   readonly Name: string;
   readonly PhoneExtension: string;
}

export interface CountryAssociations {
}

export interface Country extends CountryProperties, CountryAssociations {
   readonly Id: Id<Country>;
}

const defaultUpdatableProperties: CountryUpdatableProperties = {

}

const defaultProperties: CountryProperties = {
    ...defaultUpdatableProperties,
   Currency: null,
   IsoCode: null,
   Language: null,
   Name: '',
   PhoneExtension: ''
}

export const CountryTypeInfo: IEntityInfo<Country, CountryProperties, CountryUpdatableProperties, CountryAssociations> = {
    Name: "Country",
    EntityType: {} as Country,
    PropertiesType: {} as CountryProperties,
    UpdatablePropertiesType: {} as CountryUpdatableProperties,
    Default: defaultProperties,
    DefaultUpdatable: defaultUpdatableProperties,
    AssociationTypeInfos: {
     },
     Properties: {
         Id: {
            Name: "Id", 
            Type: "Id<Country>",
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

 
         Currency: {
            Name: "Currency", 
            Type: "string",
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
        IsoCode: {
            Name: "IsoCode", 
            Type: "string",
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
        Language: {
            Name: "Language", 
            Type: "string",
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
        PhoneExtension: {
            Name: "PhoneExtension", 
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

 
 
     }
}
