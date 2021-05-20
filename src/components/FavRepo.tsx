import { Link } from 'react-router-dom';

import {
  DesktopComputerIcon,
  EyeIcon,
  TrashIcon,
} from '@heroicons/react/outline';

import formatDate from '../services/formatDate';
import { FavRepoInterface } from '../views/Favorites';

interface Props {
  fav: FavRepoInterface;
  isLoading: boolean;
  deleteRepo: (repoId: FavRepoInterface['repoId']) => void;
}

const FavRepo: React.FC<Props> = ({ fav, isLoading, deleteRepo }) => {
  return (
    <div className="flex items-center py-6 pr-4 text-xs text-gray-800 border-t cursor-pointer">
      <div className="flex flex-1">
        
        <DesktopComputerIcon className="w-4 h-4 mt-2 mr-2 text-gray-600" />

        <div className="flex-1 pr-4">
          <Link to="/" className="text-lg text-blue-700">
            {fav.name}
          </Link>

          <p className="text-base">{fav.description}</p>

          <p className="text-xs font-semibold">
            Language: {fav.language || 'Unknown'}
          </p>

          <p className="py-1 text-xs">Clone URL: {fav.cloneUrl}</p>

          <p className="text-sm text-gray-500">
            Updated {formatDate(fav.createdAt)}
          </p>

        </div>
      </div>
      <div className="flex flex-col px-3">

        <Link
          to={`/detail/${fav.repoId}`}
          className="py-3 cursor-pointer focus:outline-none"
        >
          <EyeIcon className="w-6 h-6 text-gray-600" />
        </Link>

        <button
          className="py-3 cursor-pointer focus:outline-none"
          disabled={isLoading}
          onClick={() => deleteRepo(fav.repoId)}
        >
          <TrashIcon className="w-6 h-6 text-gray-600" />
        </button>

      </div>
    </div>
  );
};

export default FavRepo;
