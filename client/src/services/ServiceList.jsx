import React from 'react'
import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";
import { Col } from 'reactstrap';
import ServiceCard from './ServiceCard';


const servicesData = [
    {
        imgUrl:weatherImg,
        title:"Calculate Weather",
        desc:"Get weather information for any city in the world"
    },
    {
        imgUrl:guideImg,
        title:"Best Tour Guide",
        desc:"Get weather information for any city in the world"
    },
    {
        imgUrl:customizationImg,
        title:"Customization",
        desc:"Get weather information for any city in the world"

    }
]
const ServiceList = () => {
  return (
    <>
    {
        servicesData.map((item,index)=>(
            <Col lg="3" key={index}>
                <ServiceCard item={item}/>
            </Col>
        ))
    }
    </>
  )
}

export default ServiceList
