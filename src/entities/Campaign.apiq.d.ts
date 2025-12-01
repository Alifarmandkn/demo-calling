import type { Campaign } from './Campaign.d.ts';
import type { Country } from './Country.d.ts'
import type { CallDirection } from '../CallDirection.d.ts'
import type { Project } from './Project.d.ts'
import type { CampaignType } from './CampaignType.d.ts'

interface Campaign_Includes {
    readonly Country?: Country_Includes;
    readonly Project?: Project_Includes;
    readonly Type?: Type_Includes;
}


interface Campaign_Conditions {
    readonly IdIn?: ReadonlyArray<Id<Campaign>>;
    readonly CountryIdIn?: ReadonlyArray<Id<Country>>;
    readonly CreatedAtGreater?: Date; // None
    readonly CreatedAtGreaterEqual?: Date; // None
    readonly CreatedAtLess?: Date; // None
    readonly CreatedAtLessEqual?: Date; // None
    readonly CreatedAtIn?: ReadonlyArray<Date>;
    readonly DirectionIn?: ReadonlyArray<CallDirection>;
    readonly IsActive?: boolean;
    readonly IsDeleted?: boolean;
    readonly NameStartsWith?: string;
    readonly NameIn?: ReadonlyArray<string>;
    readonly ProjectIdIn?: ReadonlyArray<Id<Project>>;
    readonly TimeZoneStartsWith?: string;
    readonly TimeZoneIn?: ReadonlyArray<string>;
    readonly TypeIdIn?: ReadonlyArray<Id<CampaignType>>;
    readonly UpdatedAtGreater?: Date; // None
    readonly UpdatedAtGreaterEqual?: Date; // None
    readonly UpdatedAtLess?: Date; // None
    readonly UpdatedAtLessEqual?: Date; // None
    readonly UpdatedAtIn?: ReadonlyArray<Date>;
    readonly UpdatedAtIsNull?: boolean;
}

