import './Login.css';
import { Box, createTheme, FormControl, InputBase, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import Button from '@mui/material/Button';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiCall from '../apiCall/Apicall';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { MyContext } from '../myContext/MyContext';
import SetError from './SetError';
import LoadingButton from '@mui/lab/LoadingButton'


const theme = createTheme({
    palette:{
        main:{
            color:'#FF982F'
        }
    }
})
const useStyles = makeStyles(theme => ({

    login: {
        fontFamily: 'poppins',
        color: '#fff',
        margin: 'auto',
        marginTop: theme.spacing(22),
        padding: theme.spacing(10),
        paddingTop: theme.spacing(13),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: '10px',
        width: '440px',
        background: 'linear-gradient(#181A1E, #6E7072)'
    },

    inputLogin:{
        display: 'flex',
        flexDirection: 'column',
    },

    user:{
        paddingBottom: theme.spacing(1),
        padding: theme.spacing(1, 0, 0, 1),
        marginBottom: theme.spacing(2),
        color:'#FF982F',
        border:'2px solid',
        borderRadius: '10px',
    },

    password: {
        paddingBottom: theme.spacing(1),
        padding: theme.spacing(1, 0, 0, 1),
        marginBottom: theme.spacing(2),
        color:'#FF982F',
        border:'2px solid',
        borderRadius: '10px',
    },

    register: {
        display: 'flex',
        paddingTop: theme.spacing(2),
        opacity: 0.7,
    },

    typ: {
        paddingRight: theme.spacing(1)
    },

    createAcc: {
        borderBottom: '1px solid',
        fontSize: '15px',
        fontWeight: 'normal',
        cursor: 'pointer',
    },

    btnVisibility:{
        margin: theme.spacing(0, 1),
        '&:hover': {color: '#FF982F'},
    }

}));

export default function Login()
{
    if (localStorage.getItem('token'))
    {
        navigate('/search');
    }
    const { data, setData, setIsLoading, isLoading } = useContext(MyContext);
    const classes = useStyles();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});
    const [showPassword, setShowPassword] = useState(false);


  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

    useEffect(() => {
        setUser({
            username,
            password
        })
    }, [username, password])

    async function ClickButton()
    {
        setIsLoading(true);
        const userData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(user)
        }

        await ApiCall({ data, setData }, 'http://localhost:3001/auth/login', userData)
    }
    
    useEffect(() => {
        console.log(isLoading);
        if (data)
        {
            console.log(isLoading);
            if (data.access_token && isLoading)
            {
                console.log(data);
                localStorage.setItem('token', data.access_token);
                navigate('/search');
            }
            setIsLoading(false);
        }
    }, [data, isLoading])

    return (
        <>
            <Paper elevation={3} className={classes.login}>
                <div className={classes.inputLogin}>
                    <SetError data={data}/>
                    <InputBase className={classes.user} value={username} onChange={e => setUsername(e.target.value)}  placeholder='usuario'></InputBase>
                    <InputBase 
                    className={classes.password} 
                    type={showPassword ? 'text' : 'password'}
                    value={password} 
                    onChange={e => setPassword(e.target.value)}  
                    placeholder='contraseña'
                    endAdornment={
                        <InputAdornment className={classes.btnVisibility} position="end">
                          <IconButton
                            className={classes.btnVisibility}
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    ></InputBase>
                </div>
                {!isLoading ? <LoadingButton id='botton-primary' onClick={ClickButton} size='small' variant="text">Login</LoadingButton> : <LoadingButton id='botton-primary' size='small' disabled disableElevation variant="contained">Loading...</LoadingButton>}
                <div className={classes.register}>
                    <Typography className={classes.typ}>¿aun no estas registrado?</Typography>
                    <div className='borderCreate'>
                        <p className={classes.createAcc} onClick={() => navigate('/register')}>Registrate</p>
                    </div>
                </div>
            </Paper>
        </>
    )
}
