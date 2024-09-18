import React from 'react'
import HomeBanner from '../Component/Home/HomeBanner'
import AboutUs from '../Component/AboutUs/AboutUs'
import AmplifyBrands from '../Component/AmplifyBrands/AmplifyBrands'
import OurMissions from '../Component/OurMissions/OurMissions'

function Home() {
  return (
    <div>
        <HomeBanner/>
        <AboutUs/>
        <AmplifyBrands/>
        <OurMissions/>
    </div>
  )
}

export default Home