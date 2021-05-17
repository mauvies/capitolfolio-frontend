import { Link } from 'react-router-dom';
import { SearchIcon, HeartIcon } from '@heroicons/react/outline';

const NavBar = () => {
  return (
    <nav className="w-screen">
      <div className="flex items-center max-w-7xl mx-auto py-3 px-4 lg:px-8 justify-between">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D0BAQEEERhn4ePNxw/company-logo_200_200/0/1602756568651?e=2159024400&v=beta&t=STDJp_VWu-jDQ_IRXNvc2m5NQTLGPbbKWrWjxUax9xQ"
          alt="Userzoom Logo"
          width="40px"
        />
        <h1 className="hidden md:block">RepoZoom</h1>
        <div className="flex items-center justify-between bg-gray-100 rounded-2xl w-16 h-10 flex-1 px-3 mx-6">
          <SearchIcon className="text-gray-400 h-6 w-6 " />
          <input
            type="text"
            className="w-5/6 bg-gray-100 outline-none"
            placeholder="Search Github"
          />
        </div>
        <Link
          className="text-base font-medium text-gray-500 hover:text-gray-900"
          to="/favorites"
        >
          <HeartIcon className="text-gray-500 h-8 w-8 md:hidden" />
          <p className="hidden md:block">Favorites</p>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
