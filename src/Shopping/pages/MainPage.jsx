

import React, {useState} from 'react'
import Header from '../Componets/Header'
import Banner from '../Componets/Banner'
import Collections from '../Componets/Collections'
import Footer from '../Componets/Footer'

import {Gents, Ladies} from '../data'
import WomanCollection from '../Componets/WomanCollection'

const MainPage = () => {

  const [gentsFashion] = useState(Gents)
  const [ladiesFashion] = useState(Ladies)

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

export default MainPage;