import axios from 'axios';
import queryString from 'query-string';
import { MissionInterface, MissionGetQueryInterface } from 'interfaces/mission';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getMissions = async (query?: MissionGetQueryInterface): Promise<PaginatedInterface<MissionInterface>> => {
  const response = await axios.get('/api/missions', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createMission = async (mission: MissionInterface) => {
  const response = await axios.post('/api/missions', mission);
  return response.data;
};

export const updateMissionById = async (id: string, mission: MissionInterface) => {
  const response = await axios.put(`/api/missions/${id}`, mission);
  return response.data;
};

export const getMissionById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/missions/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteMissionById = async (id: string) => {
  const response = await axios.delete(`/api/missions/${id}`);
  return response.data;
};
