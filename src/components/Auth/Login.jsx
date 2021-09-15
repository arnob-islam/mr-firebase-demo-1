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
import { DELET_USER, Login, SignWithFaceBook, SignWithGoogle, } from '../../Firebase/Syntex';
import { db } from '../../Firebase/config';
import { useGolobalContext } from './../contex/TheProvider';

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

    const { showTheRefreshPage } = useGolobalContext()

    const classes = useStyles();
    const location = useHistory()

    const [value, setvalue] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''


    })
    const [massage, setMassage] = React.useState({ massage: '', type: 'error', state: false });

    const [theButtonDisable, setsetTheButtonDisable] = React.useState(false)


    const IsTheUserExist = async (mail) => {
        let detailscarryer = []
        const snapshot = await db.collection('user').get();
        snapshot.forEach((doc) => {
            detailscarryer.push(doc.data().mail)
        });

        if (detailscarryer) {
            return detailscarryer.some(e => e === mail)
        }
    }

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
                setMassage({ massage: `User Dosen't exist`, state: true, type: 'error' })
            }
            else if (error.code === 'auth/wrong-password') {
                setMassage({ massage: `Wrong password`, state: true, type: 'error' })
            }
        }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setMassage(false);
    };


    const loginWithGoogle = async () => {
        try {
            setsetTheButtonDisable(true)
            const res = await SignWithGoogle()
            const exist__ = await IsTheUserExist(res.user.email)
            if (!exist__) {
                await DELET_USER(res.user)
                setMassage({ massage: 'You Are Not SignUp', state: true, type: 'error' })
            }
            if (exist__) {
                location.push('/')
            }
            setsetTheButtonDisable(false)

        } catch (error) {
            console.log(error.code);
            if (error.code === 'auth/network-request-failed') {
                showTheRefreshPage(true)
            }
            if (error.code === 'auth/popup-closed-by-user') {
                setMassage({ massage: 'Error Try Again', state: true, type: 'error' })
            }
            setsetTheButtonDisable(false)
        }

    }
    const loginWithFaceBook = async () => {
        try {
            setsetTheButtonDisable(true)
            const res = await SignWithFaceBook()

            const exist__ = await IsTheUserExist(res.user.email)
            if (!exist__) {
                await DELET_USER(res.user)
                setMassage({ massage: 'You Are Not SignUp', state: true, type: 'error' })
            }
            if (exist__) {
                location.push('/')
            }
            setsetTheButtonDisable(false)

        } catch (error) {
            console.log(error.code);
            if (error.code === 'auth/network-request-failed') {
                showTheRefreshPage(true)
            }
            if (error.code === 'auth/popup-closed-by-user') {
                setMassage({ massage: 'Error Try Again', state: true, type: 'error' })
            }
            setsetTheButtonDisable(false)

        }
    }




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
                    <div className="other_sign_in_container">

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

                    </div>
                </form>
            </div>
            <div className="errorMassage">
                <Snackbar open={massage.state} autoHideDuration={1500} onClose={handleClose}>
                    <ErrorAlert onClose={handleClose} severity={massage.type}>
                        {massage.massage}
                    </ErrorAlert>
                </Snackbar>
            </div>

        </Container>
    );
}