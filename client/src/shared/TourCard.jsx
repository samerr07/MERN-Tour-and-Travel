import React from 'react'
import { Card, CardBody } from 'reactstrap'
import {Link} from "react-router-dom"
import "./tourCard.scss"
import calculateAvgRating from '../utils/avgRating'


const TourCard = ({tour}) => {

    const {_id,title,city,photo,price,reviews,featured} = tour;
    // console.log(photo)

    const {totalRating,avgRating} = calculateAvgRating(reviews)
  return (

    <div className='tourCard'>
        <Card>
            <div className="tourImg">
                <img src={`${photo}`} alt="this is an omg" />
                {featured && <span>Featured</span>}
            </div>

            <CardBody>
            <div className="cardTop d-flex align-items-center justify-content-between">
                <span className='tourLocation d-flex align-items-center gap-1'>
                <i class="ri-map-pin-line"></i>{city}
                </span>
                <span className='tourRating d-flex align-items-center gap-1'>
                <i class="ri-star-fill"></i>{avgRating === 0 ? null : avgRating}
                {
                    totalRating === 0 ? (
                        "Not Rated!"
                    ):(
                        <span>{`(${reviews.length})`}</span>
                    )
                }
                </span>
            </div>
            
            <h5 className='tourTitle'>
                <Link to={`/tours/getTour/${_id}`}>{title}</Link>
            </h5>

            <div className="cardBottom d-flex align-items-center justify-content-between mt-3">
                <h5>${price} <span>/per person</span></h5>

                <button className='btn bookingBtn'>
                    <Link to={`/tours/getTour/${_id}`}>Book Now</Link>
                </button>
            </div>
        </CardBody>

        </Card>
        
    </div>
  )
}

export default TourCard
