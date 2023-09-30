import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';

const Form = () => {
    return (
        <section className={styles.container}>
            <p className={styles.container__title}>Discover all the information about Planets of the Star Wars Saga</p>
            <form className={styles.formArea}>
                
                <input placeholder='Enter the name in the planet'></input>
                <button>Search</button>

                <div className={styles.formArea__footer}>
                    <p>Filter</p>
                    <p>▼ Name</p>
                    <p>▼ Population</p>
                </div>
            </form>
        </section>
    )
};

export default Form;
