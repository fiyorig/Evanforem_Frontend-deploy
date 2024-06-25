import React, { useContext, useEffect, useState } from 'react'
import classes from './landing.module.css'
import { CgProfile } from "react-icons/cg";
import axios from '../../axiosConfig'
import {Link, useNavigate} from 'react-router-dom'
import { AppState } from '../../App';


function Landing() {

  const token = localStorage.getItem('token')
  const [allquestion, setAllQuestion] = useState([])
  const {user} = useContext(AppState)
  const navigate = useNavigate()

  async function fetchQuestion (){
    try {
      const questions = await axios.get('/questions/all-questions',{
        headers:{
          Authorization:'Bearer ' + token
        }
      })

      console.log(questions.data)
      setAllQuestion(questions.data)
    } catch (error) {
       console.log(error)
    }
  }


  useEffect(()=>{
      fetchQuestion()
  },[])


  return (
    <div className={classes.landing_outer_container}>
         <div className={classes.landing_inner_container}>
                
                       <div className={classes.asks}>
                           <button onClick={()=>navigate('/ask')}>Ask Question</button>
                           <div className={classes.login_username}>welcome: {user.username}</div>
                       </div>


                       <div className={classes.question}>Question</div>

                       {
                        allquestion.toReversed()?.map((singlequestion, i)=>(
                           <Link to={singlequestion.questionid} key={i} className={classes.singlequestion_container}>
                                 <div className={classes.username}>
                                       <CgProfile size={36} />
                                      <div>{singlequestion.username} </div>
                                </div>

                                  <div>{singlequestion.title}</div>
                            </Link>

                        ))
                       }
                  
         </div>
    </div>
  )
}

export default Landing