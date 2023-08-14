import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface MissionInterface {
  id?: string;
  name: string;
  reward: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface MissionGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  reward?: string;
  organization_id?: string;
}
