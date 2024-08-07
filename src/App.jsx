import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonilas/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Videoplayer from './Components/Videoplayer/Videoplayer'

const App = () => {
  const[playVideo,setPlayVideo]= useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='what we offers' title='Our Programs'/>
        <Programs />
        <About  setPlayVideo={setPlayVideo} />
        <Title subtitle='Gallery' title='Campus Photos'/>
        <Campus />
        <Title subtitle='Testimonials' title='What a student says?'/>
        <Testimonials />
        <Title subtitle='Contact Us' title='Get in Touch'/>
        <Contact />
        <Footer />
      </div>
    <Videoplayer playVideo={playVideo} setPlayVideo={setPlayVideo} />
    </div>
  )
}

export default App
