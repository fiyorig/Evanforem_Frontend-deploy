import React from "react";
import classes from "./footer.module.css";
import Logo from '../Img/W_Logo.png'
import { Link } from "react-router-dom";

import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { LuYoutube } from "react-icons/lu";

function Footer() {
  return (
    <div className={classes.footer_outer_container}>
      <div className={classes.footer_inner_container}>

        <div>
            <div><img src={Logo} alt="" /></div>
            <div className={classes.social_media_links}>
                <a href=""><CiFacebook  size={40} color="white"/></a>
                <a href=""><FaInstagram size={40}  color="white"/></a>
                <a href=""><LuYoutube  size={40} color="white"/></a>
            </div>
        </div>

        <div>
          <ul>
            <h4>Useful Link</h4>
            <li>
              <Link to="#header">How it works</Link>
            </li>
            <li>
              <Link to="">Terms of Service</Link>
            </li>
            <li>
              <Link to="">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div className={classes.contact_us}>
          <ul>
            <h4>Contact info</h4>
            <li>Evangadi Networks</li>
            <li>support@evangadi.com</li>
            <li>+1-202-386-2702</li>
          </ul>
        </div>


      </div>
    </div>
  );
}

export default Footer;
