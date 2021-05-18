import axios from 'axios';
import { Owner, Repo } from '../views/Browse';


export const getOwnerRepos = async (
  owner: string,
  page: number = 1
): Promise<Owner> => {

  try {

    const response = await axios.post('http://localhost:5000/repos', {
      owner,
      page,
    });

    return response.data.data;

  } catch (error) {
    throw new Error(error);
  }

};


export const toggleRepo = async (id: Repo['id'], isFav: boolean) => {

  try {
    const response = isFav
      ? await axios.delete(`http://localhost:5000/favorites/${id}`)
      : await axios.post('http://localhost:5000/favorites', { id });

    return response.data;

  } catch (error) {
    throw new Error(error);
  }
};
