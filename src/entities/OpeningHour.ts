import { Campaign, CampaignTypeInfo } from './Campaign.ts'
import { Project, ProjectTypeInfo } from './Project.ts'

export interface OpeningHourUpdatableProperties {
   readonly CloseTime: string;
   readonly OpenTime: string;
   readonly Status: boolean;
}

export interface OpeningHourProperties extends OpeningHourUpdatableProperties {
   readonly CampaignId: Id<Campaign> | null;
   readonly DayOfWeek: string;
   readonly ProjectId: Id<Project> | null;
}

export interface OpeningHourAssociations {
   readonly Campaign?: Campaign;
   readonly Project?: Project;
}

export interface OpeningHour extends OpeningHourProperties, OpeningHourAssociations {
   readonly Id: Id<OpeningHour>;
}

const defaultUpdatableProperties: OpeningHourUpdatableProperties = {
   CloseTime: '08:00',
   OpenTime: '08:00',
   Status: false
}

const defaultProperties: OpeningHourProperties = {
    ...defaultUpdatableProperties,
   CampaignId: null,
   DayOfWeek: '',
   ProjectId: null
}

export const OpeningHourTypeInfo: IEntityInfo<OpeningHour, OpeningHourProperties, OpeningHourUpdatableProperties, OpeningHourAssociations> = {
    Name: "OpeningHour",
    EntityType: {} as OpeningHour,
    PropertiesType: {} as OpeningHourProperties,
    UpdatablePropertiesType: {} as OpeningHourUpdatableProperties,
    Default: defaultProperties,
    DefaultUpdatable: defaultUpdatableProperties,
    AssociationTypeInfos: {
        Campaign: () => CampaignTypeInfo,
        Project: () => ProjectTypeInfo,
     },
     Properties: {
         Id: {
            Name: "Id", 
            Type: "Id<OpeningHour>",
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

 
         CampaignId: {
            Name: "CampaignId", 
            Type: "Id<Campaign>",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: false,
            IsInsertable: true,
            IsAssociationId: true,
            IsAssociation: false,
            AssociationType: "Campaign",
            AssociationProp: "Campaign",
        },
        DayOfWeek: {
            Name: "DayOfWeek", 
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
            IsNullable: true,
            IsUpdatable: false,
            IsInsertable: true,
            IsAssociationId: true,
            IsAssociation: false,
            AssociationType: "Project",
            AssociationProp: "Project",
        },

         CloseTime: {
            Name: "CloseTime", 
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
        OpenTime: {
            Name: "OpenTime", 
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
        Status: {
            Name: "Status", 
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

     }
}
