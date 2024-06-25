import React, { useContext, useRef } from 'react'
import classes from './auth.module.css'
import axios from '../../axiosConfig'
import { signState } from '../Context/Context'

function Register() {
 
  const firstNameDom = useRef(null)
  const lastNameDom = useRef(null)
  const passwordDom = useRef(null)
  const userNameDom = useRef(null)
  const emailDom = useRef(null)
  const {setNewUser}=useContext(signState)

  const handleRegistration =async(e)=>{
     e.preventDefault()
     const emailValue = emailDom.current.value;
     const firstNameValue = firstNameDom.current.value;
     const lastNameValue =lastNameDom.current.value;
     const passwordValue = passwordDom.current.value;
     const userNameValue = userNameDom.current.value;
     

     if(!emailValue || !firstNameValue || !lastNameValue || !passwordValue || !userNameValue){
          alert('please provide all require information to register')
          return ;
     }

     try {
       const info =   await axios.post('/users/register',{
              email:emailValue,
              password:passwordValue,
              firstname:firstNameValue,
              lastname:lastNameValue,
              username:userNameValue
         })
          alert(info.data.msg)
         console.log(info.data.msg)

         return info
     } catch (error) {
         alert(error.message)
        console.log(error)
        return error;
     }
  }
  return (

    <div className={classes.register_container}>
        
        <form action="" onSubmit={handleRegistration}>
            <div className={classes.join}>Join the network</div>
            <div className={classes.have_Account}>Already have an account ? <span onClick={()=>setNewUser(true)}> Sign In</span></div>
              <div>
                   <input type="email" name="" id="" placeholder='email'  ref={emailDom}/>
              </div>

              <div className={classes.names}>
                    <div className={classes.firstname} >
                         <input type="text" name="" id="" placeholder='First Name' ref={firstNameDom}/>
                    </div>

                    <div>
                        <input type="text" name="" id="" placeholder='Last Name' ref={lastNameDom} />
                    </div>
              </div>


              <div>
                       <input type="text" name="" id=""  placeholder='Username' ref={userNameDom} />
              </div>

              <div>
                    <input type="password" name="" id=""  placeholder='password' ref={passwordDom}/>
              </div>

              <div>
                 <button>Agree and Join</button>
              </div>

              <div><em>I agree to the Privacy Policy and terms of service </em></div>

              <div onClick={()=>setNewUser(true)} className={classes.have_Account}><span>Already have an account ?</span></div>

          
        </form>

    </div>
  )
}

export default Register