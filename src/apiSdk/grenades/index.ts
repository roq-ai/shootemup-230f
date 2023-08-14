import axios from 'axios';
import queryString from 'query-string';
import { GrenadeInterface, GrenadeGetQueryInterface } from 'interfaces/grenade';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getGrenades = async (query?: GrenadeGetQueryInterface): Promise<PaginatedInterface<GrenadeInterface>> => {
  const response = await axios.get('/api/grenades', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createGrenade = async (grenade: GrenadeInterface) => {
  const response = await axios.post('/api/grenades', grenade);
  return response.data;
};

export const updateGrenadeById = async (id: string, grenade: GrenadeInterface) => {
  const response = await axios.put(`/api/grenades/${id}`, grenade);
  return response.data;
};

export const getGrenadeById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/grenades/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteGrenadeById = async (id: string) => {
  const response = await axios.delete(`/api/grenades/${id}`);
  return response.data;
};
