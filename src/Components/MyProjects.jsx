import React from "react";
import p from "./CssModules/Initial.module.css"
import c from "./CssModules/Contact.module.css"

import HomeMe from "./HomeMe"
export default function MyProjects(){
    return<div className={c.imgBackground}>
        <div>
        <HomeMe/>
        <div>Holaaa</div>
    </div>
    </div>
}