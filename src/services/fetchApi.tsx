import axios, { AxiosResponse } from 'axios';
import { IOwner, IRepo } from '../views/Browse';
import { FavRepoInterface } from '../views/Favorites';

export const getOwnerRepos = async (
  owner: string,
  page: number = 1
): Promise<IOwner> => {
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

export const toggleRepo = async (id: IRepo['id'], isFav: boolean) => {
  try {
    const response = isFav
      ? await axios.delete(`http://localhost:5000/favorites/${id}`)
      : await axios.post('http://localhost:5000/favorites', { id });

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getFavRepos = async () => {
  try {
    const response = await axios.get<AxiosResponse<any>>(
      'http://localhost:5000/favorites'
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const removeRepoFromFav = async (repoId: FavRepoInterface['repoId']) => {
  try {
    const response = await axios.delete<AxiosResponse<any>>(
      `http://localhost:5000/favorites/${repoId}`
    );
    return response;
  } catch (error) {
    return error;
  }
};
