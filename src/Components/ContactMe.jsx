import React from "react";
import HomeMe from "./HomeMe"
import c from "./CssModules/Contact.module.css"

export default function ContactMe(){
    return<div className={c.imgBackground}>
    <div className={c.box}>
        <HomeMe/>
            <div className={c.Boxcard}>
            <h1>Contactame al :</h1>
            <div>
            <h2 className={c.lin}>Linkedin:</h2>
            <a href="https://www.linkedin.com/in/juansequeira/" target="_blank" className={c.linkedin}> Juan Carlos Sequeira
            <img alt="LinkedIn" width="25px" src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" align="center"></img></a>
            </div>
            <div>
            <h2 className={c.gm}>Gmail:</h2>
            <a href="https://www.juancarlossequeira07@gmail.com" target="_blank" className={c.gmail}>juancarlossequeira07@gmail.com
            <img alt="Gmail" width="25px" src="https://image.flaticon.com/icons/png/128/281/281786.png" align="center" ></img></a> 
            </div>
            <div>
            <h2 className={c.git}>GitHub:</h2>
            <a href="https://github.com/JuanS072" target="_blank" className={c.gmail}>JuanS072
            <img alt="GitHub" width="25px" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" align="center" ></img></a> 
            </div>
            </div>
    </div>
    </div>
}