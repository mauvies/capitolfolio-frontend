import React, { useState } from 'react';
import { SearchIcon } from '@heroicons/react/outline';

import Pagination from '../components/Pagination';
import RepoIndex from '../components/RepoIndex';
import Loading from '../components/Loading';
import { getOwnerRepos } from '../services/fetchApi';

const Browse = () => {
  const [input, setInput] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [ownerRepos, setOwnerRepos] = useState<Owner>(initialOwnerState);

  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value }: { value: string } = e.currentTarget;
    setInput(value);
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    if (input) fetchRepoZoomApi();
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

  const isInputEmptyOrError = () =>
    !ownerRepos.reposNumber && !isLoading && !error;

  return (
    <section className="max-w-5xl px-6 py-4 mx-auto lg:px-8">
      <form
        className="flex items-center justify-between flex-1 w-64 h-10 px-3 mx-auto mb-8 bg-gray-100 rounded-2xl"
        onSubmit={handleSubmit}
      >
        <SearchIcon className="w-6 h-6 text-gray-400 " />
        <input
          type="text"
          name="search"
          className="w-5/6 bg-gray-100 outline-none"
          placeholder="Search Github user"
          value={input}
          onChange={onChange}
        />
      </form>

      <p className="my-6 text-lg font-semibold">
        {isInputEmptyOrError()
          ? 'Start searching Github users or oganizations to browse'
          : 'There is a problem with the API request'}
      </p>

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
