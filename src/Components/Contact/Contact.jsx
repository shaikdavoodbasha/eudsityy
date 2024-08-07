import React from 'react'
import './Contact.css'
import message_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import number_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import whitearrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a364664b-4519-4c17-845c-c4b85f2ae728");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>send us a message <img src={message_icon} alt="" /></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus excepturi amet doloremque
                    necessitatibus sed laboriosam velit sequi ipsam rerum? Accusantium nulla corporis reprehenderit,
                    placeat asperiores laboriosa</p>
                <ul>
                    <li><img src={mail_icon} alt="" /> nnenananamail@gmail.com</li>
                    <li><img src={number_icon} alt="" />91+8383838383</li>
                    <li><img src={location_icon} alt="" />Nellore, sullurpeta</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input type="text" name='name' placeholder='Enter your name' required />
                    <label >Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                    <label >Write your message here</label>
                    <textarea name="message" rows='6' placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'>submit now<img src={whitearrow} /></button> 
                </form>
                
            </div>

        </div>
    )
}

export default Contact
