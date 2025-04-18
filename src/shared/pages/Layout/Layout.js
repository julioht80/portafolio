import './Layaut.css';
import { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Switch from '../../components/Switch/Switch.js';
import Loader from '../../components/Loader/Loader.js';
import { useLocation } from 'react-router-dom';

function App({ tap, setTap }) {

  const location = useLocation();
  const path = location.pathname;

  useEffect(() => { setTap(path); }, [path, setTap]);

  return (
    <>
      <Loader />
      <header className="j-header pt-5 pb-5">
          <div className="container">
            <nav className="navbar" role="navigation" aria-label="main navigation">
              <div className="navbar-brand">
                <div className="navbar-item brand-text">
                { 'JT' }
                </div>
              </div>
              <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                  <Link className={`navbar-item ${tap === '/home' ? 'is-active' : ""}`} to="/home" onClick={()=>{setTap('/home')}}>
                    Inicio
                  </Link>
                  <Link className={`navbar-item ${tap === '/cv' ? 'is-active' : ""}`}  to="/cv" onClick={()=>{setTap('/cv')}}>
                    CV
                  </Link>
                  <Link className={`navbar-item ${tap === '/portfolio' ? 'is-active' : ""}`}  to="/portfolio" onClick={()=>{setTap('/portfolio')}}>
                    portfolio
                  </Link>
                  <Link className={`navbar-item ${tap === '/skills' ? 'is-active' : ""}`}  to="/skills" onClick={()=>{setTap('/skills')}}>
                    Hablidades
                  </Link>
                  <Link className={`navbar-item ${tap === '/about' ? 'is-active' : ""}`} to="/about" onClick={()=>{setTap('/about')}}>
                    Sobre mi
                  </Link>
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
