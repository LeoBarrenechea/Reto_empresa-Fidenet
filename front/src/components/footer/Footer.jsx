import { makeStyles, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import logoF from '../../iconos-smartketing/f-logo.svg';

const useStyle = makeStyles(theme => ({
    footer: {
        marginTop: theme.spacing(10),
        backgroundColor: '#181A1E',
        width: '100%',
        flexWrap: 'wrap',
    },

    typFooter: {
        margin: theme.spacing(10, 5),
        paddingBottom: theme.spacing(5),
        display: 'flex',
        color: '#fff',
        justifyContent: 'space-between',
    },

    img: {
        /* transform: 'scale(1)', */
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: theme.spacing(30),
    },

    svg:{
        width: '28%',
    }
}));

export default function Footer()
{
    const classes = useStyle();
    const navigate = useNavigate();

    return (
        <footer className={classes.footer}>
            <div className={classes.img}>
                    <img onClick={() => navigate ('/')} className={classes.svg} src={logoF}/>
            </div>
            <div className={classes.typFooter}>
                <Typography>©Pablo, Jorge y Leonardo</Typography>
                <Typography>Reto empresa para Fidenet</Typography>
            </div>
        </footer>
    )
}