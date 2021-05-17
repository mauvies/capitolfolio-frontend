import React from 'react';

import { Owner } from '../views/Browse';
import Repo from './Repo';

const RepoIndex = (props: Owner) => {
  return (
    <React.Fragment>
      <div className="flex flex-col">
        {props.repos.length !== 0 &&
          props.repos.map((repo: any) => {
            return <Repo key={repo.id} repo={repo} />;
          })}
      </div>
    </React.Fragment>
  );
};

export default RepoIndex;
