
import logo from '../graphics/jvst_jake_logo.png';


export default function Header(){
    return(
        <div>
            <nav className="site-nav">
                <div className="logo">
                    <img style={{height: '3em', width: '3em', borderRadius: '5%'}} src={logo} />
                </div>
                <div className="nav-links">
                <a className="nav-link" href="#home"><p>Home</p></a>
                <a className="nav-link" href="#services"><p>Services</p></a>
                <a className="nav-link" href="#portfolio"><p>Portfolio</p></a>
                <a className="nav-link" href="#book"><p>Book Now</p></a>

                </div>
            </nav>
        </div>
    );
}