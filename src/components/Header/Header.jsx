import React, {useRef} from 'react'
import { Container, Row, Col } from "reactstrap";
import { Link , NavLink} from "react-router-dom";
import '../../styles/Header.css';

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
  },

  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {

  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return <header className="header">
    <div className="header__top">
      <Container>
        <Row>
          <Col lg='6' md='6' sm='6'>
            <div className="header__top__left">
                <span>Need Help?</span>
              <span className="header__top__help">
                <i className="ri-phone-fill">09653023422</i>
              </span>
            </div>
          </Col>
          <Col lg='6' md='6' sm='6'>
            <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
              <Link to='#' className= " d-flex align-items-center gap-1">

                <i className="ri-login-circle-line"></i>Login</Link>

                <Link to='#'>
                <i className="ri-user-fill"></i>Register</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

    <div className="header__middle">
      <Container>
        <Row>
          <Col lg='4' md='3' sm='4'>
            <div className="logo">
              <h1><Link to='/home' className="d-flex align-items-center gap-3">
                <i className="ri-roadster-line"></i>
                <span>Rent Car <br/> Service</span>
              </Link>
              </h1>
            </div>
          </Col>
          <Col lg='3' md='3' sm='4'>
            <div className="header__location d-flex align-items-center gap-2">
              <span>
                <i className="ri-earth-line"></i>
              </span>
                <div className="header__location-content">
                  <h5>Philippines</h5>
                  <h6>Las Piñas City, Philippines</h6>
                </div>
              
            </div>
          </Col>
          <Col lg='3' md='3' sm='4'>
            <div className="header__location d-flex align-items-center gap-2">
              <span>
                <i className="ri-time-line"></i>
              </span>
                <div className="header__location-content">
                  <h5>Monday - Sunday</h5>
                  <h6>10am - 6pm</h6>
                </div>
              
            </div>
          </Col>
          <Col lg='2' md="3" sm='0' className=" d-flex align-items-center justify-content-end">
            <button className="header__btn btn ">
              <Link to='/contact'>
                <i className="ri-phone-line"></i> Request a Call
              </Link>
            </button>
          </Col>
        </Row>
      </Container>
    </div>


    <div className="main__navbar">
      <Container>
        <div className="navigation__wrapper d-flex align-items-center justify-content-between">
          <span className="mobile__menu">
            <i class="ri-menu-line" onClick={toggleMenu}></i>
          </span>

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu">
              {
                navLinks.map ((item, index) =>(
                  <NavLink to={item.path} className={navClass=> navClass.isActive ? 'nav__active nav__item' : 'nav__item'} key={index}>{item.display}</NavLink>
                ))
              }
            </div>
          </div>

          <div className="nav__right">
            <div className="search__box">
              <input type="text" placeholder="Search" />
              <span><i class="ri-search-2-line"></i></span>
            </div>
          </div>
        </div>
      </Container>
    </div>

  </header>
}

export default Header