import React, { useContext } from 'react'
import classes from './header.module.css'
import Logo from '../Img/B_Logo.png'
import { useNavigate } from 'react-router-dom'
import { AppState } from '../../App'
import { CiMenuFries } from "react-icons/ci";

function Header() {
    const navigate = useNavigate()
   const{user}= useContext(AppState)
console.log(user)
   const Logout =()=>{
       localStorage.removeItem('token')
       window.location.reload()
       navigate('/')
     
   }
  return (
    <div className={classes.header_container}>
           <div className={classes.header_inner_container}>
                 <div className={classes.logo_container}><img src={Logo} alt="" /></div>
                 <div className={classes.menu}><CiMenuFries size={45} /></div>
                 <div className={classes.header_links}>
                      <div onClick={()=>navigate('/home')}>Home</div>
                      <div>How it works</div>
                      <button onClick={user.msg == "valid user" && Logout}>{user.msg == "valid user"?'Log Out':'Sign In'}</button>
                 </div>
           </div>
    </div>
  )
}

export default Header