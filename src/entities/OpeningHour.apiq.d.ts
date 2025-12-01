import type { OpeningHour } from './OpeningHour.d.ts';
import type { Campaign } from './Campaign.d.ts'
import type { Project } from './Project.d.ts'

interface OpeningHour_Includes {
    readonly Campaign?: Campaign_Includes;
    readonly Project?: Project_Includes;
}


interface OpeningHour_Conditions {
    readonly IdIn?: ReadonlyArray<Id<OpeningHour>>;
    readonly CampaignIdIn?: ReadonlyArray<Id<Campaign>>;
    readonly CampaignIdIsNull?: boolean;
    readonly CloseTimeGreater?: string; // None
    readonly CloseTimeGreaterEqual?: string; // None
    readonly CloseTimeLess?: string; // None
    readonly CloseTimeLessEqual?: string; // None
    readonly CloseTimeIn?: ReadonlyArray<string>;
    readonly DayOfWeekStartsWith?: string;
    readonly DayOfWeekIn?: ReadonlyArray<string>;
    readonly OpenTimeGreater?: string; // None
    readonly OpenTimeGreaterEqual?: string; // None
    readonly OpenTimeLess?: string; // None
    readonly OpenTimeLessEqual?: string; // None
    readonly OpenTimeIn?: ReadonlyArray<string>;
    readonly ProjectIdIn?: ReadonlyArray<Id<Project>>;
    readonly ProjectIdIsNull?: boolean;
    readonly Status?: boolean;
}

