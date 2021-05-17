import { Link } from 'react-router-dom';
import moment from 'moment';

import { DesktopComputerIcon, StarIcon } from '@heroicons/react/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/solid';

const Repo = (props: any) => {
  const { repo } = props;
  const formatDate = (date: string) => {
    return moment(date, 'YYYY-MM-DD').fromNow();
  };

  return (
    <div className="flex  items-center py-6 border-t pr-4 text-xs text-gray-800">
      <div className="flex flex-1">
        <DesktopComputerIcon className="h-4 w-4 text-gray-600 mr-2 mt-2" />
        <div className="flex-1 pr-4">
          <Link to="/" className="text-blue-700 text-lg">
            {repo.fullName}
          </Link>
          <p className="text-base">{repo.description}</p>
          <p className="text-xs font-semibold">
            Language: {repo.language || 'Unknown'}
          </p>
          <p className="text-xs py-1">Clone URL: {repo.cloneUrl}</p>
          <p className="text-sm text-gray-500">{formatDate(repo.updatedAt)}</p>
        </div>
      </div>
      {repo.isFav ? (
        <StarIconSolid className="w-7 h-7 text-yellow-600" />
      ) : (
        <StarIcon className="w-6 h-6 text-gray-600" />
      )}
    </div>
  );
};

export default Repo;
