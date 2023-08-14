import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface PassInterface {
  id?: string;
  name: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface PassGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  organization_id?: string;
}
