import type { Project } from './Project.d.ts';
import type { CampaignType } from './CampaignType.d.ts'
import type { Country } from './Country.d.ts'

interface Project_Includes {
    readonly CampaignType?: CampaignType_Includes;
    readonly Country?: Country_Includes;
}


interface Project_Conditions {
    readonly IdIn?: ReadonlyArray<Id<Project>>;
    readonly CampaignTypeIdIn?: ReadonlyArray<Id<CampaignType>>;
    readonly CampaignTypeIdIsNull?: boolean;
    readonly CountryIdIn?: ReadonlyArray<Id<Country>>;
    readonly CountryIdIsNull?: boolean;
    readonly DescriptionStartsWith?: string;
    readonly DescriptionIn?: ReadonlyArray<string>;
    readonly DescriptionIsNull?: boolean;
    readonly IsActive?: boolean;
    readonly NameStartsWith?: string;
    readonly NameIn?: ReadonlyArray<string>;
    readonly TimeZoneStartsWith?: string;
    readonly TimeZoneIn?: ReadonlyArray<string>;
    readonly TimeZoneIsNull?: boolean;
}

