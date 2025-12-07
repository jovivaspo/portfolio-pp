import { Link, useLocation } from 'react-router-dom';
import { LogoAnimated } from './LogoAnimated';

interface NavItem {
  name: string;
  path: string;
}

interface NavbarDesktopProps {
  navItemsLeft: NavItem[];
  navItemsRight: NavItem[];
}

export const NavbarDesktop = ({ navItemsLeft, navItemsRight }: NavbarDesktopProps) => {
  const location = useLocation();

  return (
    <nav className='relative w-full h-[80px] bg-white hidden md:flex items-center justify-between px-8'>
      {/* Left Navigation Items */}
      <ul className='flex items-center gap-6'>
        {navItemsLeft.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <li key={index}>
              <Link className={`text-sm transition-colors duration-500 ease-in-out ${isActive ? 'text-my-gray' : 'text-black hover:text-my-gray'}`} to={item.path}>
                {item.name.toLocaleUpperCase()}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Center Logo - Absolutely Centered */}
      <div className='absolute left-1/2 transform -translate-x-1/2'>
        <LogoAnimated />
      </div>

      {/* Right Navigation Items */}
      <ul className='flex items-center gap-6'>
        {navItemsRight.map((item, index) => {
          const isActive = location.pathname === item.path;
          if (item.name === 'My Gear') {
            return (
              <li key={index}>
                <a className='text-black text-sm hover:text-my-gray transition-colors duration-500 ease-in-out' href={item.path} target='_blank' rel='noopener noreferrer'>
                  {item.name.toLocaleUpperCase()}
                </a>
              </li>
            );
          }
          return (
            <li key={index}>
              <Link className={`text-sm transition-colors duration-500 ease-in-out ${isActive ? 'text-my-gray' : 'text-black hover:text-my-gray'}`} to={item.path}>
                {item.name.toLocaleUpperCase()}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
