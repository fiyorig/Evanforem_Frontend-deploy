import React, { useContext, useRef } from "react";
import classes from "./auth.module.css";
import axios from "../../axiosConfig";
// import { signState } from "../Context/Context";
import { useNavigate } from "react-router-dom";

function Login({setIsLogin}) {
  const emailref = useRef(null);
  const passwordref = useRef(null);
  // const { isnewUser, setNewUser } = useContext(signState);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const emailValue = emailref.current.value;
    const passwordValue = passwordref.current.value;

    if (!emailValue || !passwordValue) {
      alert("please provide all required info to log in");
      return;
    }

    try {
      const { data } = await axios.post("/users/login", {
        email: emailValue,
        password: passwordValue,
      });

      console.log(data);
      localStorage.setItem("token", data.token);
      alert("user successfully log in");
      navigate("/home");
      // window.location.reload()
     
    
    } catch (error) {
      alert(error.message);
      console.log(error.message);
      return error.message;
    }
  };
  return (
    <div className={classes.login_container}>
      <form action="" onSubmit={handleLogin}>
        <div>
          <div className={classes.login}>Log into your Account</div>
          <div className={classes.new_account}>
            Don't have an account{" "}
            <span onClick={() => setIsLogin(false)}>Create an account</span>
          </div>
        </div>

        <div>
          <input type="email" ref={emailref} placeholder="email" />
        </div>

        <div>
          <input type="password" ref={passwordref} placeholder="Password" />
        </div>

        <button type="submit">Login</button>
        <div onClick={() => setIsLogin(false)} className={classes.new_account}>
          <span>Create an account ?</span>
        </div>
      </form>
    </div>
  );
}

export default Login;
