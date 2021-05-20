import React, { useEffect, useState } from 'react';

import { StarIcon as StarIconSolid } from '@heroicons/react/solid';
import { DesktopComputerIcon, StarIcon } from '@heroicons/react/outline';

import { toggleRepo } from '../services/fetchApi';
import formatDate from '../services/formatDate';
import { IRepo } from '../views/Browse';

interface RepoProps {
  repo: IRepo
}

const Repo: React.FC<RepoProps> = ({ repo }) => {
  const [isFav, setIsFav] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (repo.isFav) setIsFav(true);
  }, [repo.isFav]);

  const toggle = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await toggleRepo(repo.id, isFav);
      if (response?.status === 200) setIsFav(!isFav);
    } catch (error) {
      throw error;
    }
    setIsLoading(false);
  };

  return (
    <div className="flex items-center py-6 pr-4 text-xs text-gray-800 border-t">
      <div className="flex flex-1">

        <DesktopComputerIcon className="w-4 h-4 mt-2 mr-2 text-gray-600" />

        <div className="flex-1 pr-4">
          <a href={repo.cloneUrl} target="_blank" className="text-lg text-blue-700">
            {repo.fullName}
          </a>

          <p className="text-base">{repo.description}</p>

          <p className="text-xs font-semibold">
            Language: {repo.language || 'Unknown'}
          </p>

          <p className="py-1 text-xs">Clone URL: {repo.cloneUrl}</p>

          <p className="text-sm text-gray-500">
            Updated {formatDate(repo.updatedAt)}
          </p>

        </div>
      </div>

      <button
        onClick={() => toggle()}
        className="cursor-pointer focus:outline-none"
        disabled={isLoading}
      >
        {isFav ? (
          <StarIconSolid className="text-yellow-400 w-7 h-7" />
        ) : (
          <StarIcon className="w-6 h-6 text-gray-600" />
        )}
      </button>
      
    </div>
  );
};

export default Repo;
