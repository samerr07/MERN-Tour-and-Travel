import React, { useState } from 'react'
import CommonSection from "./../shared/CommonSection"
import { Col, Container, Row } from 'reactstrap'
import { useLocation } from 'react-router-dom'
import TourCard from '../shared/TourCard'
import NewsLetter from "../shared/NewsLetter"

const SearchResultList = () => {

  const location = useLocation();

  const [data] = useState(location.state)

  const {tours} = data;

  // console.log(data?.tours)
  return (
    <>
      <CommonSection title={"Tour Search Result"}/>
      <section>
        <Container>
          <Row>
             {
              tours.length === 0 ? (
                <h4 className='text-center'>No Tour Found !!!!!</h4>
              ) : (
                tours?.map((tour)=>(
                  <Col lg="3" className='mb-4'>
                    <TourCard tour={tour}/>
                  </Col>
                ))
              )
             }
          </Row>
        </Container>
      </section>
      <NewsLetter/>
    </>
   
  )
}

export default SearchResultList
