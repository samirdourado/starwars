import React from 'react';
import styles from './styles.module.scss'
import Image from 'next/image';
import { usePlanetContext } from '@/contexts/planetContext';
import Link from 'next/link';
import { FaTemperatureHalf } from 'react-icons/fa6';
import { MdTerrain } from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';
import { BsPersonFill } from 'react-icons/bs';
import { LuClapperboard } from 'react-icons/lu';

const CardPlanet = () => {
    const { planet, setPlanet } = usePlanetContext();
    console.log(planet)    

    return (
        <div className={styles.box}>

            {
                planet ? (
                    <main className={styles.container}>
                        <section className={styles.container__header}>
                            <div className={styles.container__header__leftPanel}>
                                <Image
                                    src={planet.planetImage}
                                    alt='wallpaper'
                                    width={82}
                                    height={82}
                                    priority          
                                />
                                <div>
                                    <p>Planet:</p>
                                    <h2>{planet.planetInfo.name.toUpperCase()}</h2>
                                </div>
                            </div>
                            <div className={styles.container__header__rightPanel}>
                                <p><FaTemperatureHalf size={25}/>Climate: <span>{planet.planetInfo.climate}</span></p>
                                <p><MdTerrain size={25}/>Terrain: <span>{planet.planetInfo.terrain}</span></p>
                                <p><IoIosPeople size={25}/>Population: <span>{planet.planetInfo.population}</span></p>
                            </div>
                        </section>
        
                        <section className={styles.container__body}>
                            <h2><BsPersonFill size={30}/>Residents:</h2>
                            <p>{planet.planetInfo.residents}</p>
                        </section>
        
                        <section className={styles.container__body}>
                            <h2><LuClapperboard size={30}/>Films (5):</h2>
                            <p>{planet.planetInfo.films}</p>
                        </section>           
                    </main>
                    

                ) : (<p>Carregando...</p>)
            }
            


            <Link href={'#'} onClick={() => {setPlanet(null)}} className={styles.backButton}>Voltar</Link>
        </div>
    )
};

export default CardPlanet;



// import React from 'react';
// import styles from './styles.module.scss'
// import Image from 'next/image';
// import { usePlanetContext } from '@/contexts/planetContext';
// import Link from 'next/link';
// import { FaTemperatureHalf } from 'react-icons/fa6';
// import { MdTerrain } from 'react-icons/md';
// import { IoIosPeople } from 'react-icons/io';
// import { BsPersonFill } from 'react-icons/bs';
// import { LuClapperboard } from 'react-icons/lu';

// const CardPlanet = () => {
//     const { planet, setPlanet } = usePlanetContext();
//     console.log(planet)    

//     return (
//         <div className={styles.box}>

//             {
//                 planet.length ? (
//                     planet.map((obj, i) => (
//                         <main className={styles.container} key={i}>
//                         <section className={styles.container__header}>
//                             <div className={styles.container__header__leftPanel}>
//                                 <Image
//                                     src={obj.planetImage}
//                                     alt='wallpaper'
//                                     width={82}
//                                     height={82}
//                                     priority          
//                                 />
//                                 <div>
//                                     <p>Planet:</p>
//                                     <h2>TATOOINE</h2>
//                                 </div>
//                             </div>
//                             <div className={styles.container__header__rightPanel}>
//                                 <p><FaTemperatureHalf size={25}/>Climate: <span>Arid</span></p>
//                                 <p><MdTerrain size={25}/>Terrain: <span>Desert</span></p>
//                                 <p><IoIosPeople size={25}/>Population: <span>200000</span></p>
//                             </div>
//                         </section>
        
//                         <section className={styles.container__body}>
//                             <h2><BsPersonFill size={30}/>Residents:</h2>
//                             <p>People 01 , People 02 , People 04 , People 06 , People 07 , People 08 , People 09 , People 11, People 43, People 62 .</p>
//                         </section>
        
//                         <section className={styles.container__body}>
//                             <h2><LuClapperboard size={30}/>Films (5):</h2>
//                             <p>Films 1, Films 3, Films 4, Films 5, Films 6.</p>
//                         </section>           
//                     </main>
//                     ))

//                 ) : (<p>Carregando...</p>)
//             }
            


//             <Link href={'#'} onClick={() => {setPlanet(null)}} className={styles.backButton}>Voltar</Link>
//         </div>
//     )
// };

// export default CardPlanet;
