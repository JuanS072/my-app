import React from "react";
// import { Link } from "react-router-dom";
import img from "./juan.png"
import n from "./CssModules/Initial.module.css"
import c from "./CssModules/Contact.module.css"

import HomeMe from "./HomeMe"
export default function Initial() {
  return (
    <div className={c.imgBackground}>
      <HomeMe/>
      <div className={n.fleximg}> 
      <img src={img} alt="Espere unos minutos"  className={n.img} />
      </div>

      <div className={n.name}>Juan Carlos Sequeira</div>
    </div>
  );
}
