import { useEffect, useState } from 'react';
import FavRepo from '../components/FavRepo';
import { getFavRepos, removeRepoFromFav } from '../services/fetchApi';
export interface FavRepoInterface {
  repoId: string;
  owner: string;
  name: string;
  description: string;
  language: string;
  cloneUrl: string;
  createdAt: string;
  updatedAt: string;
}

const Favorites = () => {
  const [favRepos, setFavRepos] = useState<FavRepoInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [hook, setHook] = useState<boolean>(false);

  useEffect(() => {
    getFavorites();
  }, [hook]);

  const getFavorites = async () => {
    const response = await getFavRepos();
    setFavRepos(response.data);
  };

  const deleteRepo = async (repoId: FavRepoInterface['repoId']) => {
    setIsLoading(true);
    setError(false);
    try {
      const repoDeleted = await removeRepoFromFav(repoId);
      setHook(!hook);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="max-w-5xl px-6 py-4 mx-auto lg:px-8">
      <p className="my-6 text-lg font-semibold">Favorites repos list</p>
      {favRepos.length !== 0 &&
        favRepos.map((fav: FavRepoInterface) => {
          return (
            <FavRepo
              key={fav.repoId}
              fav={fav}
              isLoading={isLoading}
              deleteRepo={deleteRepo}
            />
          );
        })}
    </section>
  );
};

export default Favorites;
