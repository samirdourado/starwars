'use client'
import apiPlanets from '@/service/api';
import axios from 'axios';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import planetImages from '@/database';
import iPlanetData from '@/interfaces/planet.interface';
import { toast } from 'react-toastify';

interface Props {
    children: ReactNode;
};

interface planetProviderData {
    allPlanets: any[];
    setAllPlanets: React.Dispatch<React.SetStateAction<never[]>>;
    planet: iPlanetData | null;
    setPlanet: React.Dispatch<React.SetStateAction<iPlanetData | null>>;
    searchText: string;
    setSearchText: React.Dispatch<React.SetStateAction<string>>;
    searchResult: null;
    setSearchResult: React.Dispatch<React.SetStateAction<null>>;
    onLoad: boolean;
    setOnLoad: React.Dispatch<React.SetStateAction<boolean>>;
    getAllPlanets: () => Promise<any>;
    getEspecificPlanet: (name: string) => Promise<any>;
};

const planetContext = createContext<planetProviderData>({} as planetProviderData);

export const PlanetProvider = ({ children }: Props) => {
    const [allPlanets, setAllPlanets] = useState([]);
    const [planet, setPlanet] = useState<iPlanetData | null>(null);
    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [onLoad, setOnLoad] = useState(false);

    useEffect(() => {
        getAllPlanets()
    }, []);

    const getAllPlanets = async () => {
        try {
            const response = await apiPlanets.get(`/planets`);

            setOnLoad(true);
            setAllPlanets(response.data.results);

            return response.data;            
        } catch (error) {
            console.log(error);
        } finally {
            setOnLoad(false);
        };
    };

    const getEspecificPlanet = async (planetName: string) => {
        
        try {            
            const planetPositionArr = allPlanets.findIndex((elem: any, i: any) => elem.name == planetName);
            const numberOfPlanet = planetPositionArr + 1;
            const response = await apiPlanets.get(`/planets/${numberOfPlanet}`);

            const planetData = {
                planetInfo: response.data,
                planetImage: planetImages[planetPositionArr]
            };

            toast.success('Carregando as informações');

            setOnLoad(true);
            setPlanet(planetData);

            return planetData;
        } catch (error) {            
            toast.error('Nenhum planeta encontrado!')
            console.log(error)
        } finally {
            setOnLoad(false);
        };
    };


    return (
        <planetContext.Provider
            value={{
                planet, setPlanet,
                allPlanets, setAllPlanets,
                searchText, setSearchText,
                searchResult, setSearchResult,
                onLoad, setOnLoad,
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
