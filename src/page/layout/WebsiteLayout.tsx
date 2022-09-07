import React from 'react'
import { Outlet } from 'react-router-dom'
import Banner from '../../components/home/banner'
import Category from '../../components/home/danhmuc'
import Footer from '../../components/home/Footer'
import Header from '../../components/home/header'
import HomeFeedback from '../../components/home/HomeFeedback'
import HomeNews from '../../components/home/HomeNews'
import HomeProducts from '../../components/home/HomeProducts'
import HomeWhy from '../../components/home/homewhy'
type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
        <Header/>
       
    <Outlet/>
        <Footer/>
    </div>
  )
}

export default WebsiteLayout