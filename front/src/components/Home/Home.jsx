import mapa from '../images/mapa.jpg';
import './Home.css';
import circuloData from '../images/circulodata.jpg';
import fotoMovil from '../images/iphoneversion.PNG';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from '../Header/Header';
import sunburstApp from '../images/sunburstApp.PNG'
import wordCloudApp from '../images/wordCloudApp.PNG'
import sentimientosApp from '../images/sentimientosApp.PNG'
import mapaApp from '../images/mapaApp.PNG'
import sentimientosMapaApp from '../images/sentimientosMapaApp.PNG'
import usuariosApp from '../images/usuariosApp.PNG'
import logoHtml from '../images/html5-logo.jpg'
import logoJs from '../images/javascript-logo.jpg'
import logoCss from '../images/css3-logo.jpg'
import logoD3js from '../images/d3js-logo.png'
import logoReact from '../images/react-logo.png'
import logoMaterialui from '../images/materialui-logo.png'
import logoNestjs from '../images/nestjs-logo.png'
import logoMongodb from '../images/mongodb-logo.png'
import logoAws from '../images/AWS-logo.png'
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    contact: {
        padding: theme.spacing(0, 0, 1, 0),
    }
}));

export default function Home() {
    const classes = useStyles();

    AOS.init({ duration: 900 })


    return (
        <>
            <Header />
            <div className="homePage">
                <div className="fotoCabecera">
                    <div className="displayContainer" >
                        <h4 className="eslogan" data-aos='fade-right'>Análisis de datos de redes sociales en la palma de tu mano</h4>
                        <h2 className="somosSmartketing" data-aos='fade-right'>Somos Smartketing</h2>
                        <div className="displayTextBox" data-aos='fade-right'>
                            <h2 className="displayText1">Somos </h2>
                            <ul className="displayText2">
                                <li>innovación</li>
                                <li>rapidez</li>
                                <li>fiabilidad</li>
                            </ul>
                        </div>
                        <h2 className="eslogan" data-aos='fade-right'>Tu aliado digital</h2>
                        <h2 className="title" data-aos='fade-right'>¡Bienvenid@ a Smartketing BETA!</h2>
                    </div>
                </div>

                <div className="primeraFoto" >
                    <img src={circuloData} alt='foto cabecera'></img>
                </div>

                <div className="containerQuestion" data-aos='fade-down'>
                    <h1 className="textQuestion" data-aos='fade-down'>¿Te gustaría tener el acceso a lo que opina la gente en...</h1>
                    <div className="containerRRSS">
                        <h1 data-aos='fade-down'>Twitter</h1>
                        <h1 data-aos='fade-down'>Instagram</h1>
                        <h1 data-aos='fade-down'>Facebook</h1>
                        <h1 data-aos='fade-down'>YouTube</h1>
                    </div>
                    <h1 className="textQuestion" data-aos='fade-down'>...en la palma de tu mano?</h1>
                    <div className="textQuestionEmpty"></div>
                </div>

                <div className="gradientBox">
                    {/* DIV VACIO PARA EL DEGRADADO */}
                </div>

                <div className="containerResponse" data-aos='fade-up'>
                    <img src={mapa} alt='persona mirando la pantalla'></img>
                </div>

                <div className="containerResponse">
                    <h1 data-aos='flip-down'>Con Smartketing tienes eso... ¡y mucho más!</h1>
                </div>

                <div id="webInfo" className="webInfo">
                    <div className="webInfoBox" data-aos='flip-right'>
                        <h1 className="infoBoxTitle">¿Qué es Smartketing?</h1>
                        <div className="infoBoxRow">
                            <div className="smartketingText">
                                <h2>Smartketing App</h2>
                                <p>
                                    Smartketing es una herramienta que muestra mediante el análisis de datos, la repercusión de una palabra en las
                                    redes sociales desglosados por sentimientos, país, red social, etc.
                                </p>
                                <h2>Búsqueda de palabras</h2>
                                <p>
                                    Podrás buscar cualquier palabra que te interese y nosotros haremos por tí todo el trabajo de busqueda relacionado con esa palabra.
                                </p>
                                <h2>Un gran aliado</h2>
                                <p>
                                    La herramienta perfecta para empresas que necesitan saber que es lo que opina la gente sobre un determinado tema y así poder ofrecer un servicio acorde a los intereses de la sociedad.
                                </p>
                            </div>
                            <div className="movilFoto">
                                <img className="fotoMovil" src={fotoMovil} alt='fotoMovil'></img>

                            </div>
                        </div>

                    </div>


                    <div className="webInfoBox" data-aos='flip-right'>
                        <h1 className="infoBoxTitle">¿Qué datos se pueden visualizar?</h1>
                        <div className="datosText">
                        <p>
                            Dentro de la App dispondremos de diversos gráficos que nos proporcionaran información sobre las palabras que busquemos.
                        </p>

                        </div>
                        <div className="infoBoxRow">

                            <ul className="listaGraficos">
                                <li>✓  Nube de palabras con las más usadas y color según sentimiento asociado</li>
                                <li>✓  Hashtags más usados y los relacionados</li>
                                <li>✓  Variación de los sentimientos sobre el tema según un rango de tiempo</li>
                                <li>✓  Mapa con zonas calientes con filtro por fechas y zoom a áreas</li>
                                <li>✓  Cuentas de usuarios que han escrito sobre el tema y su relevancia</li>
                            </ul>
                            <div className="sunburstFoto">
                                
                                <img src={wordCloudApp} alt='foto wordCloud'></img>

                            </div>
                        </div>
                        <div className="appFotos" >
                        <img src={sunburstApp} alt='foto sunburst'></img>
                            <img src={sentimientosMapaApp} alt='foto sentimientosMapa'></img>
                            <img src={usuariosApp} alt='foto usuarios'></img>
                            {/* <img src={sentimientosApp} alt='foto sentimientos'></img>
                            <img src={mapaApp} alt='foto mapa'></img> */}
                        </div>
                    </div>

                    <div className="webInfoBox" data-aos='flip-right'>
                        <h1 className="infoBoxTitle">¿Qué tecnologias usa?</h1>
                        <div className="logoBox">


                            <div className="frontEndBox">
                                <h2>FrontEnd</h2>
                                <div className="frontEndLogos">
                                    <img className="logoHtml" src={logoHtml} alt='HTML logo'></img>
                                    <img className="logoJs" src={logoJs} alt='JS logo'></img>
                                    <img className="logoCss" src={logoCss} alt='CSS logo'></img>
                                </div>
                                <div className="backEndLogos">
                                    <img className="logoReact" src={logoReact} alt='React logo'></img>
                                    <img className="logoD3js" src={logoD3js} alt='D3JS logo'></img>
                                    <img className="logoMaterialui" src={logoMaterialui} alt='Material-UI logo'></img>
                                </div>
                            </div>

                            <div className="backEndBox">
                                <h2>BackEnd</h2>
                                <div className="backEndLogos">
                                    <img className="logoNestjs" src={logoNestjs} alt='NestJS logo'></img>
                                    <img className="logoMongodb" src={logoMongodb} alt='Mongo DB logo'></img>
                                    <img className="logoAws" src={logoAws} alt='AWS logo'></img>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="webInfoBox" data-aos='flip-right'>
                        <h1 className="infoBoxTitle">¿Cómo funciona?</h1>
                        <p>
                            Disponemos de una IA que recoge toda la información posible que encuentra en redes sociales y la almacena en nuestra base de datos de AWS. Esto facilita el almacenaje de la información gracias a la automatización que hemos hecho para su recopilación.
                        </p>

                        <p>
                            Tras esto, nos encargamos de filtrar los datos en función de las necesidades y proporcionamos las estadísticas necesarias mediante gráficos interactivos.
                        </p>
                    </div>
                </div>



            </div>

            <div className="finalBox">
                <h1>Suscríbete</h1>
                <h2 className={classes.contact} id='contact'>Contacta con nosotros</h2>
            </div>

        </>
    )
}