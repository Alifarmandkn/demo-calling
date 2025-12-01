import type { CallFlow } from './CallFlow.d.ts';
import type { CampaignType } from './CampaignType.d.ts'

interface CallFlow_Includes {
    readonly CampaignType?: CampaignType_Includes;
}


interface CallFlow_Conditions {
    readonly IdIn?: ReadonlyArray<Id<CallFlow>>;
    readonly CampaignTypeIdIn?: ReadonlyArray<Id<CampaignType>>;
    readonly DirectionGreater?: number; // System_Int32
    readonly DirectionGreaterEqual?: number; // System_Int32
    readonly DirectionLess?: number; // System_Int32
    readonly DirectionLessEqual?: number; // System_Int32
    readonly DirectionIn?: ReadonlyArray<number>;
    readonly LanguagesIn?: ReadonlyArray<string[]>;
    readonly MvaReferenceStartsWith?: string;
    readonly MvaReferenceIn?: ReadonlyArray<string>;
    readonly NameStartsWith?: string;
    readonly NameIn?: ReadonlyArray<string>;
}

