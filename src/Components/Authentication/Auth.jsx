import React, { useContext, useState } from 'react'
import classes from './auth.module.css'
import Login from './Login'
import Register from './Register'
// import  { signState } from '../Context/Context'

function Auth() {

//  const{isnewuser,setNewUser} = useContext(signState)
const [isLogin, setIsLogin] = useState(true);
  return (
        <div className={classes.auth_container}>

          <div className={classes.auth_inner_container}>
                
          {isLogin ? <Login setIsLogin={setIsLogin} /> : <Register setIsLogin={setIsLogin} />}
                {/* {
                  isnewuser ? <Login />:<Register />
                } */}


                <div className={classes.abt_container}>
                    <div className={classes.title}>about</div>
                    <div className={classes.heading}>Evangadi Networks Q & A</div>

                    <div className={classes.paragraph_container}>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat molestias nam culpa cum odit vitae repellendus deleniti est, ratione maxime error perferendis voluptas, laborum eum assumenda ad labore, atque ut!</p>

                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque officia inventore eaque eum illo pariatur nisi ipsam eligendi, id molestias voluptatem, distinctio consectetur necessitatibus vero. Ea repudiandae modi laudantium necessitatibus!</p>


                       <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia rem eligendi debitis ut qui amet consequuntur atque aliquid voluptas, veniam ratione. Fugit qui a voluptates neque officia, veritatis voluptas odit?
                       </p>
                    </div>
                </div>


                </div>
        </div>
  )
}

export default Auth