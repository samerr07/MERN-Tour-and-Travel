import React, { useEffect, useRef,useState } from 'react'
import { Col, Form, FormGroup } from 'reactstrap'
import "./searchBar.scss"
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { BASEURL } from '../utils/config'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';





const SearchBar = () => {
    const [data,setData] = useState([])
  const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const locationRef = useRef();
    const distanceRef = useRef(0);
    const maxGroupSizeRef = useRef(0)

    

    const handleSearch = () => {
        const location = locationRef.current.value;
        const distance = distanceRef.current.value;
        const maxGroupSize = maxGroupSizeRef.current.value;
    
        if (location === '' || distance === '' || maxGroupSize === '') {
          // return alert('All fields are required');
          return toast.warn("All fields are required", {
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
    
        const searchResult = async () => {
          try {
            setLoading(true);
            const { data } = await axios.get(`${BASEURL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`);
            navigate(`/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`, { state:data });
            setLoading(false);
          } catch (err) {
            alert(err.message);
          }
        };
    
        searchResult(); // Call the searchResult function here when handleSearch is executed
      };
    
    

  return (
    <Col lg="12">
        <div className="searchBar">
            <Form className='d-flex align-items-center gap-4'>
                <FormGroup className='d-flex gap-3 formGroup formGroupFast'>
                    <span>
                    <i class="ri-map-pin-line"></i>
                    </span>
                    <div>
                        <h6>Location</h6>
                        <input type="text" placeholder='Where are you going?' ref={locationRef} />
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 formGroup formGroupFast'>
                    <span>
                    <i class="ri-map-pin-time-line"></i>
                    </span>
                    <div>
                        <h6>Distance</h6>
                        <input type="Number" placeholder='Distance k/m' ref={distanceRef} />
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 formGroup formGroupLast'>
                    <span>
                    <i class="ri-group-line"></i>
                    </span>
                    <div>
                        <h6>Max People</h6>
                        <input type="Number" placeholder='0' ref={maxGroupSizeRef} />
                    </div>
                </FormGroup>

                <span className="searchIcon" type="submit" onClick={handleSearch}>
                <i class="ri-search-line"></i>
                </span>
            </Form>
        </div>
    </Col>
  )
}

export default SearchBar
