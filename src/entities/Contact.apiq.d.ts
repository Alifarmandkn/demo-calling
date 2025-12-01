import type { Contact } from './Contact.d.ts';
import type { Campaign } from './Campaign.d.ts'
import type { ContactList } from './ContactList.d.ts'
import type { Phase } from './Phase.d.ts'
import type { Project } from './Project.d.ts'

interface Contact_Includes {
    readonly Campaign?: Campaign_Includes;
    readonly ContactList?: ContactList_Includes;
    readonly CurrentPhase?: CurrentPhase_Includes;
    readonly Project?: Project_Includes;
}


interface Contact_Conditions {
    readonly IdIn?: ReadonlyArray<Id<Contact>>;
    readonly AccountNumberStartsWith?: string;
    readonly AccountNumberIn?: ReadonlyArray<string>;
    readonly AccountNumberIsNull?: boolean;
    readonly BusinessHoursStartsWith?: string;
    readonly BusinessHoursIn?: ReadonlyArray<string>;
    readonly BusinessHoursIsNull?: boolean;
    readonly CallAttemptGreater?: number; // System_Int32
    readonly CallAttemptGreaterEqual?: number; // System_Int32
    readonly CallAttemptLess?: number; // System_Int32
    readonly CallAttemptLessEqual?: number; // System_Int32
    readonly CallAttemptIn?: ReadonlyArray<number>;
    readonly CampaignIdIn?: ReadonlyArray<Id<Campaign>>;
    readonly CampaignIdIsNull?: boolean;
    readonly CityStartsWith?: string;
    readonly CityIn?: ReadonlyArray<string>;
    readonly CityIsNull?: boolean;
    readonly ContactListIdIn?: ReadonlyArray<Id<ContactList>>;
    readonly CountryStartsWith?: string;
    readonly CountryIn?: ReadonlyArray<string>;
    readonly CountryIsNull?: boolean;
    readonly CreatedAtGreater?: Date; // None
    readonly CreatedAtGreaterEqual?: Date; // None
    readonly CreatedAtLess?: Date; // None
    readonly CreatedAtLessEqual?: Date; // None
    readonly CreatedAtIn?: ReadonlyArray<Date>;
    readonly CreditorStartsWith?: string;
    readonly CreditorIn?: ReadonlyArray<string>;
    readonly CreditorIsNull?: boolean;
    readonly CurrentPhaseIdIn?: ReadonlyArray<Id<Phase>>;
    readonly CurrentPhaseIdIsNull?: boolean;
    readonly DataJsonStartsWith?: string;
    readonly DataJsonIn?: ReadonlyArray<string>;
    readonly DataJsonIsNull?: boolean;
    readonly DateOfBirthStartsWith?: string;
    readonly DateOfBirthIn?: ReadonlyArray<string>;
    readonly DateOfBirthIsNull?: boolean;
    readonly DebtAmountStartsWith?: string;
    readonly DebtAmountIn?: ReadonlyArray<string>;
    readonly DebtAmountIsNull?: boolean;
    readonly DebtCollectorStartsWith?: string;
    readonly DebtCollectorIn?: ReadonlyArray<string>;
    readonly DebtCollectorIsNull?: boolean;
    readonly DebtDebitorStartsWith?: string;
    readonly DebtDebitorIn?: ReadonlyArray<string>;
    readonly DebtDebitorIsNull?: boolean;
    readonly DebtMaxInstallmentsGreater?: number; // System_Int32
    readonly DebtMaxInstallmentsGreaterEqual?: number; // System_Int32
    readonly DebtMaxInstallmentsLess?: number; // System_Int32
    readonly DebtMaxInstallmentsLessEqual?: number; // System_Int32
    readonly DebtMaxInstallmentsIn?: ReadonlyArray<number>;
    readonly DebtMaxInstallmentsIsNull?: boolean;
    readonly DescriptionStartsWith?: string;
    readonly DescriptionIn?: ReadonlyArray<string>;
    readonly EmailStartsWith?: string;
    readonly EmailIn?: ReadonlyArray<string>;
    readonly EmailIsNull?: boolean;
    readonly ExternalIdStartsWith?: string;
    readonly ExternalIdIn?: ReadonlyArray<string>;
    readonly ExternalIdIsNull?: boolean;
    readonly FirstNameStartsWith?: string;
    readonly FirstNameIn?: ReadonlyArray<string>;
    readonly FirstNameIsNull?: boolean;
    readonly HouseNumberStartsWith?: string;
    readonly HouseNumberIn?: ReadonlyArray<string>;
    readonly HouseNumberIsNull?: boolean;
    readonly IsDeleted?: boolean;
    readonly IsTestContact?: boolean;
    readonly LanguageStartsWith?: string;
    readonly LanguageIn?: ReadonlyArray<string>;
    readonly LanguageIsNull?: boolean;
    readonly LastNameStartsWith?: string;
    readonly LastNameIn?: ReadonlyArray<string>;
    readonly LastNameIsNull?: boolean;
    readonly MiddleNameStartsWith?: string;
    readonly MiddleNameIn?: ReadonlyArray<string>;
    readonly MiddleNameIsNull?: boolean;
    readonly MiscInfo1StartsWith?: string;
    readonly MiscInfo1In?: ReadonlyArray<string>;
    readonly MiscInfo1IsNull?: boolean;
    readonly NameStartsWith?: string;
    readonly NameIn?: ReadonlyArray<string>;
    readonly NameOfDeceasedStartsWith?: string;
    readonly NameOfDeceasedIn?: ReadonlyArray<string>;
    readonly NameOfDeceasedIsNull?: boolean;
    readonly NextCallTimeGreater?: Date; // None
    readonly NextCallTimeGreaterEqual?: Date; // None
    readonly NextCallTimeLess?: Date; // None
    readonly NextCallTimeLessEqual?: Date; // None
    readonly NextCallTimeIn?: ReadonlyArray<Date>;
    readonly NextCallTimeIsNull?: boolean;
    readonly ProjectIdIn?: ReadonlyArray<Id<Project>>;
    readonly ProjectIdIsNull?: boolean;
    readonly PropertyCodeStartsWith?: string;
    readonly PropertyCodeIn?: ReadonlyArray<string>;
    readonly PropertyCodeIsNull?: boolean;
    readonly ReferenceStartsWith?: string;
    readonly ReferenceIn?: ReadonlyArray<string>;
    readonly ReferenceIsNull?: boolean;
    readonly SocialSecurityNumberStartsWith?: string;
    readonly SocialSecurityNumberIn?: ReadonlyArray<string>;
    readonly SocialSecurityNumberIsNull?: boolean;
    readonly StatusGreater?: number; // System_Int32
    readonly StatusGreaterEqual?: number; // System_Int32
    readonly StatusLess?: number; // System_Int32
    readonly StatusLessEqual?: number; // System_Int32
    readonly StatusIn?: ReadonlyArray<number>;
    readonly StatusIsNull?: boolean;
    readonly StreetNameStartsWith?: string;
    readonly StreetNameIn?: ReadonlyArray<string>;
    readonly StreetNameIsNull?: boolean;
    readonly Telephone1StartsWith?: string;
    readonly Telephone1In?: ReadonlyArray<string>;
    readonly Telephone2StartsWith?: string;
    readonly Telephone2In?: ReadonlyArray<string>;
    readonly Telephone2IsNull?: boolean;
    readonly Telephone3StartsWith?: string;
    readonly Telephone3In?: ReadonlyArray<string>;
    readonly Telephone3IsNull?: boolean;
    readonly Telephone4StartsWith?: string;
    readonly Telephone4In?: ReadonlyArray<string>;
    readonly Telephone4IsNull?: boolean;
    readonly ZipcodeStartsWith?: string;
    readonly ZipcodeIn?: ReadonlyArray<string>;
    readonly ZipcodeIsNull?: boolean;
}

