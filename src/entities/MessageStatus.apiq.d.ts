import type { MessageStatus } from './MessageStatus.d.ts';

interface MessageStatus_Includes {
}


interface MessageStatus_Conditions {
    readonly IdIn?: ReadonlyArray<Id<MessageStatus>>;
    readonly ReferenceKeyStartsWith?: string;
    readonly ReferenceKeyIn?: ReadonlyArray<string>;
}

