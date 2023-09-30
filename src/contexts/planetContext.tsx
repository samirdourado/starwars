'use client'
import apiPlanets from '@/service/api';
import axios from 'axios';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

interface Props {
    children: ReactNode;
};

interface planetProviderData {
    allPlanets: any[];
    setAllPlanets: React.Dispatch<React.SetStateAction<never[]>>;
    planet: any[];
    setPlanet: React.Dispatch<React.SetStateAction<never[]>>;
    searchText: string;
    setSearchText: React.Dispatch<React.SetStateAction<string>>;
    searchResult: null;
    setSearchResult: React.Dispatch<React.SetStateAction<null>>
    getAllPlanets: () => Promise<any>;
    getEspecificPlanet: (name: string) => Promise<any>;
};

const planetContext = createContext<planetProviderData>({} as planetProviderData);

export const PlanetProvider = ({ children }: Props) => {
    const [allPlanets, setAllPlanets] = useState([]);
    const [planet, setPlanet] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    useEffect(() => {
        getAllPlanets()
    }, []);

    const getAllPlanets = async () => {    
        const response = await apiPlanets.get(`/planets`)        
        setAllPlanets(response.data.results)
        return response.data
    };

    const getEspecificPlanet = async (idPlanet: string) => {
        console.log(idPlanet)
        
        try {
            const response = await apiPlanets.get(`/planets/${idPlanet}`)
            setPlanet(response.data)
            return response.data
        } catch (error) {
            
        }
    };


    return (
        <planetContext.Provider
            value={{
                planet, setPlanet,
                allPlanets, setAllPlanets,
                searchText, setSearchText,
                searchResult, setSearchResult,
                getAllPlanets,
                getEspecificPlanet,
            }}
        >
            { children }
        </planetContext.Provider>
    )
};

export const usePlanetContext = () => {
    return useContext(planetContext);
};
