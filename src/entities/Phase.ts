
export interface PhaseUpdatableProperties {
}

export interface PhaseProperties extends PhaseUpdatableProperties {
   readonly Id: Id<Phase>;
   readonly AltKeys: string[];
   readonly DisplayName: string;
   readonly IsDeleted: boolean;
   readonly IsDynamic: boolean;
   readonly Ordering: number;
   readonly ParentId: Id<Phase> | null;
   readonly ReferenceKey: string;
}

export interface PhaseAssociations {
   readonly Parent?: Phase;
}

export interface Phase extends PhaseProperties, PhaseAssociations {
}

const defaultUpdatableProperties: PhaseUpdatableProperties = {

}

const defaultProperties: PhaseProperties = {
    ...defaultUpdatableProperties,
   Id: 0 as Id<Phase>,
   AltKeys: [],
   DisplayName: '',
   IsDeleted: false,
   IsDynamic: false,
   Ordering: 0,
   ParentId: null,
   ReferenceKey: ''
}

export const PhaseTypeInfo: IEntityInfo<Phase, PhaseProperties, PhaseUpdatableProperties, PhaseAssociations> = {
    Name: "Phase",
    EntityType: {} as Phase,
    PropertiesType: {} as PhaseProperties,
    UpdatablePropertiesType: {} as PhaseUpdatableProperties,
    Default: defaultProperties,
    DefaultUpdatable: defaultUpdatableProperties,
    AssociationTypeInfos: {
        Parent: () => PhaseTypeInfo,
     },
     Properties: {
 
 
         Id: {
            Name: "Id", 
            Type: "Id<Phase>",
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
        AltKeys: {
            Name: "AltKeys", 
            Type: "string[]",
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
        IsDynamic: {
            Name: "IsDynamic", 
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
        Ordering: {
            Name: "Ordering", 
            Type: "number",
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
        ParentId: {
            Name: "ParentId", 
            Type: "Id<Phase>",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: false,
            IsInsertable: true,
            IsAssociationId: true,
            IsAssociation: false,
            AssociationType: "Phase",
            AssociationProp: "Parent",
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

 
         Parent: {
            Name: "Parent", 
            Type: "Phase",
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
