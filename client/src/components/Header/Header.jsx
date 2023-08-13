import React, { useContext, useRef} from 'react'
import {Container,Row,Button} from "reactstrap"
import {Link,NavLink, useNavigate} from "react-router-dom"
import logo from "../../assets/images/logo.png"
import "./header.scss"
import {AuthContext} from "./../../context/authContext"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const nav__links = [
    {
        path:"/home",
        display:"Home",
    },
    {
        path:"/about",
        display:"About",
    },
    {
        path:"/tours/getAllTours",
        display:"Tours"
    },
]

const Header = () => {

    // const headerRef = useRef(null);
    const menuRef = useRef(null);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const stickyHeader = ()=>{
    //     window.addEventListener("scroll",()=>{
    //         if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
    //             headerRef.current.classList.add("sticky__header");
    //         } else {
    //             headerRef.current.classList.remove("sticky__header");
    //         }
    //     })
    // }

    // useEffect(()=>{
    //     stickyHeader();

    //     return window.removeEventListener("scroll",stickyHeader)
    // })

    const navigate = useNavigate()
    const {dispatch,user} = useContext(AuthContext)

    // console.log(user)

    const logout = ()=>{
        dispatch({type:"LOGOUT"})
        localStorage.clear();
        navigate("/")
        toast.success("User Logout Successfully!!",{position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",})
    }

    const toggleMenu = () => {
        menuRef.current.classList.toggle("showMenu");
        // setIsMenuOpen(!isMenuOpen);
      };
  return (
    <header className="header"  >
      <Container>
        <Row>
            <div className='nav__wrapper d-flex align-items-center justify-content-between'>
                {/* ***Logo*** */}
                <div className="logo">
                    <img src={logo} alt="" />
                </div>

                {/* ****menu**** */}
                <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                    <ul className='menu d-flex align-items-center gap-5'>
                        {
                            nav__links.map((item,index)=>(
                                <li className="nav__item" key={index}>
                                    <NavLink to={item.path}
                                    className={navClass => navClass.isActive ? "active__link" : ""}
                                    >{item.display}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="nav__right d-flex align-items-center gap-4">
                    <div className="nav__btns d-flex align-items-center gap-4">

                        {
                            user ? (
                                <>
                                    <h5 className='mb-0'>{user?.data.username}</h5>
                                    <Button className='btn btn__dark' onClick={logout}>Logout</Button>
                                </>
                            ) : (
                                <>
                                    <Button className='btn secondary__btn'>
                                        <Link to={"/login"}>Login</Link>
                                    </Button>
                                    <Button className='btn primary__btn'>
                                        <Link to={"/register"}>Register</Link>
                                    </Button>
                                </>
                            )
                        }
                        
                    </div>

                    {
                        
                        <span className='mobile-menu' onClick={toggleMenu}>
                            <i className='ri-menu-line'></i>
                        </span>
                    }
                </div>
            </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header
