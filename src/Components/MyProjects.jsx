import React from "react";
import p from "./CssModules/Projects.module.css"
import i from "./CssModules/Initial.module.css"

import HomeMe from "./HomeMe"
export default function MyProjects(){
    return<div className={i.imgBackground}>
         <div className={p.box}> 
        <HomeMe/>
        <div className={p.Box}>
            <div className={p.cardbackground1}>
            <iframe className={p.img} src="https://www.youtube.com/embed/2WFtAxZe1-w"
             title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
              encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
            </div>
            <div className={p.cardbackground}>
              <h2>Liberfiets App</h2>
              <h3>• Aplicación móvil - desarrollada como parte de nuestro proyecto final - para LiberFiets,
                   una empresa que promueve el uso de bicicletas premiando con puntos por kilómetros recorridos en bicicleta.
                    El usuario puede canjear los puntos ganados por productos en diferentes tiendas.
              </h3>
              <h3>  • Tecnología: React Native, Redux, CSS, Node JS, Express, Mongoose.</h3>
              <h3>• Mi principal contribución al proyecto: fue el desarrollo de las rutas 
                  (referir a la app a un amigo, agregar, aceptar y rechazar solicitudes de amistad, 
                  lista del ranking de los usuarios, etc) el manejo de datos, también como en la parte del front
                   en renderizar y mostrar la información del historial de compras de cada usuario tanto un poco de desarrollo de front-end y back-end.</h3>
              </div>
        </div>
        <div className={p.Box}>
            <div className={p.cardbackground1}>
            <iframe className={p.img} src="https://www.youtube.com/embed/2WFtAxZe1-w"
             title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
              encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
            </div>
            <div className={p.cardbackground}>
              <h2>Liberfiets App</h2>
              <h3>• Aplicación móvil - desarrollada como parte de nuestro proyecto final - para LiberFiets,
                   una empresa que promueve el uso de bicicletas premiando con puntos por kilómetros recorridos en bicicleta.
                    El usuario puede canjear los puntos ganados por productos en diferentes tiendas.
              </h3>
              <h3>  • Tecnología: React Native, Redux, CSS, Node JS, Express, Mongoose.</h3>
              <h3>• Mi principal contribución al proyecto: fue el desarrollo de las rutas 
                  (referir a la app a un amigo, agregar, aceptar y rechazar solicitudes de amistad, 
                  lista del ranking de los usuarios, etc) el manejo de datos, también como en la parte del front
                   en renderizar y mostrar la información del historial de compras de cada usuario tanto un poco de desarrollo de front-end y back-end.</h3>
              </div>
        </div>
    </div> 
    </div>
}