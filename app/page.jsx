import Image from 'next/image';
import styles from './page.module.css';
import Hero from 'public/hero.png';
import Button from '@/components/Button/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Quality design for your digital products
        </h1>
        <p className={styles.desc}>
          Turning your idea into Reality. Unleashing Digital Brilliance with
          Bafo-Codes
        </p>
        <Button url="/portfolio" text="See Our Works"></Button>
      </div>
    </div>
  );
}
