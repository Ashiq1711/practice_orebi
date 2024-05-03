import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { MdLocalShipping } from "react-icons/md";
import { SlReload } from "react-icons/sl";
function FreeDelivery() {
  return (
<section className='border-y'>

    <Container >
        <Flex className='py-3  justify-between'>
         <div className=' flex gap-3 items-center'>
            <p>2</p>
            <h1>Two years warranty</h1>
         </div>
         <div className=' flex gap-3 items-center'>
         <MdLocalShipping />
            <h1>Two years warranty</h1>
         </div>
         <div className=' flex gap-3 items-center'>
         <SlReload />
            <h1>Two years warranty</h1>
         </div>
      
        
        </Flex>
    </Container>
</section>
  )
}

export default FreeDelivery