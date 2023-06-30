'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './navbar.module.css';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Portfolio',
    url: '/portfolio',
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <Image
          src="https://i.ibb.co/PhRNkTG/CODE-1-removebg-preview.png"
          alt="logo"
          width={80}
          height={40}
        />
      </Link>

      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
