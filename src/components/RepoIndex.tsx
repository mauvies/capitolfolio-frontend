import { Owner } from '../views/Browse';
import Repo from './Repo';

const RepoIndex = (props: Owner) => {
  return (
    <div className="flex flex-col">
      {props.repos.length !== 0 &&
        props.repos.map((repo: any) => {
          return <Repo key={repo.id} repo={repo} />;
        })}
    </div>
  );
};

export default RepoIndex;
