'use client'
import { usePlanetContext } from '@/contexts/planetContext';
import Image from 'next/image';
import '../scss/main.scss';
import styles from './styles.module.scss'
import Footer from '@/components/footer';
import Main from '@/components/containerMain';

export default function Home() {

  const { planet } = usePlanetContext();
  console.log(planet)
  
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
      <Main/>
    </section>
  )
};
