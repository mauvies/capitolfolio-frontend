import React, { useState } from 'react';

import Pagination from '../components/Pagination';
import RepoIndex from '../components/RepoIndex';
import Loading from '../components/Loading';
import { getOwnerRepos } from '../services/fetchApi';
import SearchBar from '../components/SearchBar';
import inputHasError from '../services/checkInputError';

const Browse = () => {
  const [input, setInput] = useState<string>('');
  const [inputError, setInputError] = useState<boolean>(false);
  const [apiFetchError, setApiFetchError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [ownerRepos, setOwnerRepos] = useState<IOwner>(initialOwnerState);

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

  const fetchRepoZoomApi = async (page: number = 1): Promise<void> => {
    setApiFetchError(false);
    setIsLoading(true);
    setOwnerRepos(initialOwnerState);

    try {
      const response = await getOwnerRepos(input, page);

      if (response) setOwnerRepos(response);
      else setApiFetchError(true);

    } catch (error) {
      setApiFetchError(true);
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
        <p className="my-10 text-lg font-semibold">
          {!apiFetchError
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
          <RepoIndex repos={ownerRepos.repos} />
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

export interface IRepo {
  id: string;
  fullName: string;
  name: string;
  cloneUrl: string;
  description: string;
  language: string;
  isFav: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface IOwner {
  avatar: string;
  bio: string;
  createdAt: string;
  email: string;
  id: number;
  name: string;
  fullName: string;
  repos: IRepo[];
  page: number;
  reposNumber: number;
  type: string;
  updatedAt: string;
  url: string;
  username: string;
}
