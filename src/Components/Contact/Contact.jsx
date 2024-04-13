import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import instagram_icon from '../../assets/instagram-icon.png'
import youtube_icon from '../../assets/youtube-icon.png'
import facebook_icon from '../../assets/facebook-icon.png'
import whatsapp_icon from '../../assets/whatsapp-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    return (
        <div>
          <div className="contact"> 
            <div className="contact-col">
              <h3>Send us a Message <img src={msg_icon} alt="" /> </h3>
              <p>
                Feel free to reach out through the contact form 
                or find our contact information below. 
                Your feedback, 
              </p>
              <ul>
                <li><img src={mail_icon} alt="" />Contact@RivervalleyfarmsInc</li>
                <li><img src={phone_icon} alt="" />+234 7066953098</li>
                <li><img src={location_icon} alt="" />White-House, Ikot Ayan Itam, Itu Local Government Area Akwa Ibom State</li>
                <li><img src={instagram_icon} alt="" /><a href="https://www.instagram.com/_rvfarms/">_rvfarms Instagram</a></li>
                <li><img src={youtube_icon} alt="" />RValleyFarm123</li>
                <li><img src={facebook_icon} alt="" />River valley Farm</li>
                <li><img src={whatsapp_icon} alt="" />+234 7066953098</li>
              </ul>
            </div>
            <div className="contact-col">
            <form action="https://formsubmit.co/vesionyeaba@gmail.com" method="POST">
                <label>Your Name</label>
                <input type="text" name="name" placeholder="Enter your name" required />
                <label>Phone Number</label> 
                <input type="tel" name="phone" placeholder="Enter your mobile number" required />
                <label>Write your message here</label> 
                <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
                <button type="submit" className="btn dark-btn">Submit now <img src={white_arrow} alt="" /></button>
              </form> 
              <span></span>
            </div>
          </div>
        </div>
      );
      

}

export default Contact
