'use client'
import { usePlanetContext } from '@/contexts/planetContext';
import Image from 'next/image';

export default function Home() {

  const { planet } = usePlanetContext();
  console.log(planet)
  
  return (
    <main>
      
      
    </main>
  )
}
