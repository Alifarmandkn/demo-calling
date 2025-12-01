import { CampaignSetting, CampaignSettingTypeInfo } from './CampaignSetting.ts'
import { VirtualAgentDetail, VirtualAgentDetailTypeInfo } from './VirtualAgentDetail.ts'

export interface CampaignSettingVirtualAgentRelUpdatableProperties {
   readonly VirtualAgentId: Id<VirtualAgentDetail>;
   readonly IsDeleted: boolean;
}

export interface CampaignSettingVirtualAgentRelProperties extends CampaignSettingVirtualAgentRelUpdatableProperties {
   readonly CampaignSettingId: Id<CampaignSetting>;
}

export interface CampaignSettingVirtualAgentRelAssociations {
   readonly CampaignSetting?: CampaignSetting;
   readonly VirtualAgent?: VirtualAgentDetail;
}

export interface CampaignSettingVirtualAgentRel extends CampaignSettingVirtualAgentRelProperties, CampaignSettingVirtualAgentRelAssociations {
   readonly Id: Id<CampaignSettingVirtualAgentRel>;
}

const defaultUpdatableProperties: CampaignSettingVirtualAgentRelUpdatableProperties = {
   VirtualAgentId: 0 as Id<VirtualAgentDetail>,
   IsDeleted: false
}

const defaultProperties: CampaignSettingVirtualAgentRelProperties = {
    ...defaultUpdatableProperties,
   CampaignSettingId: 0 as Id<CampaignSetting>
}

export const CampaignSettingVirtualAgentRelTypeInfo: IEntityInfo<CampaignSettingVirtualAgentRel, CampaignSettingVirtualAgentRelProperties, CampaignSettingVirtualAgentRelUpdatableProperties, CampaignSettingVirtualAgentRelAssociations> = {
    Name: "CampaignSettingVirtualAgentRel",
    EntityType: {} as CampaignSettingVirtualAgentRel,
    PropertiesType: {} as CampaignSettingVirtualAgentRelProperties,
    UpdatablePropertiesType: {} as CampaignSettingVirtualAgentRelUpdatableProperties,
    Default: defaultProperties,
    DefaultUpdatable: defaultUpdatableProperties,
    AssociationTypeInfos: {
        CampaignSetting: () => CampaignSettingTypeInfo,
        VirtualAgent: () => VirtualAgentDetailTypeInfo,
     },
     Properties: {
         Id: {
            Name: "Id", 
            Type: "Id<CampaignSettingVirtualAgentRel>",
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

 
         CampaignSettingId: {
            Name: "CampaignSettingId", 
            Type: "Id<CampaignSetting>",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: false,
            IsInsertable: true,
            IsAssociationId: true,
            IsAssociation: false,
            AssociationType: "CampaignSetting",
            AssociationProp: "CampaignSetting",
        },

         VirtualAgentId: {
            Name: "VirtualAgentId", 
            Type: "Id<VirtualAgentDetail>",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: true,
            IsAssociation: false,
            AssociationType: "VirtualAgentDetail",
            AssociationProp: "VirtualAgent",
        },
        IsDeleted: {
            Name: "IsDeleted", 
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

         CampaignSetting: {
            Name: "CampaignSetting", 
            Type: "CampaignSetting",
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
        VirtualAgent: {
            Name: "VirtualAgent", 
            Type: "VirtualAgentDetail",
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
