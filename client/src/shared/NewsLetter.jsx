import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import maleTourist from "../assets/images/male-tourist.png"
import "./newsLetter.scss"

const NewsLetter = () => {
  return (
    <section className='newsLetter'>
        <Container>
            <Row>
                <Col lg="6">
                    <div className="newsLetterContent">
                        <h2>Subscribe now to get useful travelling information. </h2>
                        <div className="newsLetterInput">
                            <input type="email" placeholder='Enter your email' />
                            <button className='btn newsLetterBtn'>Subscribe</button>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum totam consequatur voluptatibus? Tempora, corporis? Dolores.</p>
                    </div>
                </Col>
                <Col lg="6">
                    <div className="newsLetterImg">
                        <img src={maleTourist} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default NewsLetter
