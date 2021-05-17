import { Link } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/outline';

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
