import React, { useState } from 'react';

import Pagination from '../components/Pagination';
import RepoIndex from '../components/RepoIndex';
import Loading from '../components/Loading';
import { getOwnerRepos } from '../services/fetchApi';
import SearchBar from '../components/SearchBar';

const Browse = () => {
  const [input, setInput] = useState<string>('');
  const [inputError, setInputError] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [ownerRepos, setOwnerRepos] = useState<Owner>(initialOwnerState);

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value }: { value: string } = e.currentTarget;
    setInput(value);
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    if (inputHasError(input)) {
      setInputError(true);
    } else {
      fetchRepoZoomApi();
      setInputError(false);
    }
  };

  const inputHasError = (value: string) => {
    const re = /[A-Za-z0-9]/g;
    return !re.test(value) || value === '';
  };

  const fetchRepoZoomApi = async (page: number = 1): Promise<void> => {
    setError(false);
    setIsLoading(true);
    setOwnerRepos(initialOwnerState);

    try {
      const response = await getOwnerRepos(input, page);
      if (response) setOwnerRepos(response);
      else setError(true);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSpecificReposPage = async (page: number): Promise<void> => {
    await fetchRepoZoomApi(page);
  };

  return (
    <section className="max-w-5xl px-6 py-4 mx-auto lg:px-8">
      <SearchBar
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        input={input}
        inputError={inputError}
      />

      {!ownerRepos.reposNumber && !isLoading && (
        <p className="my-16 text-lg font-semibold">
          {!error
            ? 'Start searching Github users or oganizations to browse'
            : 'There is a problem with the API request'}
        </p>
      )}

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Pagination
            reposNumber={ownerRepos.reposNumber}
            page={ownerRepos.page}
            fetchSpecificReposPage={fetchSpecificReposPage}
          />
          <RepoIndex {...ownerRepos} />
        </>
      )}
    </section>
  );
};

export default Browse;

const initialOwnerState = {
  avatar: '',
  bio: '',
  createdAt: '',
  email: '',
  id: 0,
  name: '',
  fullName: '',
  repos: [],
  page: 1,
  reposNumber: 0,
  type: '',
  updatedAt: '',
  url: '',
  username: '',
};

export interface Repo {
  id: string;
  name: string;
  cloneUrl: string;
  isFav: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface Owner {
  avatar: string;
  bio: string;
  createdAt: string;
  email: string;
  id: number;
  name: string;
  fullName: string;
  repos: Repo[];
  page: number;
  reposNumber: number;
  type: string;
  updatedAt: string;
  url: string;
  username: string;
}
