import type { ContactPhaseLog } from './ContactPhaseLog.d.ts';
import type { ContactCall } from './ContactCall.d.ts'
import type { Contact } from './Contact.d.ts'
import type { Phase } from './Phase.d.ts'
import type { ContactPhaseLogReferenceData } from './ContactPhaseLogReferenceData.d.ts'

interface ContactPhaseLog_Includes {
    readonly Call?: Call_Includes;
    readonly Contact?: Contact_Includes;
    readonly Phase?: Phase_Includes;
    readonly PrevPhase?: PrevPhase_Includes;
    readonly ReferenceData?: ReferenceData_Includes;
}


interface ContactPhaseLog_Conditions {
    readonly IdIn?: ReadonlyArray<Id<ContactPhaseLog>>;
    readonly CallIdIn?: ReadonlyArray<Id<ContactCall>>;
    readonly CallIdIsNull?: boolean;
    readonly ContactIdIn?: ReadonlyArray<Id<Contact>>;
    readonly PhaseIdIn?: ReadonlyArray<Id<Phase>>;
    readonly PhaseIdIsNull?: boolean;
    readonly PrevPhaseIdIn?: ReadonlyArray<Id<Phase>>;
    readonly PrevPhaseIdIsNull?: boolean;
    readonly ReceivedTimestampGreater?: Date; // None
    readonly ReceivedTimestampGreaterEqual?: Date; // None
    readonly ReceivedTimestampLess?: Date; // None
    readonly ReceivedTimestampLessEqual?: Date; // None
    readonly ReceivedTimestampIn?: ReadonlyArray<Date>;
    readonly ReportedTimestampGreater?: Date; // None
    readonly ReportedTimestampGreaterEqual?: Date; // None
    readonly ReportedTimestampLess?: Date; // None
    readonly ReportedTimestampLessEqual?: Date; // None
    readonly ReportedTimestampIn?: ReadonlyArray<Date>;
}

