import { makeStyles, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import logoF from '../../iconos-smartketing/f-logo.svg';
import logoWhite from '../../iconos-smartketing/fidenet-logo-white.svg';
import './Footer.css'

const useStyle = makeStyles(theme => ({
    footer: {
        // marginTop: theme.spacing(10),
        padding: theme.spacing(5, 5, 2, 5),
        backgroundColor: '#181A1E',
        width: '100%',
        flexWrap: 'wrap',
    },

    typFooter: {
        // margin: theme.spacing(10, 5),
        marginTop: '80px',
        display: 'flex',
        color: '#fff',
        justifyContent: 'space-between',
    },

    img: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',

    },

    svg: {
        width: '160px',

    }
}));

export default function Footer() {
    const classes = useStyle();
    const navigate = useNavigate();

    return (
        <footer className={classes.footer}>
            <div className={classes.img}>
                <img onClick={() => navigate('/')} className={classes.svg} src={logoWhite} />
            </div>

            <div className="footerInfo">
                <div className="ubicacionInfo">
                    <h5>¿Dónde estamos?</h5>
                    <p>Portuetxe 61, 2ºD</p>
                    <p>Edificio Bonea</p>
                    <p>20018 | Donostia</p>

                </div>
                <div className="contactosInfo">
                    <h5>Contactos</h5>
                    <p>fidenet@fidenet.net</p>
                    <p>943 40 44 41</p>

                </div>

                <div className="rrssInfo">
                    <h5>Redes Sociales</h5>
                    <p>Twitter</p>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>YouTube</p>

                </div>

                <div className="politicaInfo">
                    <h5>Nuestras políticas</h5>
                    <p>Política de empresa</p>
                    <p>Política de privacidad</p>
                    <p>Condiciones de uso</p>

                </div>

                <div className="ayudaInfo">
                    <h5>Ayuda</h5>
                    <p>Preguntas frecuentes</p>
                    <p>Centro de ayuda</p>

                </div>
            </div>
            <div className={classes.typFooter}>
                <Typography>© 2023 Pablo, Jorge, Leonardo</Typography>
                <Typography>Reto de empresa para Fidenet</Typography>
            </div>
        </footer>
    )
}