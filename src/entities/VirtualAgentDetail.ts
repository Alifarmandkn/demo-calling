
export interface VirtualAgentDetailUpdatableProperties {
   readonly Accent: string | null;
   readonly AgentName: string | null;
   readonly Description: string | null;
   readonly ExternalRefId: string | null;
   readonly Gender: string;
   readonly IsActive: boolean;
   readonly Language: string | null;
   readonly MvaLanguage: string | null;
   readonly Patience: number;
   readonly Positivity: number;
   readonly PreviewUrl: string | null;
   readonly Provider: string | null;
   readonly ProviderId: string | null;
   readonly Speed: number;
   readonly Tonality: string | null;
   readonly UpdatedAt: Date;
   readonly VoiceId: string | null;
}

export interface VirtualAgentDetailProperties extends VirtualAgentDetailUpdatableProperties {
   readonly CreatedAt: Date;
}

export interface VirtualAgentDetailAssociations {
}

export interface VirtualAgentDetail extends VirtualAgentDetailProperties, VirtualAgentDetailAssociations {
   readonly Id: Id<VirtualAgentDetail>;
}

const defaultUpdatableProperties: VirtualAgentDetailUpdatableProperties = {
   Accent: null,
   AgentName: null,
   Description: null,
   ExternalRefId: null,
   Gender: '',
   IsActive: false,
   Language: null,
   MvaLanguage: null,
   Patience: 0,
   Positivity: 0,
   PreviewUrl: null,
   Provider: null,
   ProviderId: null,
   Speed: 0,
   Tonality: null,
   UpdatedAt: new Date(),
   VoiceId: null
}

const defaultProperties: VirtualAgentDetailProperties = {
    ...defaultUpdatableProperties,
   CreatedAt: new Date()
}

export const VirtualAgentDetailTypeInfo: IEntityInfo<VirtualAgentDetail, VirtualAgentDetailProperties, VirtualAgentDetailUpdatableProperties, VirtualAgentDetailAssociations> = {
    Name: "VirtualAgentDetail",
    EntityType: {} as VirtualAgentDetail,
    PropertiesType: {} as VirtualAgentDetailProperties,
    UpdatablePropertiesType: {} as VirtualAgentDetailUpdatableProperties,
    Default: defaultProperties,
    DefaultUpdatable: defaultUpdatableProperties,
    AssociationTypeInfos: {
     },
     Properties: {
         Id: {
            Name: "Id", 
            Type: "Id<VirtualAgentDetail>",
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

         Accent: {
            Name: "Accent", 
            Type: "string",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        AgentName: {
            Name: "AgentName", 
            Type: "string",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: true,
            IsInsertable: true,
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
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        ExternalRefId: {
            Name: "ExternalRefId", 
            Type: "string",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        Gender: {
            Name: "Gender", 
            Type: "string",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: true,
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
            IsUpdatable: true,
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
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        MvaLanguage: {
            Name: "MvaLanguage", 
            Type: "string",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        Patience: {
            Name: "Patience", 
            Type: "number",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        Positivity: {
            Name: "Positivity", 
            Type: "number",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        PreviewUrl: {
            Name: "PreviewUrl", 
            Type: "string",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        Provider: {
            Name: "Provider", 
            Type: "string",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        ProviderId: {
            Name: "ProviderId", 
            Type: "string",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        Speed: {
            Name: "Speed", 
            Type: "number",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        Tonality: {
            Name: "Tonality", 
            Type: "string",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: true,
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
            IsNullable: false,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        VoiceId: {
            Name: "VoiceId", 
            Type: "string",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },

 
     }
}
