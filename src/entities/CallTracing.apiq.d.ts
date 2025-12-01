import type { CallTracing } from './CallTracing.d.ts';
import type { ContactCall } from './ContactCall.d.ts'

interface CallTracing_Includes {
    readonly ContactCall?: ContactCall_Includes;
}


interface CallTracing_Conditions {
    readonly IdIn?: ReadonlyArray<Id<CallTracing>>;
    readonly CallLegStartsWith?: string;
    readonly CallLegIn?: ReadonlyArray<string>;
    readonly CategoryStartsWith?: string;
    readonly CategoryIn?: ReadonlyArray<string>;
    readonly ContactCallIdIn?: ReadonlyArray<Id<ContactCall>>;
    readonly DataStartsWith?: string;
    readonly DataIn?: ReadonlyArray<string>;
    readonly LogLevelGreater?: number; // System_Int32
    readonly LogLevelGreaterEqual?: number; // System_Int32
    readonly LogLevelLess?: number; // System_Int32
    readonly LogLevelLessEqual?: number; // System_Int32
    readonly LogLevelIn?: ReadonlyArray<number>;
    readonly TimestampGreater?: Date; // None
    readonly TimestampGreaterEqual?: Date; // None
    readonly TimestampLess?: Date; // None
    readonly TimestampLessEqual?: Date; // None
    readonly TimestampIn?: ReadonlyArray<Date>;
}

