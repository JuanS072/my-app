import React from "react";
import a from "./CssModules/About.module.css"
import n from "./CssModules/Initial.module.css"
// import { Link } from "react-router-dom";
import img from "./Photo.png"
import HomeMe from "./HomeMe"
export default function AboutMe(){
    return <div className={n.imgBackground}>
    <div className={a.box}>
        <HomeMe/>
        <div className={a.Boxcard}>
         <div className={a.fleximg}> 
        <img src={img} alt="Espere unos minutos"  className={a.img} />
        </div> 
        <div className={a.name}>Juan Carlos Sequeira</div>
        <div className={a.name}>Juan Carlos Sequeira</div>
        <div className={a.name}>Juan Carlos Sequeira</div>
        <div className={a.name}>Juan Carlos Sequeira</div>
        <div className={a.name}>Juan Carlos Sequeira</div>
        <div className={a.name}>Juan Carlos Sequeira</div>
        <div className={a.name}>Juan Carlos Sequeira</div>
        <div className={a.name}>Juan Carlos Sequeira</div>
        <div className={a.name}>Juan Carlos Sequeira</div>
        <div className={a.name}>Juan Carlos Sequeira</div>
        <div className={a.name}>Juan Carlos Sequeira</div>
        </div>
      </div>
      </div>
}