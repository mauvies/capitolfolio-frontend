import React, { useState } from 'react';
import { SearchIcon } from '@heroicons/react/outline';

import Pagination from '../components/Pagination';
import RepoIndex from '../components/RepoIndex';
import { getOwnerRepos } from '../services/fetchApi';

const initialOwnerState = {
  avatar: '',
  bio: '',
  createdAt: '',
  email: '',
  id: 0,
  name: '',
  fullName: '',
  repos: [],
  reposNumber: 0,
  type: '',
  updatedAt: '',
  url: '',
  username: '',
};

const Browse = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [ownerRepos, setOwnerRepos] = useState<Owner>(initialOwnerState);

  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setInput(e.currentTarget.value);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await getOwnerRepos(input);
      setOwnerRepos(response);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto py-4 px-6 lg:px-8">
      <form
        className="flex items-center justify-between bg-gray-100 rounded-2xl w-64 h-10 flex-1 px-3 mx-auto"
        onSubmit={handleSubmit}
      >
        <SearchIcon className="text-gray-400 h-6 w-6 " />
        <input
          type="text"
          className="w-5/6 bg-gray-100 outline-none"
          placeholder="Search Github"
          value={input}
          onChange={onChange}
        />
      </form>

      <p className="font-semibold my-6 text-lg">
        {ownerRepos.reposNumber
          ? `${ownerRepos.reposNumber} repository results`
          : 'Start searching Github users or oganizations to browse'}
      </p>

      {isLoading ? (
        <img
          src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/source.gif"
          alt=""
          className="mx-auto"
        />
      ) : (
        <React.Fragment>
          <RepoIndex {...ownerRepos} />
          <Pagination reposNumber={ownerRepos.reposNumber} />
        </React.Fragment>
      )}

      {error && <p>Something went wrong</p>}
    </section>
  );
};

export default Browse;

export type Repo = {
  id: string;
  name: string;
  cloneUrl: string;
  isFav: boolean;
  createdAt: string;
  updatedAt: string;
};
export type Owner = {
  avatar: string;
  bio: string;
  createdAt: string;
  email: string;
  id: number;
  name: string;
  fullName: string;
  repos: Repo[];
  reposNumber: number;
  type: string;
  updatedAt: string;
  url: string;
  username: string;
};
