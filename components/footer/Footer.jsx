import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>2023 BAFO. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          className={styles.icon}
          alt="bafo FB"
          width={20}
          height={20}
        />
        <a href="https://www.instagram.com/shalom_nyakamela_/">
          <Image
            src="/2.png"
            className={styles.icon}
            alt="bafo Inst"
            width={20}
            height={20}
          />
        </a>
        <Image
          src="/3.png"
          className={styles.icon}
          alt="bafo Twt"
          width={20}
          height={20}
        />
        <Image
          src="/4.png"
          className={styles.icon}
          alt="bafo YT"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default Footer;
