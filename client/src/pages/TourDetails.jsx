import React, { useContext, useEffect, useState } from "react";
import tourData from "../assets/data/tours";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import calculateAvgRating from "../utils/avgRating";
import Avatar from "../assets/images/avatar.jpg"
import Booking from "../components/Booking/Booking";
import NewsLetter from "../shared/NewsLetter";
import axios from "axios"
import { BASEURL } from "../utils/config";
import {AuthContext} from "./../context/authContext"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TourDetails = () => {
  const [data,setData] = useState([])
  const [loading,setLoading] = useState(false)
  const { id } = useParams();

  const {user} = useContext(AuthContext)

  // const { totalRating, avgRating } = calculateAvgRating(reviews);

  //format date

  const options = {day:"numeric",month:"long",year:"numeric"}

  const [reviewText, setReviewText]= useState("");
  const [tourRating,setTourRating] = useState(null)

  const getTourDetails = async()=>{
    try{
      setLoading(true)
      const {data} = await axios.get(`${BASEURL}/tours/getTour/${id}`)
      
      if(data?.success){
        const {tour} = data
        setData(tour)
        console.log(tour)
        toast.success("Tour Details Fetched Successfully !!",{
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          })
      }
      setLoading(false)
    } catch(err){
      // alert(err.message)
      toast.warn("Not found any tours !!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  }
  const {
    title,
    photo,
    desc,
    price,
    reviews,
    city,
    distance,
    maxGroupSize,
    address,
  } = data;

  // console.log(reviews)
  const handleReviewText = (e)=>{
    setReviewText(e.target.value);
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    // alert(`${reviewText},${tourRating}`)

    try{
      if(!user || user ===undefined || user === null){
        // alert("Please Sign In")
        toast.warn('Please Sign In !!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }

      const reviewObj = {
        username: user?.data.username,
        reviewText,
        rating: tourRating
      }
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const {data} = await axios.post(`${BASEURL}/reviews/${id}`,reviewObj, config)
      console.log(data) 
      if(data?.success){
        // alert(data?.message)
        toast.success(data?.message,{
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          })
        window.location.reload()
      }
    } catch(err){
      // alert(err.message)
      toast.error(err.message,{position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",})
    }

    setReviewText("")
  }
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  useEffect(()=>{
    getTourDetails()
    window.scrollTo(0,0)
  },[])


  return (
    <>
      <section>
        <Container>
          {
            loading && <h4 className="text-center pt-5">Loading.......</h4>
          }
          {
            !loading && (
              <Row>
            <Col lg="8">
              <div className="tourContent">
                <img src={photo} alt="this is image" />

                <div className="tourInfo">
                  <h2>{title}</h2>

                  <div className="d-flex align-items-center gap-5">
                    <span className="tourRating d-flex align-items-center gap-1">
                      <i class="ri-star-fill"
                        style={{color:"var(--secondary-color)"}}
                      ></i>
                      {avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? (
                        "Not Rated!"
                      ) : (
                        <span>{`(${reviews?.length})`}</span>
                        // <h1>4</h1>
                      )}
                    </span>

                    <span>
                      <i class="ri-map-pin-user-fill"></i>{address}
                    </span>

                  </div>

                  <div className="tourExtraDetails">
                    <span>
                    <i class="ri-map-pin-2-line"></i>{city}
                    </span>
                    <span>
                    <i class="ri-money-dollar-circle-line"></i>${price} /per person
                    </span>
                    <span>
                    <i class="ri-map-pin-time-line"></i>{distance} km
                    </span>
                    <span>
                    <i class="ri-group-line"></i>{maxGroupSize} people
                    </span>
                  </div>

                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>

                {/* *******tour reviews******* */}

                <div className="tourReviews">
                  <h4>Reviews ({reviews?.length} reviews)</h4>

                  <Form onSubmit={handleSubmit}>
                    <div className="d-flex align-items-center gap-3 mb-4 ratingGroup">
                      <span onClick={()=>setTourRating(1)}>1<i class="ri-star-s-fill"></i></span>
                      <span onClick={()=>setTourRating(2)}>2<i class="ri-star-s-fill"></i></span>
                      <span onClick={()=>setTourRating(3)}>3<i class="ri-star-s-fill"></i></span>
                      <span onClick={()=>setTourRating(4)}>4<i class="ri-star-s-fill"></i></span>
                      <span onClick={()=>setTourRating(5)}>5<i class="ri-star-s-fill"></i></span>
                    </div>

                    <div className="reviewInput">
                      <input type="text" placeholder="Share your thoughts" onChange={handleReviewText} required  />
                      <button className="btn primary__btn text-white" type="submit">
                        Submit
                      </button>
                    </div>
                  </Form>

                  <ListGroup className="userReviews">
                    {
                      reviews?.map((review)=>(
                        <div className="reviewItem">
                          <img src={Avatar} alt="" />
                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5>{review.username}</h5>
                                <p>
                                  {
                                    new Date(review.createdAt).toLocaleDateString("en-US",options)
                                  }
                                </p>
                              </div>

                              <span>
                                {review.rating}<i class="ri-star-s-fill"></i>
                              </span>
                            </div>

                            <h6>{review.reviewText}</h6>
                          </div>
                        </div>
                      ))
                    }
                  </ListGroup>
                </div> 
              </div> 
            </Col>

            <Col lg="4">
              <Booking tour={data} avgRating={avgRating}/>
            </Col>
          </Row>
            )
          }
        </Container>
      </section>
      <NewsLetter/>
    </>
  );
};

export default TourDetails;
