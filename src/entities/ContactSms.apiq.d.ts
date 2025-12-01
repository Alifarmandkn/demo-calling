import type { ContactSms } from './ContactSms.d.ts';
import type { ContactCall } from './ContactCall.d.ts'
import type { Contact } from './Contact.d.ts'
import type { MessageStatus } from './MessageStatus.d.ts'

interface ContactSms_Includes {
    readonly Call?: Call_Includes;
    readonly Contact?: Contact_Includes;
    readonly Status?: Status_Includes;
}


interface ContactSms_Conditions {
    readonly IdIn?: ReadonlyArray<Id<ContactSms>>;
    readonly CallIdIn?: ReadonlyArray<Id<ContactCall>>;
    readonly CallIdIsNull?: boolean;
    readonly ContactIdIn?: ReadonlyArray<Id<Contact>>;
    readonly ExternalUuidStartsWith?: string;
    readonly ExternalUuidIn?: ReadonlyArray<string>;
    readonly ExternalUuidIsNull?: boolean;
    readonly FromStartsWith?: string;
    readonly FromIn?: ReadonlyArray<string>;
    readonly ReasonStartsWith?: string;
    readonly ReasonIn?: ReadonlyArray<string>;
    readonly SentTimeGreater?: Date; // None
    readonly SentTimeGreaterEqual?: Date; // None
    readonly SentTimeLess?: Date; // None
    readonly SentTimeLessEqual?: Date; // None
    readonly SentTimeIn?: ReadonlyArray<Date>;
    readonly StatusIdIn?: ReadonlyArray<Id<MessageStatus>>;
    readonly TextStartsWith?: string;
    readonly TextIn?: ReadonlyArray<string>;
    readonly ToStartsWith?: string;
    readonly ToIn?: ReadonlyArray<string>;
    readonly UpdatedTimeGreater?: Date; // None
    readonly UpdatedTimeGreaterEqual?: Date; // None
    readonly UpdatedTimeLess?: Date; // None
    readonly UpdatedTimeLessEqual?: Date; // None
    readonly UpdatedTimeIn?: ReadonlyArray<Date>;
}

