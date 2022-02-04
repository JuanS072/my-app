import React from "react";
import { Link } from "react-router-dom";
import a from "./CssModules/About.module.css"
import n from "./CssModules/Initial.module.css"
// import { Link } from "react-router-dom";

import HomeMe from "./HomeMe"
import img from "./juan.png"
import cv from "./JuanCv.png"
import titulo from "./titulo.png"

export default function AboutMe(){
    return <div className={n.imgBackground}>
    <div className={a.box}>
        <HomeMe/>
        <div className={a.Boxcard}>
          <h1>Full Stack Web Developer</h1>
         <div className={a.fleximg}> 
        <img src={img} alt="Espere unos minutos"  className={a.img} />
        </div> 
        <h2 className={a.name}>Juan Carlos Sequeira</h2>
        <h2 className={a.name}>Edad: 19 años</h2>
        <h2 className={a.name}>Pais: Argentina</h2>
        <h3 className={a.nameTec}>Soy Graduado del curso soy Henry y la mayoría de mi tiempo me encuentro aprendiendo y estudiando conocimientos en el desarrollo de paginas web y aplicaciones web, Ahora mismo me encuentro aprendiendo y adquiriendo conocimientos sobre el desarrollo en Salesforce.</h3>
        </div>
        <h1>----------------</h1>
        <h1>Tecnologias :</h1>
        <div className={a.Boxcard}>
         {/* <div className={a.fleximg}> 
        <img src={img} alt="Espere unos minutos"  className={a.img} />
        </div>  */}
          <h2 className={a.name}>°Conocimientos en :</h2>
          <h4 className={a.nameTec}>*Mongoose</h4>
          <h4 className={a.nameTec}>*MongoDB</h4>
          <h4 className={a.nameTec}>*Node js</h4>
          <h4 className={a.nameTec}>*Javascript</h4>
           <h4 className={a.nameTec}>*React js</h4>
           <h4 className={a.nameTec}>*React Native</h4>
           <h4 className={a.nameTec}>*Redux</h4>
           <h4 className={a.nameTec}>*MySQL</h4>
           <h4 className={a.nameTec}>*Postman</h4>
           <h4 className={a.nameTec}>*Git</h4>
           <h4 className={a.nameTec}>*Next js</h4>
           <h4 className={a.nameTec}>*CSS</h4>
           <h4 className={a.nameTec}>*HTML</h4>
           <h4 className={a.nameTec}>* Web Services APIs</h4>
           <h4 className={a.nameTec}>*Express</h4>
           <h4 className={a.nameTec}>*SQL</h4>
           <h2 className={a.name}>°Buen manejo de :</h2>
           <h4 className={a.nameTec}>*Javascript</h4>
           <h4 className={a.nameTec}>*React js</h4>
           <h4 className={a.nameTec}>*CSS</h4>
           <h4 className={a.nameTec}>*HTML</h4>
        </div>
        <h1>----------------</h1>
        <h1>Curriculum :</h1>
        <div className={a.Boxcard}>
        <Link to="/CV" className={n.BotonLink}>
         <div className={a.fleximg}> 
        <img src={cv} alt="Espere unos minutos"  className={a.cv1} />
        </div> 
        </Link>
        </div>
        <h1>----------------</h1>
        <h1>Titulo :</h1>
        <div className={a.Boxcard}>
         <div className={a.fleximg}> 
        <img src={titulo} alt="Espere unos minutos"  className={a.titulo} />
        </div> 
        </div>
      </div>
      </div>
}