import React from 'react'
import About from './Components/About';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import Service from './Components/Service';
import Contact from './Components/Contact';
import Menu from './Components/Menu';
// import Form from './Components/Form';




function App() {
  return (
    <div>
       <Menu />
      <Hero />
      <About />
      <Service />
      <Contact />
    {/* <Form/> */}
     
    </div>
  )
}

export default App