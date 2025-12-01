
export interface CommProviderTypeUpdatableProperties {
}

export interface CommProviderTypeProperties extends CommProviderTypeUpdatableProperties {
   readonly DisplayName: string;
   readonly ReferenceKey: string;
}

export interface CommProviderTypeAssociations {
}

export interface CommProviderType extends CommProviderTypeProperties, CommProviderTypeAssociations {
   readonly Id: Id<CommProviderType>;
}

const defaultUpdatableProperties: CommProviderTypeUpdatableProperties = {

}

const defaultProperties: CommProviderTypeProperties = {
    ...defaultUpdatableProperties,
   DisplayName: '',
   ReferenceKey: ''
}

export const CommProviderTypeTypeInfo: IEntityInfo<CommProviderType, CommProviderTypeProperties, CommProviderTypeUpdatableProperties, CommProviderTypeAssociations> = {
    Name: "CommProviderType",
    EntityType: {} as CommProviderType,
    PropertiesType: {} as CommProviderTypeProperties,
    UpdatablePropertiesType: {} as CommProviderTypeUpdatableProperties,
    Default: defaultProperties,
    DefaultUpdatable: defaultUpdatableProperties,
    AssociationTypeInfos: {
     },
     Properties: {
         Id: {
            Name: "Id", 
            Type: "Id<CommProviderType>",
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

 
         DisplayName: {
            Name: "DisplayName", 
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
        ReferenceKey: {
            Name: "ReferenceKey", 
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
