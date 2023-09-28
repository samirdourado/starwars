'use client'
import { usePlanetContext } from '@/contexts/planetContext';
import Image from 'next/image';
import '../scss/main.scss'
export default function Home() {

  const { planet } = usePlanetContext();
  console.log(planet)
  
  return (
    <main>
      <p>Testando fonte</p>
      
      
    </main>
  )
}
