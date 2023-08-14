import { AttachmentInterface } from 'interfaces/attachment';
import { GrenadeInterface } from 'interfaces/grenade';
import { MapInterface } from 'interfaces/map';
import { MissionInterface } from 'interfaces/mission';
import { PassInterface } from 'interfaces/pass';
import { WeaponInterface } from 'interfaces/weapon';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  attachment?: AttachmentInterface[];
  grenade?: GrenadeInterface[];
  map?: MapInterface[];
  mission?: MissionInterface[];
  pass?: PassInterface[];
  weapon?: WeaponInterface[];
  user?: UserInterface;
  _count?: {
    attachment?: number;
    grenade?: number;
    map?: number;
    mission?: number;
    pass?: number;
    weapon?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
