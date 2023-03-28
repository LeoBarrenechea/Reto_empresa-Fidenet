import mapa from '../images/mapa.jpg';
import './Home.css';
import circuloData from '../images/circulodata.jpg';
import fotoMovil from '../images/iphoneversion.PNG';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import Header from '../Header/Header';


export default function Home() {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, []);

    return (
        <>
            <Header/>
        <div className="homePage">
            {/* <h2>hola, estás en Home</h2> */}
            {/* <img src={foto2} alt='foto2'></img> */}
            <div className="fotoCabecera">
                {/* <img src={circuloData} alt='foto1'></img> */}

                <div className="displayContainer" >
                    <h4 className="eslogan" data-aos='fade-right'>Analisis de datos de redes sociales en la palma de tu mano</h4>
                    <h2 className="somosSmartketing" data-aos='fade-right'>Somos Smartketing</h2>
                    <div className="displayTextBox" data-aos='fade-right'>
                        <h2 className="displayText1">Somos </h2>
                        <ul className="displayText2">
                            <li>innovación</li>
                            <li>rapidez</li>
                            <li>fiabilidad</li>
                            {/* <li><h2>innovación</h2></li>
                            <li><h2>rapidez</h2></li>
                        <li><h2>fiabilidad</h2></li> */}
                        </ul>
                    </div>
                    <h2 className="eslogan" data-aos='fade-right'>Tu aliado digital</h2>
                    <h2 className="title" data-aos='fade-right'>¡Bienvenid@ a Smartketing BETA!</h2>





                </div>
            </div>

            <div className="primeraFoto" >
                <img src={circuloData} alt='foto1'></img>
                
            </div>

            <div className="containerQuestion" data-aos='fade-down'>
                <h1 className="textQuestion" data-aos='fade-down'>¿Te gustaría tener el acceso a lo que opina la gente en...</h1>
                <div className="containerRRSS">
                    <h1 data-aos='fade-down'>Twitter</h1>
                    <h1 data-aos='fade-down'>Facebook</h1>
                    <h1 data-aos='fade-down'>Instagram</h1>
                    <h1 data-aos='fade-down'>YouTube</h1>
                </div>

                <h1 className="textQuestion" data-aos='fade-down'>...en la palma de tu mano?</h1>
            </div>

            <div className="gradientBox">

            </div>

            <div className="containerResponse" data-aos='fade-up'>
                <img src={mapa} alt='foto1'></img>
            </div>

            <div className="containerResponse">
                <h1 data-aos='flip-down'>Con Smartketing tienes eso... ¡y mucho más!</h1>
            </div>
            
            <div id='webInfo' className="webInfo">
                <div className="webInfoBox" data-aos='flip-right'>
                
                    <h1 className="infoBoxTitle">¿Qué es Smartketing?</h1>
                   <div className="infoBoxRow">
                   <p>
                        Smartketing es una herramienta que muestra mediante el análisis de datos la repercusión de una palabra en las
                        redes sociales desglosados por sentimientos, país, red social, etc.
                    </p>
                    <img className="fotoMovil" src={fotoMovil} alt='fotoMovil'></img>
                   </div>
                    

                    
                </div>
                    {/* <div className="divFoto">
                        <img className="fotoMovil" src={fotoMovil} alt='fotoMovil'></img>
                    </div> */}

                <div className="webInfoBox" data-aos='flip-right'>
                    <h1 className="infoBoxTitle">¿Qué datos se pueden visualizar?</h1>
                    <p>
                        Dentro de la App dispondremos de diversos gráficos que nos proporcionaran información sobre las palabras que busquemos.
                    </p>
                    <ul>
                        <li>✓ Nube de palabras con las más usadas y color según sentimiento asociado</li>
                        <li>✓ Mapa con zonas calientes con filtro por fechas y zoom a áreas</li>
                        <li>✓ Hashtags más usados y los relacionados</li>
                        <li>✓ Cuentas de usuarios que han escrito sobre el tema y su relevancia</li>
                        <li>✓ Variación de los sentimientos sobre el tema según un rango de tiempo</li>
                    </ul>
                </div>

                <div className="webInfoBox" data-aos='flip-right'>
                    <h1 className="infoBoxTitle">¿Qué tecnologias usa?</h1>
                    <p>Front basado en:</p>
                    <ul>
                        <li>React</li>
                        <li>Material UI</li>
                        <li>D3.js</li>
                    </ul>
                    <p>Back basado en:</p>
                    <ul>
                        <li>Nest</li>
                        <li>MongoDB</li>
                        <li>BD en AWS</li>
                    </ul>
                </div>

                <div className="webInfoBox" data-aos='flip-right'>
                    <h1 className="infoBoxTitle">¿Cómo funciona?</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa nobis alias accusamus at, nisi repellat vel sunt enim vero earum quis distinctio atque! Unde quos atque, praesentium expedita minus tenetur?
                    </p>
                </div>
            </div>

            <div className="finalBox">
                <h1>Suscríbete</h1>
                <h2 id='contact'>Contacta con nosotros</h2>
            </div>
            {/* 
            <div data-aos='fade-down'>
            <h1>FOOTER</h1>
            <h1>FOOTER</h1>
            <h1>FOOTER</h1>
            <h1>FOOTER</h1>
            <h1>FOOTER</h1>
            
            </div> */}
        </div>
    </>
    )
}