import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a Gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/fullstack" className={styles.item}>
          <span className={styles.title}>Fullstack</span>
        </Link>
        <Link href="/portfolio/frontend" className={styles.item}>
          <span className={styles.title}>Frontend</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
