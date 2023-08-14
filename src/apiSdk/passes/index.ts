import axios from 'axios';
import queryString from 'query-string';
import { PassInterface, PassGetQueryInterface } from 'interfaces/pass';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPasses = async (query?: PassGetQueryInterface): Promise<PaginatedInterface<PassInterface>> => {
  const response = await axios.get('/api/passes', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createPass = async (pass: PassInterface) => {
  const response = await axios.post('/api/passes', pass);
  return response.data;
};

export const updatePassById = async (id: string, pass: PassInterface) => {
  const response = await axios.put(`/api/passes/${id}`, pass);
  return response.data;
};

export const getPassById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/passes/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePassById = async (id: string) => {
  const response = await axios.delete(`/api/passes/${id}`);
  return response.data;
};
