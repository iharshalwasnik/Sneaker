import React from 'react'
import App1 from '../Images/app.jpg'
import Play from '../Images/play.jpg'
import Pay from '../Images/pay.png'
import logo2 from '../Images/bluelogo.png'
import { FaFacebook , FaInstagram , FaYoutube } from "react-icons/fa";
import './styles/Footer.css'


function Footer() {
  return (
    <div>
       <section className="footer" style={{backgroundColor: 'black'}}>
        <div className="container">
          <div className="row py-5 text-center">
            <div className="col-md-6">
              <h2>Subscribe to our awesome emails</h2>
              <h4>Get our latest offers and news straight in your inbox.</h4>
              <form className="d-flex">
                <input className="form-control me-5" type="search" placeholder="please enter an email" style={{fontStyle:'italic'}} aria-label="Search" />
                <button className="btn btn-outline-light me-4" type="submit" style={{width:'180px'}}>Submit</button>
              </form>
            </div>
            <div className="col-md-6">
              <h2>Payment Gateway</h2>
              <a className="pay1" href="#"><img src={ App1 } height={40} /></a>
              <a className="pay1" href="#"><img src={ Play } height={40} /></a>
              <a className="pay1" href="#"><img src={ Pay } height={40} /></a>
            </div>
            <div className="row py-5 text-center">
              <div className="col-lg-4">
                <img src={ logo2 } height="70px" style={{mixBlendMode: 'lighten'}} />
                <p style={{textAlign: 'justify'}}>Sneakers is India’s premier footwear fashion destination for the latest trends and hottest styles</p>
                <p style={{textAlign: 'justify'}}>Contact us: help@sneakersstores.com</p>
              </div>
              <div className="col-lg-4 text-center">
                <h4>Our Company</h4>
                <p><a href="#" style={{textDecoration:'none',color:'white'}}>Shipping &amp; Delivery Policy</a></p>
                <p><a href="#" style={{textDecoration:'none',color:'white'}}>Privacy Policy</a></p>
                <p><a href="#" style={{textDecoration:'none',color:'white'}}>Terms &amp; Conditions</a></p>
                <p><a href="#" style={{textDecoration:'none',color:'white'}}>Return &amp; Refund Policy</a></p>
              </div>
              <div className="col-lg-4">
                <h4>Social Media</h4>
                <br />
                <a href="https://www.facebook.com/"><FaFacebook className='socialicon'/></a>
                <a href="https://www.instagram.com/"><FaInstagram className='socialicon'/></a>
                <a href="https://www.youtube.com/"><FaYoutube className='socialicon'/></a>
              </div>
            </div>
          </div>
          <div className="container">
            <hr style={{color: 'white'}} />
            <div className="row py-1 m-auto text-center">
              <div className="col-lg">
                <p>Copyright @ 2021 Organic. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div></section>
    </div>
  )
}

export default Footer
