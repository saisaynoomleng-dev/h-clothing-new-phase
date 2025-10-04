'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { CiHeart, CiShoppingCart, CiUser } from 'react-icons/ci';
import Form from 'next/form';
import { Input } from './ui/input';

const NAV_LINKS = [
  { name: 'home', url: '/' },
  { name: 'shop', url: '/shop' },
  { name: 'women', url: '/shop?tag=women' },
  { name: 'men', url: '/shop?tag=men' },
  { name: 'accessories', url: '/shop?tag=accessories' },
  { name: 'about us', url: '/about-us' },
  { name: 'contact us', url: '/contact-us' },
  { name: 'blog', url: '/blog' },
];

const INFO_LINKS = [
  { name: 'wishlist', url: '/wishlist', icon: <CiHeart /> },
  { name: 'cart', url: '/cart', icon: <CiShoppingCart /> },
  { name: 'account', url: '/account', icon: <CiUser /> },
];

const Header = () => {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  const handleNavBtn = () => {
    setNavOpen((prevOpen) => !prevOpen);
  };

  const handleSearchBtn = () => {
    setSearchOpen((prevOpen) => !prevOpen);
  };

  return (
    <header className="flex justify-between p-3 md:p-5 lg:max-w-[1200px] items-center">
      <Link href="/">
        <Image
          src="/logo.png"
          width={50}
          height={50}
          alt=""
          priority
          className="w-[50px]"
        />
      </Link>

      {/* search form */}
      <Form action="/search">
        <label htmlFor="search" className="sr-only">
          Search Anything
        </label>
        <Input
          name="query"
          placeholder="Search..."
          id="search"
          className="w-[70%] focus:w-full transition-all duration-150 ease-in-out"
        />
      </Form>

      <Button
        className="hidden max-md:block cursor-pointer max-md:relative max-md:z-50 bg-brand-red"
        aria-label={navOpen ? 'close nav menu' : 'open nav menu'}
        aria-controls="#main-nav"
        onClick={handleNavBtn}
      >
        {navOpen ? <IoIosClose /> : <RxHamburgerMenu />}
      </Button>

      <nav
        className={clsx(
          'max-md:fixed max-md:bg-brand-blue/50 max-md:backdrop-blur-xl max-md:inset-0 max-md:left-[30vw] max-md:p-5 max-md:z-20 transition-transform duration-150 ease-in-out flex gap-x-3 max-md:flex-col flex-row items-center max-md:items-start max-md:gap-y-5',
          navOpen ? 'max-md:translate-x-0' : 'max-md:translate-x-full',
        )}
        role="navigation"
        id="main-nav"
        aria-expanded={navOpen}
      >
        <ul className="flex flex-col md:flex-row gap-x-3">
          {NAV_LINKS.map((link) => (
            <li key={link.url}>
              <Link
                href={link.url}
                className={clsx(
                  'block capitalize',
                  pathname === link.url &&
                    'font-semibold underline underline-offset-2',
                )}
                onClick={() =>
                  setNavOpen((prevOpen) => (prevOpen ? !prevOpen : prevOpen))
                }
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex gap-x-3">
          {INFO_LINKS.map((link) => (
            <li key={link.url}>
              <Link href={link.url} className="text-fs-500">
                {link.icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
