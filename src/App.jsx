import { Outlet, Route, Routes, useNavigate } from "react-router-dom";

import { createContext, useEffect, useState } from "react";
import axios from "./axiosConfig";
import Auth from "./Components/Authentication/Auth";
import Landing from "./Components/Landing/Landing";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import Ask from "./Components/Ask/Ask";
import Detail from "./Components/Detail/Detail";
export const AppState = createContext();

function App() {
  const [user, setuser] = useState({});
  const token = localStorage.getItem("token");
  const navigate = useNavigate(); // Correct usage of useNavigate

  async function checkuser() {
    try {
      const { data } = await axios.get("/users/check", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setuser(data);
      if (!data) {
        navigate("/");
      }
    } catch (error) {
      setuser(error.response.data);
      navigate("/");
      console.log(error.response); // Use the navigate function here
    }
  }
  useEffect(() => {
    checkuser();
  }, []);

  return (
    <AppState.Provider value={{ user, setuser }}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header /> <Outlet />
              <Footer />
            </>
          }
        >
          <Route path="/" element={<Auth />} />
          <Route path="home" element={<Landing />} />
          <Route path="home/:questionid" element={<Detail />} />
          <Route path="ask" element={<Ask />} />
        </Route>
      </Routes>
    </AppState.Provider>
  );
}

export default App;
