import React from 'react'
import HeaderSection from '../components/HeaderSection'
import OverViewCard from '../components/OverViewCard'
import GraphsContainer from '../components/GraphsContainer'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
        <HeaderSection/>
        <Navbar/>
        <OverViewCard/>
        <GraphsContainer/>
    </div>
  )
}
