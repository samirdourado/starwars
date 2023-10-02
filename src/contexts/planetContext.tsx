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
    resident: [];
    setResident: React.Dispatch<React.SetStateAction<[]>>;
    films: any;
    setFilms: React.Dispatch<React.SetStateAction<[]>>;
    searchText: string;
    setSearchText: React.Dispatch<React.SetStateAction<string>>;
    searchResult: null;
    setSearchResult: React.Dispatch<React.SetStateAction<null>>;
    onLoad: boolean;
    setOnLoad: React.Dispatch<React.SetStateAction<boolean>>;
    getAllPlanets: () => Promise<any>;
    getEspecificPlanet: (name: string) => Promise<any>;
    getResidentsFromPlanets: (allResidents: [string]) => void;
    getFilms: (allFilms: [string]) => Promise<any[]>;
};

const planetContext = createContext<planetProviderData>({} as planetProviderData);

export const PlanetProvider = ({ children }: Props) => {
    const [allPlanets, setAllPlanets] = useState([]);
    const [planet, setPlanet] = useState<iPlanetData | null>(null);
    const [resident, setResident] = useState<[] | any>([]);
    const [films, setFilms] = useState<[] | any>([]);
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
            let namePlanet = planetName;
            namePlanet = namePlanet.charAt(0).toUpperCase() + namePlanet.slice(1);

            const planetPositionArr = allPlanets.findIndex((elem: any, i: any) => elem.name == namePlanet);
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

    const getResidentsFromPlanets = async (allResidents: [string]) => {
        try {
            const residentsNames = [];

            for (const resident of allResidents) {
                const response = await axios.get(resident);
                residentsNames.push(response.data.name);
            };

            setResident(residentsNames);
            return residentsNames;
        } catch (error) {            
            return['No residents']
        }
    };

    const getFilms = async (allFilms: [string]) => {
        try {
            const filmsNames = [];

            for (const films of allFilms) {                
                const response = await axios.get(films);
                filmsNames.push(response.data.title);
            };

            setFilms(filmsNames);
            return filmsNames;            
        } catch (error) {            
            return['No films']
        }
    };


    return (
        <planetContext.Provider
            value={{
                planet, setPlanet,
                allPlanets, setAllPlanets,
                resident, setResident,
                films, setFilms,
                searchText, setSearchText,
                searchResult, setSearchResult,
                onLoad, setOnLoad,
                getAllPlanets,
                getEspecificPlanet,
                getResidentsFromPlanets,
                getFilms,
            }}
        >
            { children }
        </planetContext.Provider>
    )
};

export const usePlanetContext = () => {
    return useContext(planetContext);
};
