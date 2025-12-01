import type { ContactList } from './ContactList.d.ts';
import type { Campaign } from './Campaign.d.ts'

interface ContactList_Includes {
    readonly Campaign?: Campaign_Includes;
}


interface ContactList_Conditions {
    readonly IdIn?: ReadonlyArray<Id<ContactList>>;
    readonly ActiveFromGreater?: Date; // None
    readonly ActiveFromGreaterEqual?: Date; // None
    readonly ActiveFromLess?: Date; // None
    readonly ActiveFromLessEqual?: Date; // None
    readonly ActiveFromIn?: ReadonlyArray<Date>;
    readonly ActiveFromIsNull?: boolean;
    readonly ActiveToGreater?: Date; // None
    readonly ActiveToGreaterEqual?: Date; // None
    readonly ActiveToLess?: Date; // None
    readonly ActiveToLessEqual?: Date; // None
    readonly ActiveToIn?: ReadonlyArray<Date>;
    readonly ActiveToIsNull?: boolean;
    readonly CampaignIdIn?: ReadonlyArray<Id<Campaign>>;
    readonly CampaignIdIsNull?: boolean;
    readonly DescriptionStartsWith?: string;
    readonly DescriptionIn?: ReadonlyArray<string>;
    readonly DescriptionIsNull?: boolean;
    readonly IsActive?: boolean;
    readonly IsTest?: boolean;
    readonly NameStartsWith?: string;
    readonly NameIn?: ReadonlyArray<string>;
}

