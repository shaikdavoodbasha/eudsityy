import React from 'react'
import './About.css'
import about from '../../assets/about.png'
import playicon from '../../assets/play-icon.png'
const About = ({setPlayVideo}) => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about} alt=""  className='about-img'/>
                <img src={playicon} alt="" className='playicon' onClick={()=>{setPlayVideo(true)}} />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nuturing tomorrow's leader Today</h2>
                <p>Windows installations having the font, as opposed to 92% on Mac OS X.
                    It used to be shipped with Internet Explorer until version 6, and was
                    only installed with Windows 98. As the fonts are still available online,
                    it does have an installed base of 70% on Linux. As it is similar and
                    metric-compatible to Lucida Console, it is recommended to always combine
                    Lucida Console and Andalé Mono in a font stack.</p>
                <p>Windows installations having the font, as opposed to 92% on Mac OS X.
                    It used to be shipped withis recommended to always combine
                    Lucida Console and Andalé Mono in a font stack.</p>
                <p>Windows installations having the font, as opposed to 92% on Mac OS X.
                    It us. As it is similar and
                    metric-compatible to Lucida Console, it is recommended to always combine
                    Lucida Console and Andalé Mono in a font stack.</p>
            </div>

        </div>
    )
}

export default About
