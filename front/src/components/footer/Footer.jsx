import { makeStyles, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import logoF from '../../iconos-smartketing/f-logo.svg';
import logoWhite from '../../iconos-smartketing/fidenet-logo-white.svg';

const useStyle = makeStyles(theme => ({
    footer: {
        // marginTop: theme.spacing(10),
        padding: theme.spacing(5, 5, 2,5),
        backgroundColor: '#181A1E',
        width: '100%',
        flexWrap: 'wrap',
    },

    typFooter: {
        // margin: theme.spacing(10, 5),
        marginTop: '50px',
        display: 'flex',
        color: '#fff',
        justifyContent: 'space-between',
    },

    img: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        
    },

    svg:{
        width: '160px',
        
    }
}));

export default function Footer()
{
    const classes = useStyle();
    const navigate = useNavigate();

    return (
        <footer className={classes.footer}>
            <div className={classes.img}>
                    <img onClick={() => navigate ('/')} className={classes.svg} src={logoWhite}/>
            </div>
            <div className={classes.typFooter}>
                <Typography>© Pablo, Jorge y Leonardo</Typography>
                <Typography>Reto empresa para Fidenet</Typography>
            </div>
        </footer>
    )
}