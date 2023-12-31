import React from 'react'
import HeaderSection from '../components/HeaderSection'
import OverViewCard from '../components/OverViewCard'
import GraphsContainer from '../components/GraphsContainer'
import Navbar from '../components/Navbar'
import DatesContainer from '../components/DatesContainer'

export default function Home() {
  return (
    <div>
        <HeaderSection/>
        <Navbar/>
        <OverViewCard/>
        <DatesContainer/>
        <GraphsContainer/>
    </div>
  )
}
