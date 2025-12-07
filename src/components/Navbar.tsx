import { NavbarDesktop } from './NavbarDesktop';
import { NavbarMobile } from './NavbarMobile';

export const NAV_ITEMS_LEFT = [
  { name: 'Videography', path: '/videography' },
  { name: 'Photography', path: '/photography' },
  { name: 'Feat/Colab', path: '/colab' },
  { name: 'Designs', path: '/designs' },
];

export const NAV_ITEMS_RIGHT = [
  { name: 'Who I am', path: '/about' },
  { name: 'CV', path: '/curriculum-vitae' },
  {
    name: 'My Gear',
    path: 'https://kit.co/pablopocostales/my-filming-equipment',
  },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  return (
    <>
      <NavbarDesktop navItemsLeft={NAV_ITEMS_LEFT} navItemsRight={NAV_ITEMS_RIGHT} />
      <NavbarMobile navItemsLeft={NAV_ITEMS_LEFT} navItemsRight={NAV_ITEMS_RIGHT} />
    </>
  );
};
