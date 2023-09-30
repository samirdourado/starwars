import Image from 'next/image';
import React from 'react';
import styles from './styles.module.scss';
import Main from '@/components/main';

const ContainerMain = () => {

    return (
        <section className={styles.container}>
        <Image
          src='/images/logo-w.png'
          alt='wallpaper'
          width={320}
          height={180}
          priority          
        />
        <Main/>

      </section>
    )
};

export default ContainerMain;
