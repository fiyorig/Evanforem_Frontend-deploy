import React, { useRef } from 'react'
import classes from './ask.module.css'
import { useNavigate } from 'react-router-dom'
import axios from '../../axiosConfig'

function Ask() {
  const navigate = useNavigate()
  const titleDom = useRef(null)
  const descriptionDom = useRef(null)
  const token = localStorage.getItem('token')

  const handlePostQuestion = async(e)=>{
    e.preventDefault()

    const titleValue = titleDom.current.value;
    const descriptionValue = descriptionDom.current.value;

    if(!titleValue || !descriptionValue){
      alert('please provide all required information to post a question')
      return ;
    }

    try {

      await axios.post('/questions/post-question',
        {
        title:titleValue,
        description:descriptionValue
      },
      {
        headers:{
          Authorization:'Bearer ' + token
        }
      })

      alert('question posted successfully')
      navigate('/home')
      
    } catch (error) {
       alert('something went wrong')
       return error;
    }



  }

  return (
    <div className={classes.ask_outer_container}>
        <div className={classes.ask_inner_container}>


               <div className={classes.instruction}>
                   <div className={classes.instruction_title}> Steps to write a good question</div>
                   <div>
                    <ul>
                            <li>Summarize your question in one line title</li>
                            <li>Describe your question in detail</li>
                            <li>Describe what you tried and what you expected to happen</li>
                            <li>Review your question and post it to the site</li>
                    </ul>
                   </div>
               </div>

               <div className={classes.form_container}>

                      <div className={classes.goto_container}>
                          <div> Ask Public Question</div>
                          <div onClick={()=>navigate('/home')}>Go to question page</div>
                      </div>


                        <form action="" onSubmit={handlePostQuestion}>

                              <div>
                                <input type="text" name="" id={classes.input} placeholder='title' ref={titleDom}/>
                              </div>

                              <div>
                                    <textarea name="" id="" placeholder='Question Description' ref={descriptionDom}></textarea>
                              </div>

                              <div>
                                  <button>Post Question</button>
                              </div>
                        </form>

                 </div>
        </div>
    </div>
  )
}

export default Ask