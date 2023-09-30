import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Form from '@/components/form';

const Main = () => {
    return (
        <main className={styles.container}>
            <Image
                src='/images/plain.png'
                alt='wallpaper'
                width={400}
                height={400}
                priority
                className={styles.plain}
            />

            <Form/>

            <Image
                src='/images/spaceship.png'
                alt='wallpaper'
                width={462}
                height={328}
                priority
                className={styles.spaceship}
            />

        </main>
    )
};

export default Main;
