
import Iframe from 'react-iframe';

import * as Scroll from 'react-scroll';

import Header from './components/Header';
import Quotes from './components/Quotes';
import Booking from './components/Booking';
import Portfolio from './components/Portfolio';


import './App.css';



import headerImg from './graphics/header.jpg';
import aboutImg from './graphics/final_about_me.jpg';
import serviceImage from './graphics/services.jpg';


// Todo List:
// Header:  Just getting started, ready for coding!

// About:  Skeleton is done, 
// need content, and maybe some tweaking once the actual image comes in

// Quotes:  Just getting started, ready for coding!
// Prices:  Just getting started, ready for coding!
// Booking: Just getting started, ready for coding! 
// Portfolio: Just getting started, ready for coding!
// Footer:  Just getting started, ready for coding!


let services = [
  {
    name: 'Silver Service Package',
    price: 30,
    desc: 'Deep Cleaning Wash & Condition\nAny Style Haircut (above shoulder length)'
  },
  {
    name: 'Gold Service Package',
    price: 35,
    desc: 'Deep Cleaning Wash & Condition\nAny Style Haircut (above shoulder length)\nBeard GroomingService'
  },
  {
    name: 'Platinum Service Package',
    price: 45,
    desc: 'Deep Cleaning Wash & Condition\nAny Style Haircut (above shoulder length)\nBeard GroomingService\nExfoliating Facial'
  },
  {
    name: 'Diamond Service Package',
    price: 60,
    desc: 'Deep Cleaning Wash & Condition\nAny Style Haircut (above shoulder length)\nFull Hot Towel Shave\nExfoliating Facial'
  },
  {
    name: 'Haircut',
    price: 25,
    desc: 'Any Style Haircut (above shoulder length)\n\n*please come with your hair clean or a wash charge will be applied'
  },
  {
    name: 'Beard Grooming',
    price: 15,
    desc: 'Beard Trim with a Hot Towel & Razor Line Up'
  },
  {
    name: 'Kids Cut',
    price: 20,
    desc: 'Basic Cut for kids 10 & Under. No Razors will be used during a kids service'
  },
  {
    name: 'Full Razor Shave',
    price: 30,
    desc: 'A Straight Razor Shave with Hot & Cold Towels'
  },
  {
    name: 'Lightening Service',
    price: 20,
    desc: 'Price Per Bowl'
  },
  {
    name: 'Coloring Service',
    price: 20,
    desc: 'Price Per Bowl'
  }
]


export default function App() {



  // normally using the index for keys is a bad idea,
  // but since this is a static list and we're only mapping for convenience
  // it should be fine for this particular use case
  let servicesMap = services.map((service, i) => {
    return (
    <div className="service" key={i}>
      <h4>{service.name}</h4>
      <p>${service.price}</p>
      <p>{service.desc}</p>
    </div>
    )
  })


  let copyrightYear = new Date().getFullYear();





  return (
    <div className="App">
      <header className="App-header" id="home">

        <Header />
        <img className="header-image" src={headerImg} />

      </header>
      <div className="App-body">

{/* ~~~~~~~~~~~~ */}

        <div className="about-wrapper">
          <div className="about">
            <div className="about-text" style={{alignSelf: 'center'}}>
              <h2 className="about-header">ABOUT ME</h2>
              <p style={{fontSize: '1.5em'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="about-img-wrapper">
              <img className="about-img" src={aboutImg} />
            </div>

          </div>
        </div>

{/* ~~~~~~~~~~~~ */}

        <div className="quotes">
          <Quotes />
        </div>

{/* ~~~~~~~~~~~~ */}

        <div className="prices-and-services" id="services">
          <div className="twenty-picture">
            {/* <p>img</p> */}
            <img className="services-image" src={serviceImage} />
          </div>
          <div className="services-wrapper">
            
            <h2>Prices and Services</h2>

            <hr style={{color: 'white', maxWidth: '80%'}} />

            <div className="services">
              {servicesMap}
            </div>
          </div>
        </div>

{/* ~~~~~~~~~~~~ */}

        <div className="booking" id="book">
          <Booking />
        </div>

{/* ~~~~~~~~~~~~ */}

        <div className="portfolio" id="portfolio">
          <Portfolio />
        </div>

{/* ~~~~~~~~~~~~ */}

        <div className="footer">
          <h1 className="footer-location-text" >LOCATION</h1>

          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.8555008453695!2d-81.46013868490888!3d28.544062694830416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e779a77fcba88f%3A0xb24a66231b54eec3!2s129%20N%20Kirkman%20Rd%2C%20Orlando%2C%20FL%2032811!5e0!3m2!1sen!2sus!4v1605905171570!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}

          <Iframe
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.8555008453695!2d-81.46013868490888!3d28.544062694830416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e779a77fcba88f%3A0xb24a66231b54eec3!2s129%20N%20Kirkman%20Rd%2C%20Orlando%2C%20FL%2032811!5e0!3m2!1sen!2sus!4v1605905171570!5m2!1sen!2sus"
            width="100%"
            height="400px"

          />

          <a href="https://www.instagram.com/jvst_jake/" className="footer-jake-handle"><h3 className="footer-jake-handle" >@Jvst_Jake</h3></a>
          <a href="tel:561-818-4565" className="footer-phone" ><h4 className="footer-phone" >561-818-4565</h4></a>
          <a href="https://goo.gl/maps/PzuSoaqHnom555bCA" className="footer-address-text"><h4 className="footer-address-text">129 N Kirkman Rd Orlando, FL</h4></a>
          <h4 className="footer-copyright" >©{copyrightYear} Jvst_Jakes.</h4>
        </div>

{/* ~~~~~~~~~~~~ */}

      </div>
    </div>
  );
}

