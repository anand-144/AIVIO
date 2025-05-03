import React from 'react'
import {Description, GenerateButton, Header, Review, Steps} from '../components'

const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <Description />
      <Review />
      <GenerateButton /> 
    </div>
  )
}

export default Home