import Image from 'next/image';
import React from 'react';
import styles from './styles.module.scss';
import Main from '@/components/main';
import CardPlanet from '@/components/card';
import { usePlanetContext } from '@/contexts/planetContext';


const ContainerMain = () => {
  const { planet } = usePlanetContext();

    return (
        <section className={styles.container}>
          <Image
            src='/images/logo-w.png'
            alt='wallpaper'
            width={320}
            height={180}
            priority          
          />

          { planet === null ? (<Main/>) : (<CardPlanet/>) }
      </section>
    )
};

export default ContainerMain;
