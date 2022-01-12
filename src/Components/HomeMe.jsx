import React from "react";
import { Link } from 'react-router-dom';
import n from "./CssModules/Initial.module.css"

export default function HomeMe(){
    return(<nav className={n.navbar}>
      <Link to="/" className={n.PortLink}>
          <div>Portfolio</div>
        </Link>
        <div className={n.BotonsLinks}>
        <Link to="/AboutMe" className={n.BotonLink}>
          <div>About Me</div>
        </Link>
        <Link to="/ContactMe" className={n.BotonLink}>
          <div>Contact Me</div>
        </Link>
        <Link to="/MyProjects" className={n.BotonLink}>
          <div>MyProjects</div>
        </Link>
        </div>
      </nav>
    )}
