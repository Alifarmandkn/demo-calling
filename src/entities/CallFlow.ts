import { CampaignType, CampaignTypeTypeInfo } from './CampaignType.ts'

export interface CallFlowUpdatableProperties {
   readonly Direction: number;
   readonly Languages: string[];
   readonly MvaReference: string;
   readonly Name: string;
}

export interface CallFlowProperties extends CallFlowUpdatableProperties {
   readonly CampaignTypeId: Id<CampaignType>;
}

export interface CallFlowAssociations {
   readonly CampaignType?: CampaignType;
}

export interface CallFlow extends CallFlowProperties, CallFlowAssociations {
   readonly Id: Id<CallFlow>;
}

const defaultUpdatableProperties: CallFlowUpdatableProperties = {
   Direction: 0,
   Languages: [],
   MvaReference: '',
   Name: ''
}

const defaultProperties: CallFlowProperties = {
    ...defaultUpdatableProperties,
   CampaignTypeId: 0 as Id<CampaignType>
}

export const CallFlowTypeInfo: IEntityInfo<CallFlow, CallFlowProperties, CallFlowUpdatableProperties, CallFlowAssociations> = {
    Name: "CallFlow",
    EntityType: {} as CallFlow,
    PropertiesType: {} as CallFlowProperties,
    UpdatablePropertiesType: {} as CallFlowUpdatableProperties,
    Default: defaultProperties,
    DefaultUpdatable: defaultUpdatableProperties,
    AssociationTypeInfos: {
        CampaignType: () => CampaignTypeTypeInfo,
     },
     Properties: {
         Id: {
            Name: "Id", 
            Type: "Id<CallFlow>",
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

 
         CampaignTypeId: {
            Name: "CampaignTypeId", 
            Type: "Id<CampaignType>",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: false,
            IsInsertable: true,
            IsAssociationId: true,
            IsAssociation: false,
            AssociationType: "CampaignType",
            AssociationProp: "CampaignType",
        },

         Direction: {
            Name: "Direction", 
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
        Languages: {
            Name: "Languages", 
            Type: "string[]",
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
        MvaReference: {
            Name: "MvaReference", 
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
        Name: {
            Name: "Name", 
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

         CampaignType: {
            Name: "CampaignType", 
            Type: "CampaignType",
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
