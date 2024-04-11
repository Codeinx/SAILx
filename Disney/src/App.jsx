import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/navbar'
import './App.css'
import Carousel from './components/carousel'
import FirstGrid from './components/firstGrid'
import SecondGrid from './components/second_grid'
import ThirdGrid from './components/third_grid'
import FourthGrid from './components/fourth_grid'
import FifthGrid from './components/fifth_grid'
import SixthGrid from './components/sixth_grid'
import SeventhGrid from './components/seventh_grid'
import EigthGrid from './components/eigth_grid'
import NinthGrid from './components/ninth_grid'
import Title from './components/title'

function App() {

  return (
    <>
      <NavBar/>
      <div id="body">
        <Carousel/>
        <FirstGrid/>
        <Title title={"news"}/>
        <SecondGrid/>
        <ThirdGrid/>
        <Title title={"Goods featuring popular characters are available!"}/>
        <FourthGrid/>
        <Title title={"Character introduction"} style={{backgroundColor: "white"}}/>
        <FifthGrid style={{backgroundColor: "white"}}/>
        <SixthGrid style={{backgroundColor: "white"}}/>
        <Title title={"Special"} style={{backgroundColor: "white"}}/>
        <SeventhGrid style={{backgroundColor: "white"}}/>
        <Title title={"character products"} style={{backgroundColor: "white"}}/>
        <EigthGrid style={{backgroundColor: "white"}}/>
        <NinthGrid style={{backgroundColor: "white"}}/>
      </div>
    </>
  )
}

export default App
