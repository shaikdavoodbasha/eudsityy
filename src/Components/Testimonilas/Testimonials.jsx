import React, { useRef } from 'react'
import './Testimonials.css'
import next from '../../assets/next-icon.png'
import back from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;
const slideForward = () => {
    if (tx > -50) {
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackword = () => {
    if (tx < 0) {
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}


    return (
        <div className='testimonials'>
            <img src={next} alt="" className='next-btn' onClick={slideForward} />
            <img src={back} alt="" className='back-btn' onClick={slideBackword} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user1} alt="" />
                                <div>
                                    <h3>Wiilam jacks</h3>
                                    <span>Educity ,USA</span>
                                </div>
                            </div>
                            <p>Windows installations having the font, as opposed to 92% on Mac OS X.
                                It used to be shipped withis recommended to always combine
                                Lucida Console and Andalé Mono in a font stack.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user2} alt="" />
                                <div>
                                    <h3>Wiilam jacks</h3>
                                    <span>Educity ,USA</span>
                                </div>
                            </div>
                            <p>Windows installations having the font, as opposed to 92% on Mac OS X.
                                It used to be shipped withis recommended to always combine
                                Lucida Console and Andalé Mono in a font stack.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user3} alt="" />
                                <div>
                                    <h3>Wiilam jacks</h3>
                                    <span>Educity ,USA</span>
                                </div>
                            </div>
                            <p>Windows installations having the font, as opposed to 92% on Mac OS X.
                                It used to be shipped withis recommended to always combine
                                Lucida Console and Andalé Mono in a font stack.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user4} alt="" />
                                <div>
                                    <h3>Wiilam jacks</h3>
                                    <span>Educity ,USA</span>
                                </div>
                            </div>
                            <p>Windows installations having the font, as opposed to 92% on Mac OS X.
                                It used to be shipped withis recommended to always combine
                                Lucida Console and Andalé Mono in a font stack.</p>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Testimonials
