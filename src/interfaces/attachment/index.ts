import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface AttachmentInterface {
  id?: string;
  name: string;
  type: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface AttachmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  type?: string;
  organization_id?: string;
}
