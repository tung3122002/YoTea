import React from 'react'
import Banner from './banner'
import Category from './danhmuc'
import Footer from './Footer'
import Header from './header'
import HomeFeedback from './HomeFeedback'
import HomeNews from './HomeNews'
import HomeProducts from './HomeProducts'
import HomeWhy from './homewhy'
type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
       
        <Banner/>
        <Category/>
       
        <HomeWhy/>
        <HomeProducts/>
        <HomeNews/>
        <HomeFeedback/>
        
    </div>
  )
}

export default HomePage