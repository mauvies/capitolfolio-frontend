import { Link, useLocation } from 'react-router-dom';
import { HeartIcon, SearchIcon } from '@heroicons/react/outline';

const NavBar = () => {
  const currentLocation = useLocation();

  const isCurrentLocationHome = (): boolean => {
    return currentLocation.pathname === '/';
  };

  return (
    <nav className="w-screen">
      <div className="flex items-center justify-between max-w-5xl px-6 py-3 mx-auto lg:px-8">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D0BAQEEERhn4ePNxw/company-logo_200_200/0/1602756568651?e=2159024400&v=beta&t=STDJp_VWu-jDQ_IRXNvc2m5NQTLGPbbKWrWjxUax9xQ"
          alt="Userzoom Logo"
          width="40px"
        />
        <Link
          className="text-base font-medium text-gray-500 hover:text-gray-900"
          to={isCurrentLocationHome() ? '/favorites' : '/'}
        >

          {/* mobile */}
          {isCurrentLocationHome() ? (
            <HeartIcon className="w-8 h-8 text-gray-500 md:hidden" />
          ) : (
            <SearchIcon className="w-8 h-8 text-gray-500 md:hidden" />
          )}

          {/* desktop */}
          <p className="hidden md:block md:mx-4">
            {isCurrentLocationHome() ? 'Favorites' : 'Home'}
          </p>

        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
