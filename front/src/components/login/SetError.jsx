import './Login.css'
import { makeStyles, Paper } from "@material-ui/core"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const styles = makeStyles(theme => ({
    noUserMsg: {
        textAlign: 'center',
        borderRadius: '10px',
        marginBottom: theme.spacing(2),
        padding: theme.spacing(2),
        background: 'linear-gradient(#FFC12F, #FF982F)'
    },

    letters: {
        fontSize: '13px',
    },

    createAcc: {
        borderBottom: '1px solid',
        cursor: 'pointer',
    }

}));

export default function SetError({data})
{
    const classes = styles();
    const navigate = useNavigate();

    if (data.access_token === undefined && data.msg)
    {
        if (data.msg === 'no username')
        {
            return (
                <Paper className={classes.noUserMsg}>
                    <p className={classes.letters}> no se ha encontrado ninguna cuenta con este nombre de usuario, intentalo de nuevo o <a className={classes.createAcc} onClick={() => navigate('/register')}>crea una cuenta</a></p>
                </Paper>
            )
        }
        else
        {
            return (
                <Paper className={classes.noUserMsg}>
                    <p color='error' className={classes.letters}>Contraseña incorrecta, intentalo de nuevo</p>
                </Paper>
            )
        }
    }
    else
        return (
            <></>
        )
}