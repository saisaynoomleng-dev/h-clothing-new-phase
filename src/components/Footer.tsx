import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import Title from './Title';

const SOCIAL_LINKS = [
  { name: 'facebook', url: 'https://www.facebook.com', icon: <FaFacebook /> },
  { name: 'youtube', url: 'https://www.youtube.com', icon: <FaYoutube /> },
  { name: 'x', url: 'https://www.x.com', icon: <FaX /> },
  {
    name: 'instagram',
    url: 'https://www.instagram.com',
    icon: <FaInstagram />,
  },
  { name: 'linkedin', url: 'https://www.linkedin.com', icon: <FaLinkedin /> },
];

const COMPANY_LINKS = [
  { name: 'About Us', url: '/about-us' },
  { name: 'Blog', url: '/blog' },
  { name: 'Contact Us', url: '/contact-us' },
  { name: 'Career', url: '/career' },
];

const CUSTOMER_SERVICES_LINKS = [
  { name: 'My Account', url: '/account' },
  { name: 'Track Your Order', url: '/track-your-order' },
  { name: 'Return', url: '/return' },
  { name: 'FAQ', url: '/faq' },
];

const INFORMATION_LINKS = [
  { name: 'Privacy', url: '/privacy' },
  { name: 'Terms & Condition', url: '/terms-and-conditions' },
  { name: 'Return Policy', url: '/return-policy' },
];

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-4 bg-brand-blue/40 p-3 md:p-5 gap-5 justify-center">
      <div className="flex flex-col gap-y-3">
        <Link href="/">
          <Image
            src="/logo.png"
            width={100}
            height={100}
            alt=""
            priority
            className="w-[50px]"
          />
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          odio ipsum officia, ea fugit accusamus!
        </p>
        <ul className="flex gap-x-2">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.name}>
              <Link href={link.url} className="">
                {link.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-y-2">
        <Title as="h3" className="font-semibold">
          Company
        </Title>
        <ul className="flex flex-col ">
          {COMPANY_LINKS.map((link) => (
            <li key={link.name}>
              <Link href={link.url} className="hover:underline">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-y-2">
        <Title as="h3" className="font-semibold">
          Customer Services
        </Title>
        <ul className="flex flex-col ">
          {CUSTOMER_SERVICES_LINKS.map((link) => (
            <li key={link.name}>
              <Link href={link.url} className="hover:underline">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-y-2">
        <Title as="h3" className="font-semibold">
          Our Information
        </Title>
        <ul className="flex flex-col ">
          {INFORMATION_LINKS.map((link) => (
            <li key={link.name}>
              <Link href={link.url} className="hover:underline">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="col-span-full place-self-end">
        <p className="text-fs-300">
          Copyright &copy; {new Date().getFullYear()} H Clothing. Developed by
          Sai Say Noom Leng.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
