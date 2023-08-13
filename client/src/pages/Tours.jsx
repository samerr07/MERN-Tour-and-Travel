import React, { useEffect, useState } from 'react'
import CommonSection from '../shared/CommonSection'
import tourData from "../assets/data/tours"
import { Col, Container, Row } from 'reactstrap'
import SearchBar from "../shared/SearchBar"
import TourCard from "../shared/TourCard"
import NewsLetter from "../shared/NewsLetter"
import axios from "axios"
import { BASEURL } from '../utils/config'

const Tours = () => {

  const [data,setData] = useState([])
  const [tourCount , setTourCount] = useState()
  const [loading, setLoading] = useState(false)
  const [pageCount,setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const getTours = async()=>{
    try{
      setLoading(true)
      const {data} = await axios.get(`${BASEURL}/tours/getAllTours/?page=${page}`)
      
      if(data?.success){
        const {tours} = data
        setData(tours)
        // console.log(tours)
      }
      setLoading(false)
    } catch(err){
      alert(err.message)
    }
  }
  const getTourCount = async()=>{
    const {data} = await axios.get(`${BASEURL}/tours/getTourCount`)
    const {tourCount} = data;
    setTourCount(tourCount)
  }

  // useEffect(()=>{
  //   const pages = Math.ceil(tourCount/8)    //later in backend
  //   setPageCount(pages)
  //   getTours()
  //   getTourCount()
  //   window.scrollTo(0,0)
  // },[page,tourCount])

  useEffect(() => {
    getTourCount()
    getTours()
    window.scrollTo(0, 0)
  }, [page]);
  
  useEffect(() => {
    if (tourCount > 0) {
      const pages = Math.ceil(tourCount / 8);
      setPageCount(pages);
    }
  }, [tourCount,data]);
  return (
    <>
      <CommonSection title={"All Tours"}/>
      
      <section>
        <Container>
          <Row>
            <SearchBar/>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          {loading && <h4 className='text-center pt-5'>Loading.........</h4>}
          {
            !loading && 
            <Row>
            {
              data?.map((tour)=>(
                <Col lg="3" className='mb-4' key={tour.id}>
                  <TourCard tour={tour}/>
                </Col>
              ))
            }
            <Col lg="12">
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {
                  [...Array(pageCount).keys()].map((number)=>(
                    <span
                      key={number}
                      onClick={()=>setPage(number)}
                      className={page === number ? "activePage" : ""}
                    >
                      {number+1}
                    </span>
                  ))
                }
              </div>
            </Col>
          </Row>
          }
        </Container>
      </section>
      <NewsLetter/>
    </>
  )
}

export default Tours
