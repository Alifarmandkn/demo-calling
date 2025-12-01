import type { VoicebotServer } from './VoicebotServer.d.ts';
import type { CallDirection } from '../CallDirection.d.ts'

interface VoicebotServer_Includes {
}


interface VoicebotServer_Conditions {
    readonly HostStartsWith?: string;
    readonly HostIn?: ReadonlyArray<string>;
    readonly CallDirectionIn?: ReadonlyArray<CallDirection>;
    readonly CapacityGreater?: number; // System_Int32
    readonly CapacityGreaterEqual?: number; // System_Int32
    readonly CapacityLess?: number; // System_Int32
    readonly CapacityLessEqual?: number; // System_Int32
    readonly CapacityIn?: ReadonlyArray<number>;
}

