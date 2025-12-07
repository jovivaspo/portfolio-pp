import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { LogoAnimated } from './LogoAnimated';

interface NavItem {
  name: string;
  path: string;
}

interface NavbarMobileProps {
  navItemsLeft: NavItem[];
  navItemsRight: NavItem[];
}

export const NavbarMobile = ({ navItemsLeft, navItemsRight }: NavbarMobileProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMenu = () => {
    menuRef.current?.classList.toggle('translate-x-0');
  };

  return (
    <nav className='w-full h-[80px] bg-white flex md:hidden items-center justify-between px-5'>
      {/* Logo */}
      <div className='flex-shrink-0'>
        <LogoAnimated />
      </div>

      {/* Hamburger Button */}
      <button onClick={handleMenu} aria-label='Open menu'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-menu-2'
          width='32'
          height='32'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='#000000'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M4 6l16 0' />
          <path d='M4 12l16 0' />
          <path d='M4 18l16 0' />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div ref={menuRef} className='fixed top-0 right-0 w-screen h-screen bg-white -translate-x-full transition-transform duration-300 ease-in-out z-50 flex flex-col p-8'>
        {/* Close Button */}
        <button onClick={handleMenu} className='self-end mb-8' aria-label='Close menu'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='icon icon-tabler icon-tabler-x'
            width='32'
            height='32'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='#000000'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M18 6l-12 12' />
            <path d='M6 6l12 12' />
          </svg>
        </button>

        {/* Menu Items */}
        <div className='flex flex-col gap-8'>
          {/* First Section */}
          <ul className='flex flex-col gap-4'>
            {navItemsLeft.map((item, index) => (
              <li key={index}>
                <Link className='text-black text-lg hover:text-my-gray transition-colors duration-500 ease-in-out' to={item.path} onClick={handleMenu}>
                  {item.name.toLocaleUpperCase()}
                </Link>
              </li>
            ))}
          </ul>

          {/* Separator */}
          <div className='h-4' />

          {/* Second Section */}
          <ul className='flex flex-col gap-4'>
            {navItemsRight.map((item, index) => {
              if (item.name === 'My Gear') {
                return (
                  <li key={index}>
                    <a className='text-black text-lg hover:text-my-gray transition-colors duration-500 ease-in-out' href={item.path} target='_blank' rel='noopener noreferrer' onClick={handleMenu}>
                      {item.name.toLocaleUpperCase()}
                    </a>
                  </li>
                );
              }
              return (
                <li key={index}>
                  <Link className='text-black text-lg hover:text-my-gray transition-colors duration-500 ease-in-out' to={item.path} onClick={handleMenu}>
                    {item.name.toLocaleUpperCase()}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
