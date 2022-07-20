import React from 'react'
import '../../styles/OurMembers.css'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";

const our_members = [
  {
    name: "Jovet Baldebino",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },

  {
    name: "Jhon Doenut",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava02,
  },

  {
    name: "Mark Reyes",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava03,
  },

  {
    name: "David Debelen",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },
];

const OurMembers = () => {
  return (<>
      {
    our_members.map((item, index) =>(
      <Col lg='3' md='3' sm='4' xs='6' key={index} className='mb-4'>
        <div className="single__member">
          <div className="single__member-img">
            <img src={item.imgUrl} alt="" className='w-100'/>
            <div className="single__member-social">
              <Link to={item.instUrl}><i class="ri-instagram-fill"></i></Link>
              <Link to={item.twitUrl}><i class="ri-twitter-fill"></i></Link>
              <Link to={item.linkedinUrl}><i class="ri-linkedin-box-fill"></i></Link>             
            </div>
          </div>

          <h6 className='text-center mb-0 mt-3'>{item.name}</h6>
          <p className="section__description text-center">{item.experience}</p>

        </div>
      </Col>
    ))
  }
  </>
  )
}

export default OurMembers