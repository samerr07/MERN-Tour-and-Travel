import React from 'react'
import { Container, Row,Col, ListGroup, ListGroupItem } from 'reactstrap'
import logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom'
import "./footer.scss"

const quickLinks1 = [
  {
    path:"/home",
    display:"Home"
  },
  {
    path:"/about",
    display:"About"
  },
  {
    path:"/tours/getAllTours",
    display:"Tours"
  }
]

const quickLinks2 = [
  {
    path:"/gallery",
    display:"Gallery"
  },
  {
    path:"/login",
    display:"Login"
  },
  {
    path:"/register",
    display:"Register"
  }
]
const Footer = () => {

  const year = new Date().getFullYear()
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, perspiciatis.</p>
              <div className="socialLinks d-flex align-items-center gap-4">
                <span>
                  <Link><i class="ri-youtube-line"></i></Link>
                </span>
                <span>
                  <Link><i class="ri-github-fill"></i></Link>
                </span>
                <span>
                  <Link><i class="ri-facebook-circle-line"></i></Link>
                </span>
                <span>
                  <Link><i class="ri-instagram-line"></i></Link>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="3">
            <h5 className="footerLinkTitle">Discover</h5>
            <ListGroup className='footerQuickLinks'>
              {
                quickLinks1.map((item,index)=>(
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg="3">
          <h5 className="footerLinkTitle">Quick Links</h5>
            <ListGroup className='footerQuickLinks'>
              {
                quickLinks2.map((item,index)=>(
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>

          <Col lg="3">
          <h5 className="footerLinkTitle">Contact Us</h5>
            <ListGroup className='footerQuickLinks'>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span>
                        <i class="ri-map-pin-line"></i>
                      </span>
                      Address:
                    </h6>
                    <p className='mb-0'>Delhi, India</p>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span>
                      <i class="ri-mail-line"></i>
                      </span>
                      Email:
                    </h6>
                    <p className='mb-0'>samerr07@gmail.com</p>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span>
                      <i class="ri-phone-line"></i>
                      </span>
                      Phone:
                    </h6>
                    <p className='mb-0'>+91-1234567890</p>
                  </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="12" className='text-center pt-5'>
            <p className="copyright">
              Copyright {year}, design and develop by Sameer Srivastava.
              All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
