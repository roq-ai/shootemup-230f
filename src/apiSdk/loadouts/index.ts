import axios from 'axios';
import queryString from 'query-string';
import { LoadoutInterface, LoadoutGetQueryInterface } from 'interfaces/loadout';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getLoadouts = async (query?: LoadoutGetQueryInterface): Promise<PaginatedInterface<LoadoutInterface>> => {
  const response = await axios.get('/api/loadouts', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createLoadout = async (loadout: LoadoutInterface) => {
  const response = await axios.post('/api/loadouts', loadout);
  return response.data;
};

export const updateLoadoutById = async (id: string, loadout: LoadoutInterface) => {
  const response = await axios.put(`/api/loadouts/${id}`, loadout);
  return response.data;
};

export const getLoadoutById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/loadouts/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteLoadoutById = async (id: string) => {
  const response = await axios.delete(`/api/loadouts/${id}`);
  return response.data;
};
