import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header(props) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg  bg-primary bg-opacity-25 rounded position-relative">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={() => setOpen(false)}>
          {props.title}
        </Link>
        
        {/* Desktop Menu */}
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/'>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          
          {props.searchBar && (
            <form className="d-flex ms-3" role="search">
              <input 
                className="form-control me-2" 
                type="search" 
                placeholder="Search" 
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          )}
        </div>

        {/* Mobile Search - visible on medium and smaller screens */}
        {props.searchBar && (
          <div className="d-flex d-lg-none me-2">
            <input 
              className="form-control form-control-sm" 
              type="search" 
              placeholder="Search..." 
              aria-label="Search"
              style={{ width: '150px' }}
            />
          </div>
        )}

        {/* Mobile Menu Button */}
        <div className='sm:hidden pl-4 pr-1'>
          <button 
            className="navbar-toggler d-lg-none" 
            type="button" 
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {open && (
          <div 
            className="position-absolute top-100 end-0 shadow-sm py-3 d-lg-none bg-primary-subtle
 bg-opacity-10"
            style={{ zIndex: 1050 , minWidth: '200px'}}
          >
            <div className="container-fluid px-3">
              <div className="d-flex flex-column gap-2">
                <Link 
                  className="nav-link px-0" 
                  to='/' 
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  className="nav-link" 
                  to="/about" 
                  onClick={() => setOpen(false)}
                >
                  About
                </Link>
                
                {props.searchBar && (
                  <form className="d-flex mt-2" role="search">
                    <input 
                      className="form-control me-2" 
                      type="search" 
                      placeholder="Search" 
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-success btn-sm" type="submit">
                      Search
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

Header.defaultProps = {
  title: "Hello",
  searchBar: false
};

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool
};

export default Header;