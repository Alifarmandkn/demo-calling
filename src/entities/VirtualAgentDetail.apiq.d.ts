import type { VirtualAgentDetail } from './VirtualAgentDetail.d.ts';

interface VirtualAgentDetail_Includes {
}


interface VirtualAgentDetail_Conditions {
    readonly IdIn?: ReadonlyArray<Id<VirtualAgentDetail>>;
    readonly AccentStartsWith?: string;
    readonly AccentIn?: ReadonlyArray<string>;
    readonly AccentIsNull?: boolean;
    readonly AgentNameStartsWith?: string;
    readonly AgentNameIn?: ReadonlyArray<string>;
    readonly AgentNameIsNull?: boolean;
    readonly CreatedAtGreater?: Date; // None
    readonly CreatedAtGreaterEqual?: Date; // None
    readonly CreatedAtLess?: Date; // None
    readonly CreatedAtLessEqual?: Date; // None
    readonly CreatedAtIn?: ReadonlyArray<Date>;
    readonly DescriptionStartsWith?: string;
    readonly DescriptionIn?: ReadonlyArray<string>;
    readonly DescriptionIsNull?: boolean;
    readonly ExternalRefIdStartsWith?: string;
    readonly ExternalRefIdIn?: ReadonlyArray<string>;
    readonly ExternalRefIdIsNull?: boolean;
    readonly GenderStartsWith?: string;
    readonly GenderIn?: ReadonlyArray<string>;
    readonly IsActive?: boolean;
    readonly LanguageStartsWith?: string;
    readonly LanguageIn?: ReadonlyArray<string>;
    readonly LanguageIsNull?: boolean;
    readonly MvaLanguageStartsWith?: string;
    readonly MvaLanguageIn?: ReadonlyArray<string>;
    readonly MvaLanguageIsNull?: boolean;
    readonly PatienceGreater?: number; // System_Int32
    readonly PatienceGreaterEqual?: number; // System_Int32
    readonly PatienceLess?: number; // System_Int32
    readonly PatienceLessEqual?: number; // System_Int32
    readonly PatienceIn?: ReadonlyArray<number>;
    readonly PositivityGreater?: number; // System_Int32
    readonly PositivityGreaterEqual?: number; // System_Int32
    readonly PositivityLess?: number; // System_Int32
    readonly PositivityLessEqual?: number; // System_Int32
    readonly PositivityIn?: ReadonlyArray<number>;
    readonly PreviewUrlStartsWith?: string;
    readonly PreviewUrlIn?: ReadonlyArray<string>;
    readonly PreviewUrlIsNull?: boolean;
    readonly ProviderStartsWith?: string;
    readonly ProviderIn?: ReadonlyArray<string>;
    readonly ProviderIsNull?: boolean;
    readonly ProviderIdStartsWith?: string;
    readonly ProviderIdIn?: ReadonlyArray<string>;
    readonly ProviderIdIsNull?: boolean;
    readonly SpeedGreater?: number; // System_Int32
    readonly SpeedGreaterEqual?: number; // System_Int32
    readonly SpeedLess?: number; // System_Int32
    readonly SpeedLessEqual?: number; // System_Int32
    readonly SpeedIn?: ReadonlyArray<number>;
    readonly TonalityStartsWith?: string;
    readonly TonalityIn?: ReadonlyArray<string>;
    readonly TonalityIsNull?: boolean;
    readonly UpdatedAtGreater?: Date; // None
    readonly UpdatedAtGreaterEqual?: Date; // None
    readonly UpdatedAtLess?: Date; // None
    readonly UpdatedAtLessEqual?: Date; // None
    readonly UpdatedAtIn?: ReadonlyArray<Date>;
    readonly VoiceIdStartsWith?: string;
    readonly VoiceIdIn?: ReadonlyArray<string>;
    readonly VoiceIdIsNull?: boolean;
}

