import React, { useContext, useState } from 'react'
import { Button, Col, Container, Form, FormGroup, Row } from 'reactstrap'
import registerImg from "../assets/images/register.png";
import userIcon from "../assets/images/user.png";
import { Link, useNavigate } from 'react-router-dom';
import {AuthContext} from "./../context/authContext"
import axios from "axios";
import { BASEURL } from '../utils/config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {

  const [credentials, setCredentials] = useState({
    username:undefined,
    email:undefined,
    password:undefined,
  })
  const navigate = useNavigate()

  const {dispatch} = useContext(AuthContext);

const handleChange = (e)=>{
    setCredentials((prev)=>({...prev,[e.target.id]:e.target.value}))
}

const handleSubmit = async(e)=>{
  e.preventDefault();
  try{
    const {data} = await axios.post(`${BASEURL}/auth/register`,credentials)
    console.log(data)
    if(data?.success){
      // alert(data.message)
      toast.success(data.message,{
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
    dispatch({type:"REGISTER_SUCCESS"})
    navigate("/login")
  }catch(err){
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

  // try {
  //   const { data } = await axios.post(`${BASEURL}/auth/register`, credentials);

  //   if (data?.success) {
  //     alert(data.message);
  //   }
  //   dispatch({ type: "REGISTER_SUCCESS" });
  //   navigate("/login");
  // } catch (err) {
  //   alert(err.message);
  // }

}
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className='m-auto'>
            <div className="loginContainer d-flex justify-content-between">
              <div className="loginImg">
                <img src={registerImg} alt="" />
              </div>
              <div className="loginForm">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>

                <h2>Register</h2>

                <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <input type="text"  id="username" placeholder='Username' required onChange={handleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <input type="email"  id="email" placeholder='Email' required onChange={handleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <input type="password"  id="password" placeholder='Password' required onChange={handleChange}/>
                  </FormGroup>

                  <Button className='btn secondary__btn auth__btn' type='submit'>Create Account</Button>
                </Form>

                <p>Already have an account? <Link to={"/login"}>Login</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Register;
