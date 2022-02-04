import cv from "./JuanCv.png"
import a from "./CssModules/About.module.css"
import { Link } from "react-router-dom"
export default function Cv(){
    return <div className={a.box}>
        <div><Link to="/AboutMe" className={a.Back}><h2>🢀Back</h2></Link></div>
        <div >
       <img src={cv} alt="Espere unos minutos"  className={a.cv} />
       </div>
       <div><Link to="/AboutMe" className={a.Back}><h2>🢀Back</h2></Link></div>
    </div>
}