import React from 'react'
import HeaderSection from '../components/HeaderSection'
import OverViewCard from '../components/OverViewCard'
import GraphsContainer from '../components/GraphsContainer'

export default function Home() {
  return (
    <div>
        <HeaderSection/>
        <OverViewCard/>
        <GraphsContainer/>
    </div>
  )
}
