
export interface KeyValueStoreUpdatableProperties {
}

export interface KeyValueStoreProperties extends KeyValueStoreUpdatableProperties {
}

export interface KeyValueStoreAssociations {
}

export interface KeyValueStore extends KeyValueStoreProperties, KeyValueStoreAssociations {
   readonly ContentType: string;
   readonly Key: string;
   readonly Value: string;
}

const defaultUpdatableProperties: KeyValueStoreUpdatableProperties = {

}

const defaultProperties: KeyValueStoreProperties = {
    ...defaultUpdatableProperties,

}

export const KeyValueStoreTypeInfo: IEntityInfo<KeyValueStore, KeyValueStoreProperties, KeyValueStoreUpdatableProperties, KeyValueStoreAssociations> = {
    Name: "KeyValueStore",
    EntityType: {} as KeyValueStore,
    PropertiesType: {} as KeyValueStoreProperties,
    UpdatablePropertiesType: {} as KeyValueStoreUpdatableProperties,
    Default: defaultProperties,
    DefaultUpdatable: defaultUpdatableProperties,
    AssociationTypeInfos: {
     },
     Properties: {
 
         ContentType: {
            Name: "ContentType", 
            Type: "string",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: false,
            IsInsertable: false,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        Key: {
            Name: "Key", 
            Type: "string",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: false,
            IsInsertable: false,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        Value: {
            Name: "Value", 
            Type: "string",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: false,
            IsInsertable: false,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },

 
 
 
     }
}
