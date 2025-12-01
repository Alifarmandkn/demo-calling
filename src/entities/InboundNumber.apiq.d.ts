import type { InboundNumber } from './InboundNumber.d.ts';
import type { Campaign } from './Campaign.d.ts'
import type { CommProviderAccount } from './CommProviderAccount.d.ts'
import type { Project } from './Project.d.ts'

interface InboundNumber_Includes {
    readonly Campaign?: Campaign_Includes;
    readonly CommProviderAccount?: CommProviderAccount_Includes;
    readonly Project?: Project_Includes;
}


interface InboundNumber_Conditions {
    readonly IdIn?: ReadonlyArray<Id<InboundNumber>>;
    readonly CallerIdUsageCountGreater?: number; // System_Int64
    readonly CallerIdUsageCountGreaterEqual?: number; // System_Int64
    readonly CallerIdUsageCountLess?: number; // System_Int64
    readonly CallerIdUsageCountLessEqual?: number; // System_Int64
    readonly CallerIdUsageCountIn?: ReadonlyArray<number>;
    readonly CampaignIdIn?: ReadonlyArray<Id<Campaign>>;
    readonly CampaignIdIsNull?: boolean;
    readonly CommProviderAccountIdIn?: ReadonlyArray<Id<CommProviderAccount>>;
    readonly IsActive?: boolean;
    readonly IsCallerId?: boolean;
    readonly IsDebugging?: boolean;
    readonly IsDeleted?: boolean;
    readonly LastUsedTimeGreater?: Date; // None
    readonly LastUsedTimeGreaterEqual?: Date; // None
    readonly LastUsedTimeLess?: Date; // None
    readonly LastUsedTimeLessEqual?: Date; // None
    readonly LastUsedTimeIn?: ReadonlyArray<Date>;
    readonly LastUsedTimeIsNull?: boolean;
    readonly NumberCommonFormatStartsWith?: string;
    readonly NumberCommonFormatIn?: ReadonlyArray<string>;
    readonly NumberCommProviderFormatStartsWith?: string;
    readonly NumberCommProviderFormatIn?: ReadonlyArray<string>;
    readonly ProjectIdIn?: ReadonlyArray<Id<Project>>;
}

