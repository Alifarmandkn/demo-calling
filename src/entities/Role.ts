
export interface RoleUpdatableProperties {
}

export interface RoleProperties extends RoleUpdatableProperties {
   readonly Description: string | null;
   readonly Name: string;
}

export interface RoleAssociations {
}

export interface Role extends RoleProperties, RoleAssociations {
   readonly Id: Id<Role>;
}

const defaultUpdatableProperties: RoleUpdatableProperties = {

}

const defaultProperties: RoleProperties = {
    ...defaultUpdatableProperties,
   Description: null,
   Name: ''
}

export const RoleTypeInfo: IEntityInfo<Role, RoleProperties, RoleUpdatableProperties, RoleAssociations> = {
    Name: "Role",
    EntityType: {} as Role,
    PropertiesType: {} as RoleProperties,
    UpdatablePropertiesType: {} as RoleUpdatableProperties,
    Default: defaultProperties,
    DefaultUpdatable: defaultUpdatableProperties,
    AssociationTypeInfos: {
     },
     Properties: {
         Id: {
            Name: "Id", 
            Type: "Id<Role>",
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

 
         Description: {
            Name: "Description", 
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

 
 
     }
}
