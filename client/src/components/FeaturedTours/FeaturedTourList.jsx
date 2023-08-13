import React, { useEffect, useState } from 'react'
// import tourData from "../../assets/data/tours"
import { Col } from 'reactstrap'
import TourCard from '../../shared/TourCard'
import axios from "axios";
import { BASEURL } from '../../utils/config';

const FeaturedTourList = () => {

  const [data,setData] = useState([])
  const [loading, setLoading] = useState(false)

  const getFeaturedTours = async()=>{
    try{
      setLoading(true)
      const {data} = await axios.get(`${BASEURL}/tours/getFeaturedTour`)
      // console.log(data)
      if(data?.success){
        setData(data?.tours)
        console.log(data?.tours)
      }
      setLoading(false)
    } catch(err){
      alert(err.message)
    }
  }

  useEffect(()=>{
    getFeaturedTours()
  },[])

  return (
    <>
    {loading && <h4>Loading...........</h4>}
        { !loading &&
        data?.map((tour)=>(
            <Col lg="3" className='mb-4' key={tour._id}>
                <TourCard tour={tour}/>
            </Col>
        ))
    }
    </>
  )
}

export default FeaturedTourList
