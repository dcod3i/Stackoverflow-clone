import React from 'react'

import '../../App.css'
import LeftSidebar from '../../components/LeftSideBar/LeftSideBar'
import RightSidebar from '../../components/RightSideBar/RightSideBar'
import HomeMainbar from '../../components/HomeMainBar/HomeMainBar'

const Home = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2'>
        <HomeMainbar />
        <RightSidebar />
      </div>
    </div>
  )
}

export default Home
