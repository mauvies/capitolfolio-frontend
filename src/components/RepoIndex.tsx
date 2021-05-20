import { IOwner } from '../views/Browse';
import IRepo from './Repo';

const RepoIndex = (props: IOwner) => {
  return (
    <div className="flex flex-col">

      {props.repos.length !== 0 &&
        props.repos.map((repo: any) => <IRepo key={repo.id} repo={repo} />)}

    </div>
  );
};

export default RepoIndex;
