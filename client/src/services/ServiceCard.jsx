import React from 'react'
import "./serviceCard.scss"

const ServiceCard = ({item}) => {

  const {imgUrl,title,desc} = item
  return (
    <div className='serviceItem'>
        <div className="serviceImg">
            <img src={imgUrl} alt="" />
        </div>
        <h5>{title}</h5>
        <p>{desc}</p>
    </div>
  )
}

export default ServiceCard
