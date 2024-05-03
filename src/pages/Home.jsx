import React from 'react'
import Banner from '../component/Layout/Banner'
import FreeDelivery from '../component/Layout/FreeDelivery'
import Offers from '../component/Layout/Offers'
import NewArrivals from '../component/Layout/NewArrivals'

function Home() {
  return (
    <> 
       <Banner/>
       <FreeDelivery/>
       <Offers/>
       <NewArrivals/>
    </>
  )
}

export default Home