import React, { useContext, useState } from 'react'
import { Button, Col, Container, Form, FormGroup, Row } from 'reactstrap'
import loginImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";
import { Link, useNavigate } from 'react-router-dom';
import {AuthContext} from "./../context/authContext"
import axios from "axios";
import { BASEURL } from '../utils/config';
// import { toast } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

  // const [credentials, setCredentials] = useState({
  //   email:undefined,
  //   password:undefined,
  // })
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const navigate = useNavigate()

  const {dispatch} = useContext(AuthContext);

// const handleChange = (e)=>{
//     setCredentials((prev)=>({...prev,[e.target.id]:e.target.value}))
// }

const handleEmail = (e)=>{
  setEmail(e.target.value)
}

const handlePassword = (e)=>{
  setPassword(e.target.value)
}
const handleSubmit = async(e)=>{
  e.preventDefault();

  dispatch({type:"LOGIN_START"})

  try{
    const {data} = await axios.post(`${BASEURL}/auth/login`,{email,password})

    if(data?.success){
      localStorage.setItem("token",data.token);
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
      // console.log(data)
    }
    dispatch({type:"LOGIN_SUCCESS", payload:data})
    navigate("/")
  }catch(err){
    toast.error(err.message,{position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",})

    dispatch({type:"LOGIN_FAILURE", payload:err.message})
  }
  }



  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className='m-auto'>
            <div className="loginContainer d-flex justify-content-between">
              <div className="loginImg">
                <img src={loginImg} alt="" />
              </div>
              <div className="loginForm">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>

                <h2>Login</h2>

                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <input type="email"  id="email" placeholder='Email' required onChange={handleEmail}/>
                  </FormGroup>
                  <FormGroup>
                    <input type="password"  id="password" placeholder='Password' required onChange={handlePassword}/>
                  </FormGroup>

                  <Button className='btn secondary__btn auth__btn' type='submit'>Login</Button>
                </Form>

                <p>Don't have an account? <Link to={"/register"}>Create</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login
