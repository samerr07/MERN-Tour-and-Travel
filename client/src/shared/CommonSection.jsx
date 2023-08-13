import React from 'react'
import {Container, Row,Col} from "reactstrap"
import "./commonSection.scss"

const CommonSection = ({title}) => {
  return (
    <section className='commonSection'>
        <Container>
            <Row>
                <Col lg="12">
                    <h1>{title}</h1>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default CommonSection
