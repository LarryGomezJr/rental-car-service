import React from 'react'
import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import AboutSection from '../components/UI/AboutSection';
import { Container, Row, Col} from 'reactstrap';
import BecomeDriverSec from '../components/UI/BecomeDriverSec';
import driverImg from '../assets/all-images/drive.jpg';
import OurMembers from '../components/UI/OurMembers';
import '../styles/About.css'

const About = () => {
  return <Helmet title='About Us'>
    <CommonSection title='About'/>
    <AboutSection />
    <section className="about__page-section">
      <Container>
        <Row>
          <Col lg='6' md='6' sm='12'>
            <div className="about__page-img">
              <img src={driverImg} alt="" className="w-100 rounded-3"/>
            </div>
          </Col>
          <Col lg='6' md='6' sm='12'>
            <div className="about__page-content">
              <h2 className="section__title">We are committed to provide safe ride solutions</h2>
              <p className="section__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem amet vitae voluptatum eum ab quaerat illum corrupti repudiandae et. Commodi laboriosam quibusdam minima, modi sequi corporis unde tempora repudiandae at, impedit, soluta accusantium repellendus nulla in qui similique! Distinctio optio voluptas officiis nemo! Nobis, est. Illum nesciunt explicabo consequuntur consectetur</p>

              <p className="section__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem amet vitae voluptatum eum ab quaerat illum corrupti repudiandae et. Commodi laboriosam quibusdam minima, modi sequi corporis unde tempora repudiandae at, impedit, soluta accusantium repellendus nulla in qui similique! Distinctio optio voluptas officiis nemo! Nobis, est. Illum nesciunt explicabo consequuntur consectetur</p>
              <div className="d-flex align-items-center gap-3 mt-4">
                <span className="fs-4"><i class="ri-phone-line"></i></span>

                <div>
                  <h6 className="section__subtitle">Need any help?</h6>
                  <h4>639983035526</h4>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <BecomeDriverSec />

    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5 text-center'>
            <h6 className="section__subtitle">Experts</h6>
            <h2 className="section__title">Our Members</h2>
          </Col>
          <OurMembers />
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default About