import type { ContactPhaseLogReferenceData } from './ContactPhaseLogReferenceData.d.ts';
import type { ContactPhaseLog } from './ContactPhaseLog.d.ts'

interface ContactPhaseLogReferenceData_Includes {
    readonly ContactPhaseLog?: ContactPhaseLog_Includes;
}


interface ContactPhaseLogReferenceData_Conditions {
    readonly ContactPhaseLogIdIn?: ReadonlyArray<Id<ContactPhaseLog>>;
    readonly PhaseReferenceStartsWith?: string;
    readonly PhaseReferenceIn?: ReadonlyArray<string>;
    readonly PrevPhaseReferenceStartsWith?: string;
    readonly PrevPhaseReferenceIn?: ReadonlyArray<string>;
    readonly PrevPhaseReferenceIsNull?: boolean;
}

