import React from 'react'
import {Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from "react-router-dom";
import "../../styles/Footer.css"

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "#",
    display: "Privacy Policy",
  },

  {
    path: "/cars",
    display: "Car Listing",
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

const Footer = () => {


  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='4' md='4' sm='12'>
          <div className="logo footer__logo">
              <h1><Link to='/home' className="d-flex align-items-center gap-2">
                <i className="ri-roadster-line"></i>
                <span>Rent Car <br/> Service</span>
              </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Porro laborum nulla quod commodi explicabo eos a quaerat delectus! Consectetur porro, veniam maxime consequatur eum quasi fugiat molestiae aperiam blanditiis officia! 
            </p>
        </Col>
        <Col lg='2' md='4' sm='6'>
          <div className="mb-4">
            <h5 className="footer__link-title">
              Quick Links
            </h5>
            <ListGroup>
              {
                quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className='p-0 mt-3 quick__link'>
                    <Link to={item.path}>
                      {item.display}
                    </Link>

                  </ListGroupItem> 
                ))
              }
            </ListGroup>
          </div>
        </Col>

        <Col lg='3' md='4' sm='6'>
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">
              Head Office
            </h5>
            <p className="office__info">123 madrigal, Las Piñas </p>
            <p className="office__info">Phone: 09953021425</p>
            <p className="office__info">Email: car_rental29@yahoo.com </p>
            <p className="office__info">Office Time: 9am - 5pm</p>
            </div>           
        </Col>

        <Col lg='3' md='4'>
          <div className="mb-4">
            <h5 className="footer__link-title">
              Newsletters
            </h5>
            <p className="section__description">
              Subscribe our newsletter
            </p>
            <div className="newsletter">
              <input type="email" placeholder="Email"/>
              <span><i class="ri-send-plane-fill"></i></span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
};

export default Footer