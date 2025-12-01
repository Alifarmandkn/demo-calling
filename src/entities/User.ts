import { Country, CountryTypeInfo } from './Country.ts'
import { Role, RoleTypeInfo } from './Role.ts'

export interface UserUpdatableProperties {
   readonly CountryId: Id<Country>;
   readonly RoleId: Id<Role>;
   readonly Email: string;
   readonly FirstName: string;
   readonly IsActive: boolean;
   readonly LastName: string;
   readonly MfaEnable: boolean;
   readonly MfaType: string | null;
   readonly Name: string | null;
   readonly PhoneNumber: string | null;
   readonly Username: string;
}

export interface UserProperties extends UserUpdatableProperties {
}

export interface UserAssociations {
   readonly Country?: Country;
   readonly Role?: Role;
}

export interface User extends UserProperties, UserAssociations {
   readonly Id: Id<User>;
   readonly CreatedAt: Date;
   readonly DateJoined: Date;
   readonly DisabledAt: Date | null;
   readonly LastLogin: Date | null;
   readonly UpdatedAt: Date | null;
}

const defaultUpdatableProperties: UserUpdatableProperties = {
   CountryId: 0 as Id<Country>,
   RoleId: 0 as Id<Role>,
   Email: '',
   FirstName: '',
   IsActive: false,
   LastName: '',
   MfaEnable: false,
   MfaType: null,
   Name: null,
   PhoneNumber: null,
   Username: ''
}

const defaultProperties: UserProperties = {
    ...defaultUpdatableProperties,

}

export const UserTypeInfo: IEntityInfo<User, UserProperties, UserUpdatableProperties, UserAssociations> = {
    Name: "User",
    EntityType: {} as User,
    PropertiesType: {} as UserProperties,
    UpdatablePropertiesType: {} as UserUpdatableProperties,
    Default: defaultProperties,
    DefaultUpdatable: defaultUpdatableProperties,
    AssociationTypeInfos: {
        Country: () => CountryTypeInfo,
        Role: () => RoleTypeInfo,
     },
     Properties: {
         Id: {
            Name: "Id", 
            Type: "Id<User>",
            PrimaryKeyOrder: 0,
            IsGeneratedKey: true,
            IsNullable: false,
            IsUpdatable: false,
            IsInsertable: false,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },

         CreatedAt: {
            Name: "CreatedAt", 
            Type: "Date",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: false,
            IsInsertable: false,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        DateJoined: {
            Name: "DateJoined", 
            Type: "Date",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: false,
            IsInsertable: false,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        DisabledAt: {
            Name: "DisabledAt", 
            Type: "Date",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: false,
            IsInsertable: false,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        LastLogin: {
            Name: "LastLogin", 
            Type: "Date",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: false,
            IsInsertable: false,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        UpdatedAt: {
            Name: "UpdatedAt", 
            Type: "Date",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: false,
            IsInsertable: false,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },

 
         CountryId: {
            Name: "CountryId", 
            Type: "Id<Country>",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: true,
            IsAssociation: false,
            AssociationType: "Country",
            AssociationProp: "Country",
        },
        RoleId: {
            Name: "RoleId", 
            Type: "Id<Role>",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: true,
            IsAssociation: false,
            AssociationType: "Role",
            AssociationProp: "Role",
        },
        Email: {
            Name: "Email", 
            Type: "string",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        FirstName: {
            Name: "FirstName", 
            Type: "string",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        IsActive: {
            Name: "IsActive", 
            Type: "boolean",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        LastName: {
            Name: "LastName", 
            Type: "string",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        MfaEnable: {
            Name: "MfaEnable", 
            Type: "boolean",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        MfaType: {
            Name: "MfaType", 
            Type: "string",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        Name: {
            Name: "Name", 
            Type: "string",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        PhoneNumber: {
            Name: "PhoneNumber", 
            Type: "string",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        Username: {
            Name: "Username", 
            Type: "string",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },

         Country: {
            Name: "Country", 
            Type: "Country",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: false,
            IsInsertable: false,
            IsAssociationId: false,
            IsAssociation: true,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        Role: {
            Name: "Role", 
            Type: "Role",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: false,
            IsInsertable: false,
            IsAssociationId: false,
            IsAssociation: true,
            AssociationType: undefined,
            AssociationProp: undefined,
        },

     }
}
