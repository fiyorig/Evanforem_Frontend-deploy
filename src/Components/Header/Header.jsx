import React, { useContext } from 'react'
import classes from './header.module.css'
import Logo from '../Img/B_Logo.png'
import { useNavigate,Link } from 'react-router-dom'
import { AppState } from '../../App'
import { CiMenuFries } from "react-icons/ci";

function Header() {
    const navigate = useNavigate()
   const{user,setuser}= useContext(AppState)
console.log(user)
   const Logout =()=>{
       localStorage.removeItem('token')
       setuser({})
       navigate('/')
       window.location.reload()
   }
  return (
    <div className={classes.header_container}>
           <div className={classes.header_inner_container}>
                 <div className={classes.logo_container}><img src={Logo} alt="" /></div>
                 <div className={classes.menu}><CiMenuFries size={45} /></div>
                 <div className={classes.header_links}>
                      <div onClick={()=>navigate('/home')}>Home</div>
                      <div>How it works</div>
                      {/* {
                        user || Object.keys(user).length !== 0 ?(
                          <button onClick={Logout}>signout</button>

                        ):( <button  >signin</button>)
                      } */}
                     {!user || Object.keys(user).length === 0 ? ( <Link to="/"> <button>Sign In</button> </Link> ) : ( <Link to="/"> <button onClick={Logout}>Log Out</button> </Link> )}
                     
                 </div>
           </div>
    </div>
  )
}

export default Header