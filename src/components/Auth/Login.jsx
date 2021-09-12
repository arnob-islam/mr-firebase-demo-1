import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link, useHistory } from 'react-router-dom'
// import { Login, SignWithFaceBook, SignWithGoogle, RedirectWithGoogleLogin } from '../../Firebase/Syntex';
import { Login } from '../../Firebase/Syntex';
// import { db } from '../../Firebase/config';

function ErrorAlert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Login_() {
    const classes = useStyles();
    const location = useHistory()

    const [value, setvalue] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''


    })
    const [showAlert, setshowAlert] = React.useState(false);

    const [errorMassage, seterrorMassage] = React.useState('');

    // const [theButtonDisable, setsetTheButtonDisable] = React.useState(false)
    // const [cheackMail, setcheackMail] = React.useState('')
    // const [isUserExeist, setisUserExeist] = React.useState(false)
    // const [goToHome, setgoToHome] = React.useState(false)





    const handleFormValue = (e) => {
        const TheName = e.target.name
        const TheValue = e.target.value
        setvalue({ ...value, [TheName]: TheValue })

    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await Login(value.email, value.password)
            location.push('/')
        } catch (error) {

            if (error.code === 'auth/user-not-found') {
                setshowAlert(true)
                seterrorMassage(`User Dosen't exist`)

            }
            else if (error.code === 'auth/wrong-password') {
                setshowAlert(true)
                seterrorMassage(`Wrong password`)
            }
        }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setshowAlert(false);
    };


    // const loginWithGoogle = async () => {
    //     try {
    //         setsetTheButtonDisable(true)
    //         const res = await RedirectWithGoogleLogin()
    //         console.log(res, 'to see the login');
    //         // setcheackMail(res.user.email)
    //         location.push('/')
    //         // if (cheackMail) {
    //         //     console.log('one stap');
    //         //     if (isUserExeist) {
    //         //         console.log('two stap');

    //         //         return setgoToHome(true)

    //         //         location.push('/')
    //         //         // window.location.href = '/'
    //         //         // setcheackMail('')
    //         //     }
    //         //     else {
    //         //         alert('user is not signup')
    //         //         // setcheackMail('')

    //         //     }
    //         // }
    //         // if (isUserExeist) {
    //         //     location.push('/')
    //         //     // window.location.href = '/'
    //         //     // setcheackMail('')
    //         // }
    //     } catch (error) {
    //         console.log(error.message);
    //         alert('error in google')
    //         setsetTheButtonDisable(false)
    //     }

    // }
    // const loginWithFaceBook = async () => {
    //     try {
    //         setsetTheButtonDisable(true)
    //         const res = await SignWithFaceBook()
    //         // setcheackMail(res.user.email)
    //         location.push('/')
    //         // if (cheackMail) {
    //         //     if (isUserExeist) {
    //         //         return setgoToHome(true)

    //         //         location.push('/')
    //         //         // window.location.href = '/'
    //         //         // setcheackMail('')
    //         //     }
    //         //     else {
    //         //         alert('user is not signup')
    //         //         // setcheackMail('')

    //         //     }
    //         // }

    //     } catch (error) {
    //         console.log(error);
    //         alert('error in facebook')
    //         setsetTheButtonDisable(false)

    //     }
    // }

    // React.useEffect(() => {
    //     const subscribe = db.collection('user').orderBy('createdAt').onSnapshot(shot => {
    //         let detailscarryer = []
    //         shot.forEach(e => {
    //             detailscarryer.push(e.data().mail)
    //         })
    //         if (detailscarryer) {
    //             const isuser = detailscarryer.some(e => e === cheackMail)
    //             console.log(isuser);
    //             setisUserExeist(isuser)
    //         } else {
    //             setisUserExeist('')
    //         }
    //     })
    //     return subscribe
    // }, [cheackMail])



    // React.useEffect(() => {
    //     if (cheackMail) {
    //         if (isUserExeist) {
    //             location.push('/')
    //         }
    //     }
    // }, [])


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleFormValue}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleFormValue}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link to="/user/forgetPassword/" >
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/user/signup/" >
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                    {/* <div className="other_sign_in_container">

                        <Grid item>
                            <Button
                                type="button"
                                variant="contained"
                                fullWidth
                                className={`${classes.continuewith} log_sign_up_buttons`}
                                disabled={theButtonDisable}
                                onClick={loginWithGoogle}
                            >
                                <i className="fab fa-google"></i>
                                continue with google
                            </Button>

                        </Grid>

                        <Grid item>
                            <Button
                                type="button"
                                variant="contained"
                                fullWidth
                                className={`${classes.continuewith} log_sign_up_buttons`}
                                onClick={loginWithFaceBook}
                                disabled={theButtonDisable}
                            >
                                <i className="fab fa-facebook"></i>
                                continue with Facebook
                            </Button>

                        </Grid>

                    </div> */}
                </form>
            </div>
            <div className="errorMassage">
                <Snackbar open={showAlert} autoHideDuration={1000} onClose={handleClose}>
                    <ErrorAlert onClose={handleClose} severity="error">
                        {errorMassage}
                    </ErrorAlert>
                </Snackbar>
            </div>

        </Container>
    );
}