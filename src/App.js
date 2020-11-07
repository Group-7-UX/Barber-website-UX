
import Header from './components/Header';
import Quotes from './components/Quotes';
import Booking from './components/Booking';
import Portfolio from './components/Portfolio';


import './App.css';



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



  let servicesMap = services.map(service => {
    return <div className="service">
      <h4>{service.name}</h4>
      <p>${service.price}</p>
      <p>{service.desc}</p>
    </div>
  })






  return (
    <div className="App">
      <header className="App-header" id="home">

        <Header />

      </header>
      <div className="App-body">

{/* ~~~~~~~~~~~~ */}

        <div className="about-wrapper">
          <div className="about">
            <div className="about-text">
              <h2>About</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="about-img">
              <p>img</p>
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
            <p>img</p>
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
          <p>static footer</p>
        </div>

{/* ~~~~~~~~~~~~ */}

      </div>
    </div>
  );
}

