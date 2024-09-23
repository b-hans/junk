import { Link } from "react-router-dom"

function Nav() {

    function toggleMenu(e){
        e.preventDefault();
        const toggleButton = document.getElementsByClassName('toggle-button')[0];
        const navbarLinks = document.getElementsByClassName('navbar-links')[0];    
        
        navbarLinks.classList.toggle('active');
    }

    return  <>
                <nav className="navbar">
                    <div className="brand-title">Brand name</div>
                    <a href="#" className="toggle-button" onClick={toggleMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </a>
                    <div className="navbar-links">
                        <ul className="nav-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </div>
                </nav>
            </>
}

export default Nav