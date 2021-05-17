import axios from 'axios';
import { Owner } from '../views/Browse';

export const getOwnerRepos = async (owner: string): Promise<Owner> => {
  const response = await axios.get(`http://localhost:5000/repos/${owner}`);
  return response.data.data;
};
