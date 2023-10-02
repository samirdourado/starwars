import React, { useEffect } from 'react';
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
    const { planet, setPlanet, resident, setResident, films, setFilms, getResidentsFromPlanets, getFilms } = usePlanetContext();    
    
    useEffect(() => {
        getResidentsFromPlanets(planet.planetInfo.residents)
        getFilms(planet.planetInfo.films)        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={styles.box}>
            {
                planet ? (
                    <main className={styles.container}>
                        <section className={styles.container__header}>
                            <div className={styles.container__header__leftPanel}>
                                <Image
                                    src={planet.planetImage ? (planet.planetImage) : ('/images/no-image-found.png')}
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
                            <p>{resident.length ? (resident.join(', ')) : (<>Loading residents...</>)}</p>
                        </section>
        
                        <section className={styles.container__body}>
                            <h2><LuClapperboard size={30}/>Films ({planet.planetInfo.films.length}):</h2>
                            <p>{films.length ? (films.join(', ')) : (<>Loading films...</>)}</p>
                        </section>           
                    </main>
                ) : (<p>Carregando...</p>)
            }
            <Link 
                href={'#'} 
                onClick={() => {(
                    setPlanet(null), 
                    setResident([]), 
                    setFilms([])
                )}} 
                className={styles.backButton}
            >
                Voltar
            </Link>
        </div>
    )
};

export default CardPlanet;
