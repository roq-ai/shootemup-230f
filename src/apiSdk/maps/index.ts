import axios from 'axios';
import queryString from 'query-string';
import { MapInterface, MapGetQueryInterface } from 'interfaces/map';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getMaps = async (query?: MapGetQueryInterface): Promise<PaginatedInterface<MapInterface>> => {
  const response = await axios.get('/api/maps', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createMap = async (map: MapInterface) => {
  const response = await axios.post('/api/maps', map);
  return response.data;
};

export const updateMapById = async (id: string, map: MapInterface) => {
  const response = await axios.put(`/api/maps/${id}`, map);
  return response.data;
};

export const getMapById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/maps/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteMapById = async (id: string) => {
  const response = await axios.delete(`/api/maps/${id}`);
  return response.data;
};
