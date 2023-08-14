import axios from 'axios';
import queryString from 'query-string';
import { WeaponInterface, WeaponGetQueryInterface } from 'interfaces/weapon';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getWeapons = async (query?: WeaponGetQueryInterface): Promise<PaginatedInterface<WeaponInterface>> => {
  const response = await axios.get('/api/weapons', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createWeapon = async (weapon: WeaponInterface) => {
  const response = await axios.post('/api/weapons', weapon);
  return response.data;
};

export const updateWeaponById = async (id: string, weapon: WeaponInterface) => {
  const response = await axios.put(`/api/weapons/${id}`, weapon);
  return response.data;
};

export const getWeaponById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/weapons/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteWeaponById = async (id: string) => {
  const response = await axios.delete(`/api/weapons/${id}`);
  return response.data;
};
