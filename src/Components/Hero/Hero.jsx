import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>we ensuring better education for a better world</h1>
                <p>Windows installations having the font, as opposed to 92% on Mac OS X. It used to be shipped with Internet Explorer until version 6, and was only installed with Windows 98. As the fonts are still available online, it does have an installed base of 70% on Linux.</p>
                <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
            </div>

        </div>
    )
}

export default Hero
