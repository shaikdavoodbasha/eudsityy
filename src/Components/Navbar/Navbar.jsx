import React, { useEffect, useState } from 'react'
import './Navbar.css'
import '../../index.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
  const [hide,setHide]=useState(false)
  const [sticky,setSticky]=useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true): setSticky(false)

    })
  },[])
  return (
    <nav className={`container ${sticky?"dark-nav":""}`}>
        <img src={logo} alt=""  className='logo'/>
        <ul className={hide?"hidemenu":"" }>
            <li><Link to='hero' smooth={true} offset={-10} duration={500}> Home</Link></li>
            <li><Link to='programs' smooth={true} offset={-240} duration={500}>Programs</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About</Link></li>
            <li><Link to='campus' smooth={true} offset={-250} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-270} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-250} duration={500} className='btn'> Contact us</Link></li>
        </ul>
        <img onClick={()=>setHide(!hide)}  src={menu_icon} alt="" className='menuicon' />
    </nav>
  )
}

export default Navbar
