
export interface EnvironmentUpdatableProperties {
}

export interface EnvironmentProperties extends EnvironmentUpdatableProperties {
   readonly Name: string;
   readonly Code: string;
}

export interface EnvironmentAssociations {
}

export interface Environment extends EnvironmentProperties, EnvironmentAssociations {
}

const defaultUpdatableProperties: EnvironmentUpdatableProperties = {

}

const defaultProperties: EnvironmentProperties = {
    ...defaultUpdatableProperties,
   Name: '',
   Code: ''
}

export const EnvironmentTypeInfo: IEntityInfo<Environment, EnvironmentProperties, EnvironmentUpdatableProperties, EnvironmentAssociations> = {
    Name: "Environment",
    EntityType: {} as Environment,
    PropertiesType: {} as EnvironmentProperties,
    UpdatablePropertiesType: {} as EnvironmentUpdatableProperties,
    Default: defaultProperties,
    DefaultUpdatable: defaultUpdatableProperties,
    AssociationTypeInfos: {
     },
     Properties: {
 
 
         Name: {
            Name: "Name", 
            Type: "string",
            PrimaryKeyOrder: 0,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: false,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        Code: {
            Name: "Code", 
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
