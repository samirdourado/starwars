import Image from "next/image";
import React from "react";
import styles from './styles.module.scss'

const Footer = () => {
    return (
        <main className={styles.footer__container}>
            <p className={styles.footer__infos}>STARUARS LTDA | CNPJ: 77.777.777/0007-07 | 2023 | Todos os direitos reservados</p>
            {/* <div className={styles.footer__divider}></div> */}
            <hr className={styles.footer__divider}></hr>
            <Image
                src='/images/logo-b.png'
                alt='wallpaper'
                width={84}
                height={37}
                priority                
            />
        </main>
    )
};

export default Footer;
