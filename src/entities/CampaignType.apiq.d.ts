import type { CampaignType } from './CampaignType.d.ts';

interface CampaignType_Includes {
}


interface CampaignType_Conditions {
    readonly IdIn?: ReadonlyArray<Id<CampaignType>>;
    readonly DescriptionStartsWith?: string;
    readonly DescriptionIn?: ReadonlyArray<string>;
    readonly DescriptionIsNull?: boolean;
    readonly NameStartsWith?: string;
    readonly NameIn?: ReadonlyArray<string>;
    readonly ReferenceKeyStartsWith?: string;
    readonly ReferenceKeyIn?: ReadonlyArray<string>;
}

