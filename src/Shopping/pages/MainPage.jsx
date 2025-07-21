
import React, { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Collections from './components/Collections';
import { Gents, Ladies } from '../data';
import Footer from '../Components/Footer';
import WomanCollection from '../Components/WomanCollection';


const MainPage = () => {

  const [gentsFashion, setGentsFashion] = useState(Gents)
  const [ladiesFashion, setLadiesFashion] = useState(Ladies)

  console.log(Gents)

  return (
    <div>
        <Header />
        <Banner />
        <Collections gentsFashion= {gentsFashion}/>
        <WomanCollection ladiesFashion = {ladiesFashion} />
        <Footer />
    </div>
  )
}

export default MainPage