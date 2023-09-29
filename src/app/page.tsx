'use client'
import { usePlanetContext } from '@/contexts/planetContext';
import Image from 'next/image';
import '../scss/main.scss';
import styles from './styles.module.scss'
import Footer from '@/components/footer';


export default function Home() {

  const { planet } = usePlanetContext();
  
  return (
    <section>
      <Image
        src='/images/wall.jpg'
        alt='wallpaper'
        width={1920}
        height={1080}
        priority
        className={styles.wall}
      />
      <Footer/>
      <section className={styles.content}>
        <Image
          src='/images/logo-w.png'
          alt='wallpaper'
          width={320}
          height={180}
          priority          
        />
      </section>
    </section>
  )
};
