/**
 * Contact entity type
 */
export interface Contact {
  Id: number;
  FirstName: string | null;
  LastName: string | null;
  Name: string | null;
  Telephone1: string | null;
  Telephone2: string | null;
  Telephone3: string | null;
  Telephone4: string | null;
  Email: string | null;
  CampaignId: number | null;
  IsDeleted: boolean;
}

/**
 * Contact list item props
 */
export interface ContactListItemProps {
  contact: Contact;
  isSelected: boolean;
  onSelect: (contact: Contact) => void;
}

