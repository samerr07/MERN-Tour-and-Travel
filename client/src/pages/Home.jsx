import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import experienceImg from "../assets/images/experience.png"
import Subtitle from '../shared/Subtitle';
import worldImg from "../assets/images/world.png";
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/FeaturedTours/FeaturedTourList';
import MasonryImageGallery from '../components/ImageGallery/MasonryImageGallery';
import Testimonial from '../components/Testimonial/Testimonial';
import NewsLetter from '../shared/NewsLetter';



const Home = () => {
  return (
    <>
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={"Know Before You Go"}/>
                <img src={worldImg} alt="" />
              </div>
              <h1>
                Travelling opens the door to creating{" "}
                <span className='highlight'>memories</span>
              </h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis 
                sapiente voluptate excepturi porro, consectetur facilis obcaecati 
                eaque repudiandae beatae iure, explicabo minus iusto alias velit nisi 
                nulla soluta consequuntur consequatur. Lorem ipsum, dolor sit amet 
                consectetur adipisicing elit. Tenetur, ad.</p>
            </div>
          </Col>
          <Col lg="2">
            <div className="hero_ImgBox">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg="2">
            <div className="hero_ImgBox mt-4">
              <video src={heroVideo} controls></video>
            </div>
          </Col>
          <Col lg="2">
            <div className="hero_ImgBox mt-5">
              <img src={heroImg02} alt="" />
            </div>
          </Col>

          <SearchBar/>
        </Row>
      </Container>
    </section>

{/* *****Service section***** */}

    <section>
      <Container>
        <Row>
          <Col lg="3">
            <h5 className='serviceSubtitle'>What we serve</h5>
            <h2 className='serviceTitle'>We offer our best services</h2>
          </Col>
          <ServiceList/>
        </Row>
      </Container>
    </section>

    {/* *****featured tour ****** */}

    <section>
      <Container>
        <Row>
          <Col lg="12" className='mb-5'>
            <Subtitle subtitle={"Explore"}/>
            <h2 className='featureTourTitle'>Our features tours</h2>
          </Col>
          <FeaturedTourList/>
        </Row>
      </Container>
    </section>

    {/* *****Experience****** */}
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="experienceContent">
              <Subtitle subtitle={"Experience"}/>

              <h2>With our all experience <br /> We will serve you</h2>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 <br/>Ut iste, excepturi vero placeat officia quisquam!
              </p>
            </div>

            <div className="counterWrapper d-flex align-items-center gap-5">
              <div className="counterBox">
                <span>12k+</span>
                <h6>Successfull Trip</h6>
              </div>
              <div className="counterBox">
                <span>2k+</span>
                <h6>Regular Clients</h6>
              </div>
              <div className="counterBox">
                <span>15</span>
                <h6>Years Experience</h6>
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="experienceImg">
              <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    {/* ******Gallery****** */}

    <section>
      <Container>
        <Row>
          <Col lg="12">
            <Subtitle subtitle={"Gallery"}/>
            <h2 className="galleryTitle">
              Visit our Customers tpur gallery
            </h2>
          </Col>
          <Col lg="12">
            <MasonryImageGallery/>
          </Col>
        </Row>
      </Container>
    </section>

    {/* ******Testimonial****** */}

    <section>
      <Container>
        <Row>
          <Col lg="12">
            <Subtitle subtitle={"Fans Love"}/>
            <h2 className="testimonialTitle">What our fans say about us</h2>
          </Col>
          <Col lg="12">
            <Testimonial/>
          </Col>
        </Row>
      </Container>
    </section>

    <NewsLetter/>
    </>
  )
}

export default Home
