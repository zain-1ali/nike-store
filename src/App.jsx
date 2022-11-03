import React from 'react'
import { Hero , Sales,FlexContent,Stories,Footer,Navbar,Cart} from './components/index'
import {heroapi , popularsales,toprateslaes,sneaker,highlight,story,footerAPI} from './data/data'

const App = () => {
  return (
    <>
    <Navbar/>
    <Cart/>
    <main className='flex flex-col gap-16 relative'>
      <Hero heroapi={heroapi}/> 
      <Sales endpoints={popularsales} ifExists/>
      <FlexContent endpoints={sneaker}/>
      <Sales endpoints={toprateslaes}/>
      <FlexContent endpoints={highlight} ifExists/>
      <Stories endpoints={story}/>
    </main>
    <Footer endpoints={footerAPI}/>
      
      
    </>
  )
}

export default App

