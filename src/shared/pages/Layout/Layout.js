import './Layaut.css';
import { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Switch from '../../components/Switch/Switch.js';
import Loader from '../../components/Loader/Loader.js';
import { useLocation } from 'react-router-dom';

function App({ tap, setTap }) {

  const location = useLocation();
  const path = location.pathname;

  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => { setTap(path); }, [path, setTap]);

  return (
    <>
      <Loader />
      <header className="j-header pt-5 pb-5">
          <div className="container">
            <nav className="navbar" role="navigation" aria-label="main navigation">
              <div className="navbar-brand">
                <div className="navbar-item brand-text">
                  {'JT'}
                </div>
                <button
                  className={`navbar-burger bd-nav-burger js-burger ${isMenuActive ? 'is-active' : ''}`}
                  aria-label="menu"
                  aria-expanded={isMenuActive}
                  onClick={() => setIsMenuActive(!isMenuActive)}
                  data-target="j-layaut-nav"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
              <div 
                id="j-layaut-nav" 
                className={`navbar-menu ${isMenuActive ? 'is-active' : ''}`}
              >
                <div className="navbar-start">
                  <Link className={`navbar-item ${(tap === '/home' || tap === '/') ? 'is-active' : ""}`} to="/home" onClick={()=>{setTap('/home'); setIsMenuActive(false)}}>
                    Inicio
                  </Link>
                  <Link className={`navbar-item ${tap === '/cv' ? 'is-active' : ""}`}  to="/cv" onClick={()=>{setTap('/cv'); setIsMenuActive(false)}}>
                    CV
                  </Link>
                  <Link className={`navbar-item ${tap === '/portfolio' ? 'is-active' : ""}`}  to="/portfolio" onClick={()=>{setTap('/portfolio'); setIsMenuActive(false)}}>
                    Portafolio
                  </Link>
                  <Link className={`navbar-item ${tap === '/skills' ? 'is-active' : ""}`}  to="/skills" onClick={()=>{setTap('/skills'); setIsMenuActive(false)}}>
                    Habilidades
                  </Link>
                  {/* <Link className={`navbar-item ${tap === '/about' ? 'is-active' : ""}`} to="/about" onClick={()=>{setTap('/about'); setIsMenuActive(false)}}>
                    Sobre mi
                  </Link> */}
                </div>
                <div className="navbar-end">
                  <Switch></Switch>
                </div>
              </div>

            </nav>
          </div>
        
        <hr className="navbar-hr" />
      </header>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default App;
