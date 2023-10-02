import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { AiOutlineSearch } from 'react-icons/ai'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { IoOptionsOutline } from 'react-icons/io5'
import { usePlanetContext } from '@/contexts/planetContext';
import { useForm } from 'react-hook-form';

const Form = () => {

    const { allPlanets, planet, getEspecificPlanet } = usePlanetContext();    
    
    const { register, handleSubmit, formState: { errors }, reset } = useForm({

    });

    const onFormSubmit = (formData: any) => {        
        getEspecificPlanet(formData.value);
        
    };

    return (
        <section className={styles.container}>
            <p className={styles.container__title}>Discover all the information about Planets of the Star Wars Saga</p>
            
            <form onSubmit={handleSubmit(onFormSubmit)} className={styles.formArea}>

                <input id={'value'} type={'text'} placeholder='Enter the name in the planet' {...register('value')}/>
                
                <button type='submit'><AiOutlineSearch size={24}/> Search</button>

                <div className={styles.formArea__footer}>
                    <p><IoOptionsOutline size={20}/>Filter</p>                    
                    
                    <select>
                        <option id={'name'}>▼  Name</option>
                        {
                            allPlanets ? (
                                allPlanets.map((data: any, i: any) => (
                                    <option key={i} value={data.i} 
                                    // {...register('name')}
                                    >
                                        {data.name}
                                    </option>
                                ))
                            ) : (<option>Carregando...</option>)
                        }
                    </select>
                    {/* <p><MdKeyboardArrowDown size={20}/> Population</p> */}
                    <select>
                        <option id={'population'}>▼  Population</option>
                        {
                            allPlanets ? (
                                allPlanets.map((data: any, i: any) => (
                                    <option key={i} value={data.i} 
                                    // {...register('population')}
                                    >
                                        {data.population}
                                    </option>   
                                ))
                            ) : (<option>Carregando...</option>)
                        }
                    </select>
                </div>
            </form>

        </section>
    )
};

export default Form;
