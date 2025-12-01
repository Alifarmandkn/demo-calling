import { CampaignType, CampaignTypeTypeInfo } from './CampaignType.ts'
import { Country, CountryTypeInfo } from './Country.ts'

export interface ProjectUpdatableProperties {
   readonly CountryId: Id<Country> | null;
   readonly Description: string | null;
   readonly IsActive: boolean;
   readonly Name: string;
   readonly TimeZone: string | null;
}

export interface ProjectProperties extends ProjectUpdatableProperties {
   readonly CampaignTypeId: Id<CampaignType> | null;
}

export interface ProjectAssociations {
   readonly CampaignType?: CampaignType;
   readonly Country?: Country;
}

export interface Project extends ProjectProperties, ProjectAssociations {
   readonly Id: Id<Project>;
}

const defaultUpdatableProperties: ProjectUpdatableProperties = {
   CountryId: null,
   Description: null,
   IsActive: false,
   Name: '',
   TimeZone: null
}

const defaultProperties: ProjectProperties = {
    ...defaultUpdatableProperties,
   CampaignTypeId: null
}

export const ProjectTypeInfo: IEntityInfo<Project, ProjectProperties, ProjectUpdatableProperties, ProjectAssociations> = {
    Name: "Project",
    EntityType: {} as Project,
    PropertiesType: {} as ProjectProperties,
    UpdatablePropertiesType: {} as ProjectUpdatableProperties,
    Default: defaultProperties,
    DefaultUpdatable: defaultUpdatableProperties,
    AssociationTypeInfos: {
        CampaignType: () => CampaignTypeTypeInfo,
        Country: () => CountryTypeInfo,
     },
     Properties: {
         Id: {
            Name: "Id", 
            Type: "Id<Project>",
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
            IsNullable: true,
            IsUpdatable: false,
            IsInsertable: true,
            IsAssociationId: true,
            IsAssociation: false,
            AssociationType: "CampaignType",
            AssociationProp: "CampaignType",
        },

         CountryId: {
            Name: "CountryId", 
            Type: "Id<Country>",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: true,
            IsAssociation: false,
            AssociationType: "Country",
            AssociationProp: "Country",
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
            IsNullable: true,
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

     }
}
