import React from 'react';
import { IRepo } from '../views/Browse';
import Repo from './Repo';

interface RepoIndexProps {
  repos: IRepo[]
}

const RepoIndex: React.FC<RepoIndexProps> = ({ repos }) => {
  return (
    <div className="flex flex-col">

      {repos.length !== 0 &&
        repos.map((repo: IRepo) => <Repo key={repo.id} repo={repo} />)}

    </div>
  );
};

export default RepoIndex;
