import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link, useHistory } from 'react-router-dom'
import { SignUpWithEmail, SeUsertDetailsToStorage } from '../../Firebase/Syntex';
// import { SignUpWithEmail, SignWithGoogle, SignWithFaceBook, SeUsertDetailsToStorage } from '../../Firebase/Syntex';
import { StapmTime } from '../../Firebase/config';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    continuewith: {
        // background: '#00e676',
        padding: ` .3rem 1.4rem .2rem .2rem`,
        borderRadius: ' 2em',
    }
}));

export default function SignUp() {


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

    // const signupWithGoogle = async (e) => {
    //     try {
    //         setsetTheButtonDisable(true)
    //         const res = await SignWithGoogle()
    //         SeUsertDetailsToStorage(res, {
    //             name: res.user.displayName,
    //             mail: res.user.email,
    //             createdAt: StapmTime()
    //         })
    //         location.push('/')
    //     }
    //     catch (error) {
    //         setsetTheButtonDisable(false)
    //         console.log(error.code);
    //     }

    // }


    // const signupWithFacebook = async () => {
    //     try {
    //         setsetTheButtonDisable(true)
    //         const res = await SignWithFaceBook()
    //         SeUsertDetailsToStorage(res, {
    //             name: res.user.displayName,
    //             mail: res.user.email,
    //             createdAt: StapmTime()
    //         })
    //         location.push('/')
    //     }
    //     catch (error) {
    //         setsetTheButtonDisable(false)
    //         console.log(error.code);
    //     }
    // }

    const handleFormValue = (e) => {
        const TheName = e.target.name
        const TheValue = e.target.value
        setvalue({ ...value, [TheName]: TheValue })

    }



    // let valid = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/

    const submitWithEmail = async (e) => {

        e.preventDefault()

        try {
            if (value.password.length < 8) {
                setshowAlert(true)
                seterrorMassage('Your Password should be more than 8')
            }
            else {
                const res = await SignUpWithEmail(value.email, value.password)
                SeUsertDetailsToStorage(res.user.uid, {
                    name: `${value.firstName} ${value.lastName}`,
                    email: value.email,
                    photoURL: res.user.photoURL,
                    createdAt: StapmTime()
                })
                location.push('/')
            }
        } catch (error) {
            if (error.code === 'auth/weak-password') {
                setshowAlert(true)
                seterrorMassage('Your Password is soo week')
            }
            else if (error.code === 'auth/email-already-in-use') {
                setshowAlert(true)
                seterrorMassage('This Email Already in use ')
            }
            else if (error.code === 'auth/invalid-email') {
                setshowAlert(true)
                seterrorMassage('Your email is invalid')
            }
        }
    }


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setshowAlert(false);
    };
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} onSubmit={submitWithEmail}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                onChange={handleFormValue}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                                onChange={handleFormValue}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={handleFormValue}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={handleFormValue}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link to="/" variant="body2">
                                Already have an account? Sign in
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
                                onClick={signupWithGoogle}
                                disabled={theButtonDisable}
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
                                onClick={signupWithFacebook}
                                disabled={theButtonDisable}
                            >
                                <i className="fab fa-facebook"></i>
                                continue with Facebook
                            </Button>

                        </Grid>

                    </div> */}

                </form>
                <div className="errorMassage">
                    <Snackbar open={showAlert} autoHideDuration={1000} onClose={handleClose}>
                        <ErrorAlert onClose={handleClose} severity="error">
                            {errorMassage}
                        </ErrorAlert>
                    </Snackbar>
                </div>
            </div>

        </Container>
    );
}