'use client'
import apiPlanets from '@/service/api';
import axios from 'axios';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

interface Props {
    children: ReactNode;
};

interface planetProviderData {
    planet: any[]
    setPlanet: React.Dispatch<React.SetStateAction<never[]>>
    getAllPlanets: () => Promise<any>
};

const planetContext = createContext<planetProviderData>({} as planetProviderData);

export const PlanetProvider = ({ children }: Props) => {
    const [planet, setPlanet] = useState([]);

    useEffect(() => {
        getAllPlanets()
    }, []);

    const getAllPlanets = async () => {    
        const response = await apiPlanets.get(`/planets`)        
        setPlanet(response.data)
        return response.data
    };


    return (
        <planetContext.Provider
            value={{
                getAllPlanets,
                planet, setPlanet,
            }}
        >
            { children }
        </planetContext.Provider>
    )
};

export const usePlanetContext = () => {
    return useContext(planetContext);
};



