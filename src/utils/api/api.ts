import axios from 'axios';

export const api = axios.create({
   baseURL: '/api',
});

export const fetcher = async <T>(url: string): Promise<T> => {
   const result = await api.get(url);
   return result.data;
};
