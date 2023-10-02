'use client'
import Image from 'next/image';
import '../scss/main.scss';
import styles from './styles.module.scss'
import Footer from '@/components/footer';
import Main from '@/components/containerMain';

export default function Home() {
  
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
