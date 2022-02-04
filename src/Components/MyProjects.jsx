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
              <iframe className={p.img} src="https://www.youtube.com/embed/ID4zMVbOVNc" 
              title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
               encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className={p.cardbackground}>
              <h2>VideoGames Web</h2>
              <h3>• Aplicación móvil - desarrollada como parte de nuestro proyecto Individual en Henry,
                Curso de programacion con mas de 800hs de codigo en 4 meses.
              </h3>
              <h3>  • 𝗧𝗲𝗰𝗻𝗼𝗹𝗼𝗴𝗶𝗮𝘀 𝘂𝘁𝗶𝗹𝗶𝘇𝗮𝗱𝗮𝘀 𝗽𝗮𝗿𝗮 𝗰𝗼𝗻𝘀𝘁𝗿𝘂𝗶𝗿𝗹𝗮:
              🔸 𝗕𝗮𝘀𝗲 𝗱𝗲 𝗱𝗮𝘁𝗼𝘀: PostgreSQL y Sequelize
              🔸 𝗕𝗮𝗰𝗸𝗲𝗻𝗱: NodeJs y Express
              🔸 𝗙𝗿𝗼𝗻𝘁𝗲𝗻𝗱: React, Redux y CSS</h3>
              <h3>• 𝗖𝘂𝗲𝗻𝘁𝗮 𝗰𝗼𝗻 𝗹𝗮𝘀 𝘀𝗶𝗴𝘂𝗶𝗲𝗻𝘁𝗲𝘀 𝗳𝘂𝗻𝗰𝗶𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱𝗲𝘀:</h3>
              <h4>• Consistió en realizar una SPA con las siguiente funcionalidades: 
              🔸 Ver el listado de videojuegos, 15 por página.
              🔸Ordenar alfabéticamente, por rating y de forma asc. y desc.
              🔸 Filtrar por genero, existente y por creadas.
              🔸 Crear nuevos videojuegos mediante un formulario. controlado y asignarla a varios géneros.
              🔸 Ver detalle del videojuego seleccionado.
              🔸 Buscar por nombre del videojuego.
              🔸 Paginado dinámico.
              </h4>
              </div>
        </div>
    </div> 
    </div>
}