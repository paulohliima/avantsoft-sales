import { IClientResponse, IClientRequest, ICreateClientResponse } from '@/interfaces/clients';
import axios from 'axios';

const API_URL = '/api/clients';

export const clientService = {
  getAll: async (): Promise<IClientResponse> => {
    const response = await axios.get<IClientResponse>(API_URL);
    return response.data;
  },

  create: async (data: IClientRequest): Promise<ICreateClientResponse> => {
    const response = await axios.post<ICreateClientResponse>(API_URL, data);
    return response.data;
  },
};
