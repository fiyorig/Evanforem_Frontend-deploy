import React, { useEffect, useRef, useState } from 'react'
import classes from './detail.module.css'
import { CgProfile } from "react-icons/cg";
import {Link, useNavigate, useParams} from 'react-router-dom'
import axios from '../../axiosConfig';


function Detail() {
  const navigate = useNavigate()
  const {questionid} = useParams()
  const token = localStorage.getItem('token')
  const [titleandDes, setTitleandDesc] = useState({})
  const [answers,setAnswers]=useState([])
  const answerDom = useRef(null)

  const fetchTitleandDescription = async()=>{
        
  try {

    const result = await axios.get(`/questions//tileanddescription/${questionid}`,{
      headers:{
        Authorization:'Bearer ' + token
      }
    })

    console.log(result.data[0])
    setTitleandDesc(result.data[0])
    
  } catch (error) {
     console.log(error)
  }
  }

  const fetchAnswers = async() =>{

    try {

      const result = await axios.get(`/answers/${questionid}`,{
        headers:{
          Authorization:'Bearer ' + token
        }
        
      })

      console.log(result.data)
      setAnswers(result.data)
      
    } catch (error) {
       console.log(error)
    }
  }

  const postAnswer =async(e)=>{
    e.preventDefault()

    const answervalue = answerDom.current.value;

    if(!answervalue){
      alert('please insert answer to post ')
      return ;
    
    }

    try {

      await axios.post(`/answers/${questionid}`,{
        answer:answervalue
      },{
        headers:{
          Authorization:'Bearer ' + token
        }
      })

      alert('post answer successfully')
      window.location.reload()
      
    } catch (error) {
      console.log(error)
    }

    
  }

  useEffect(()=>{
    fetchTitleandDescription()
    fetchAnswers()
  },[])

  console.log(titleandDes,answers)


  return (
    <div className={classes.detail_container}>

      <div className={classes.description_container}>
                    
                  <div>Question</div>
                  <div className={classes.title}>{titleandDes.title}</div>
                  <div>{titleandDes.description}</div>
      </div>

      <div className={classes.answer_from_container}>
         Answer From the community
      </div>

      {
        answers.map((ans, i)=>(
          <div  key={i} className={classes.answer_container}>
              <div className={classes.username}>
                    <CgProfile size={36} />
                  <div>{ans.username} </div>
              </div>

              <div>{ans.answer}</div>
          </div>
        ))
      }

      <div className={classes.form_container}>
              <div className={classes.top_question}>
                  <div> Answer the Top Question</div>
                  <div onClick={()=>navigate('/home')}>Go to Question page</div>
              </div>

              <form action="" onSubmit={postAnswer}>
                    <div>
                          <textarea name="" id="" placeholder='Your Answer' ref={answerDom}></textarea>
                    </div>

                    <div>
                        <button>Post Answer</button>
                    </div>
              </form>

      </div>



    </div>
  )
}

export default Detail