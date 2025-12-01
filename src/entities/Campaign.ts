import { Country, CountryTypeInfo } from './Country.ts'
import { Project, ProjectTypeInfo } from './Project.ts'
import { CampaignType, CampaignTypeTypeInfo } from './CampaignType.ts'

export interface CampaignUpdatableProperties {
   readonly CountryId: Id<Country>;
   readonly IsDeleted: boolean;
   readonly Name: string;
   readonly TimeZone: string;
   readonly UpdatedAt: Date | null;
}

export interface CampaignProperties extends CampaignUpdatableProperties {
   readonly CreatedAt: Date;
   readonly Direction: CallDirection;
   readonly ProjectId: Id<Project>;
   readonly TypeId: Id<CampaignType>;
}

export interface CampaignAssociations {
   readonly Country?: Country;
   readonly Project?: Project;
   readonly Type?: CampaignType;
}

export interface Campaign extends CampaignProperties, CampaignAssociations {
   readonly Id: Id<Campaign>;
   readonly IsActive: boolean;
}

const defaultUpdatableProperties: CampaignUpdatableProperties = {
   CountryId: 0 as Id<Country>,
   IsDeleted: false,
   Name: '',
   TimeZone: '',
   UpdatedAt: null
}

const defaultProperties: CampaignProperties = {
    ...defaultUpdatableProperties,
   CreatedAt: new Date(),
   Direction: '',
   ProjectId: 0 as Id<Project>,
   TypeId: 0 as Id<CampaignType>
}

export const CampaignTypeInfo: IEntityInfo<Campaign, CampaignProperties, CampaignUpdatableProperties, CampaignAssociations> = {
    Name: "Campaign",
    EntityType: {} as Campaign,
    PropertiesType: {} as CampaignProperties,
    UpdatablePropertiesType: {} as CampaignUpdatableProperties,
    Default: defaultProperties,
    DefaultUpdatable: defaultUpdatableProperties,
    AssociationTypeInfos: {
        Country: () => CountryTypeInfo,
        Project: () => ProjectTypeInfo,
        Type: () => CampaignTypeTypeInfo,
     },
     Properties: {
         Id: {
            Name: "Id", 
            Type: "Id<Campaign>",
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

         IsActive: {
            Name: "IsActive", 
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
        Direction: {
            Name: "Direction", 
            Type: "CallDirection",
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
        TypeId: {
            Name: "TypeId", 
            Type: "Id<CampaignType>",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: false,
            IsInsertable: true,
            IsAssociationId: true,
            IsAssociation: false,
            AssociationType: "CampaignType",
            AssociationProp: "Type",
        },

         CountryId: {
            Name: "CountryId", 
            Type: "Id<Country>",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: true,
            IsAssociation: false,
            AssociationType: "Country",
            AssociationProp: "Country",
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
        TimeZone: {
            Name: "TimeZone", 
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
        UpdatedAt: {
            Name: "UpdatedAt", 
            Type: "Date",
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

         Country: {
            Name: "Country", 
            Type: "Country",
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
        Type: {
            Name: "Type", 
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
