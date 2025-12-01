import { CommProviderAccount, CommProviderAccountTypeInfo } from './CommProviderAccount.ts'
import { Project, ProjectTypeInfo } from './Project.ts'
import { Campaign, CampaignTypeInfo } from './Campaign.ts'

export interface InboundNumberUpdatableProperties {
   readonly CampaignId: Id<Campaign> | null;
   readonly IsActive: boolean;
   readonly IsCallerId: boolean;
   readonly IsDebugging: boolean;
}

export interface InboundNumberProperties extends InboundNumberUpdatableProperties {
   readonly CommProviderAccountId: Id<CommProviderAccount>;
   readonly NumberCommonFormat: string;
   readonly NumberCommProviderFormat: string;
   readonly ProjectId: Id<Project>;
}

export interface InboundNumberAssociations {
   readonly CommProviderAccount?: CommProviderAccount;
   readonly Project?: Project;
   readonly Campaign?: Campaign;
}

export interface InboundNumber extends InboundNumberProperties, InboundNumberAssociations {
   readonly Id: Id<InboundNumber>;
   readonly CallerIdUsageCount: number;
   readonly IsDeleted: boolean;
   readonly LastUsedTime: Date | null;
}

const defaultUpdatableProperties: InboundNumberUpdatableProperties = {
   CampaignId: null,
   IsActive: false,
   IsCallerId: false,
   IsDebugging: false
}

const defaultProperties: InboundNumberProperties = {
    ...defaultUpdatableProperties,
   CommProviderAccountId: 0 as Id<CommProviderAccount>,
   NumberCommonFormat: '',
   NumberCommProviderFormat: '',
   ProjectId: 0 as Id<Project>
}

export const InboundNumberTypeInfo: IEntityInfo<InboundNumber, InboundNumberProperties, InboundNumberUpdatableProperties, InboundNumberAssociations> = {
    Name: "InboundNumber",
    EntityType: {} as InboundNumber,
    PropertiesType: {} as InboundNumberProperties,
    UpdatablePropertiesType: {} as InboundNumberUpdatableProperties,
    Default: defaultProperties,
    DefaultUpdatable: defaultUpdatableProperties,
    AssociationTypeInfos: {
        CommProviderAccount: () => CommProviderAccountTypeInfo,
        Project: () => ProjectTypeInfo,
        Campaign: () => CampaignTypeInfo,
     },
     Properties: {
         Id: {
            Name: "Id", 
            Type: "Id<InboundNumber>",
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

         CallerIdUsageCount: {
            Name: "CallerIdUsageCount", 
            Type: "number",
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
        IsDeleted: {
            Name: "IsDeleted", 
            Type: "boolean",
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
        LastUsedTime: {
            Name: "LastUsedTime", 
            Type: "Date",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: false,
            IsInsertable: false,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },

         CommProviderAccountId: {
            Name: "CommProviderAccountId", 
            Type: "Id<CommProviderAccount>",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: false,
            IsInsertable: true,
            IsAssociationId: true,
            IsAssociation: false,
            AssociationType: "CommProviderAccount",
            AssociationProp: "CommProviderAccount",
        },
        NumberCommonFormat: {
            Name: "NumberCommonFormat", 
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
        NumberCommProviderFormat: {
            Name: "NumberCommProviderFormat", 
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
        ProjectId: {
            Name: "ProjectId", 
            Type: "Id<Project>",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: false,
            IsInsertable: true,
            IsAssociationId: true,
            IsAssociation: false,
            AssociationType: "Project",
            AssociationProp: "Project",
        },

         CampaignId: {
            Name: "CampaignId", 
            Type: "Id<Campaign>",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: true,
            IsAssociation: false,
            AssociationType: "Campaign",
            AssociationProp: "Campaign",
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
        IsCallerId: {
            Name: "IsCallerId", 
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
        IsDebugging: {
            Name: "IsDebugging", 
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

         CommProviderAccount: {
            Name: "CommProviderAccount", 
            Type: "CommProviderAccount",
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
        Project: {
            Name: "Project", 
            Type: "Project",
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
        Campaign: {
            Name: "Campaign", 
            Type: "Campaign",
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
