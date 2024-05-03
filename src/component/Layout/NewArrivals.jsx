import React from 'react'
import Container from './Container'
import Products from './Products'

function NewArrivals() {
  return (
    <section className=' mt-[128px]'>
        <Container>
            <div>
                <h1 className=' text-color-1 font-bold text-[40px]'>New Arrivals</h1>
            </div>
            <div>

            <Products/>
            </div>
        </Container>
    </section>
  )
}

export default NewArrivals