import type { DocumentType } from './DocumentType.d.ts';

interface DocumentType_Includes {
}


interface DocumentType_Conditions {
    readonly IdIn?: ReadonlyArray<Id<DocumentType>>;
    readonly CreatedAtGreater?: Date; // None
    readonly CreatedAtGreaterEqual?: Date; // None
    readonly CreatedAtLess?: Date; // None
    readonly CreatedAtLessEqual?: Date; // None
    readonly CreatedAtIn?: ReadonlyArray<Date>;
    readonly DbTableStartsWith?: string;
    readonly DbTableIn?: ReadonlyArray<string>;
    readonly IsActive?: boolean;
    readonly TypeStartsWith?: string;
    readonly TypeIn?: ReadonlyArray<string>;
}

