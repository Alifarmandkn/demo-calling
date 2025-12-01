import type { ClientDialingConfig } from './ClientDialingConfig.d.ts';
import type { DialingMode } from '../DialingMode.d.ts'

interface ClientDialingConfig_Includes {
}


interface ClientDialingConfig_Conditions {
    readonly IsOutboundDialingRunning?: boolean;
    readonly LastSupervisionTimestampGreater?: Date; // None
    readonly LastSupervisionTimestampGreaterEqual?: Date; // None
    readonly LastSupervisionTimestampLess?: Date; // None
    readonly LastSupervisionTimestampLessEqual?: Date; // None
    readonly LastSupervisionTimestampIn?: ReadonlyArray<Date>;
    readonly LastSupervisionTimestampIsNull?: boolean;
    readonly OutboundCallsRemainingGreater?: number; // System_Int32
    readonly OutboundCallsRemainingGreaterEqual?: number; // System_Int32
    readonly OutboundCallsRemainingLess?: number; // System_Int32
    readonly OutboundCallsRemainingLessEqual?: number; // System_Int32
    readonly OutboundCallsRemainingIn?: ReadonlyArray<number>;
    readonly OutboundCallsRemainingIsNull?: boolean;
    readonly OutboundCapacityGreater?: number; // System_Int32
    readonly OutboundCapacityGreaterEqual?: number; // System_Int32
    readonly OutboundCapacityLess?: number; // System_Int32
    readonly OutboundCapacityLessEqual?: number; // System_Int32
    readonly OutboundCapacityIn?: ReadonlyArray<number>;
    readonly OutboundDialingModeIn?: ReadonlyArray<DialingMode>;
    readonly OutboundMillisecondsBetweenCallsGreater?: number; // System_Int32
    readonly OutboundMillisecondsBetweenCallsGreaterEqual?: number; // System_Int32
    readonly OutboundMillisecondsBetweenCallsLess?: number; // System_Int32
    readonly OutboundMillisecondsBetweenCallsLessEqual?: number; // System_Int32
    readonly OutboundMillisecondsBetweenCallsIn?: ReadonlyArray<number>;
    readonly OutboundMillisecondsBetweenCallsIsNull?: boolean;
    readonly SupervisionTimeoutGreater?: string; // None
    readonly SupervisionTimeoutGreaterEqual?: string; // None
    readonly SupervisionTimeoutLess?: string; // None
    readonly SupervisionTimeoutLessEqual?: string; // None
    readonly SupervisionTimeoutIn?: ReadonlyArray<string>;
    readonly SupervisionTimeoutIsNull?: boolean;
}

