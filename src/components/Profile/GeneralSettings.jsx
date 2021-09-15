import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core'

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { SeUsertDetailsToStorage, UpdateUserEmail, UpdateUserPassword } from '../../Firebase/Syntex'
import { auth, db } from '../../Firebase/config';
import Loading from '../singleComponents/Loading';


function AlertMassage(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
    userBranding: {
        display: 'flex',
        gap: '2.5rem',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    form_input: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2.5rem',
        '& input': {
            width: '19rem '
        }
    }
}));




const GeneralSettings = () => {

    const [loading, setloading] = useState(true)

    const [message, setmassage] = useState({ show: false, message: '', type: 'error' })

    const [updateDesable, setupdateDesable] = useState(true)



    const [value, setvalue] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    })

    const [userData, setuserData] = useState({
        email: ''
    })

    React.useEffect(() => {
        const subscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setuserData({
                    email: user.email
                })
                setloading(false)
            }
            else {
                setuserData({
                    email: ''
                })

                setloading(true)
            }
        })
        return subscribe
    }, [])



    const handleFormValue = (e) => {
        const TheName = e.target.name
        const TheValue = e.target.value
        setvalue({ ...value, [TheName]: TheValue })

    }

    const updateUserInformation = async (e) => {
        e.preventDefault()
        setupdateDesable(false)

        if (!updateDesable) {
            if (value.email && !value.password && !value.confirmPassword) {
                try {
                    await UpdateUserEmail(value.email)
                    const responsData = await db.collection('user').doc(auth.currentUser.uid).get()
                    await SeUsertDetailsToStorage(auth.currentUser.uid, {
                        ...responsData.data(),
                        email: `${value.email}`
                    })
                    setmassage({ show: true, message: 'Email changed', type: 'success' })
                    setupdateDesable(true)
                } catch (error) {
                    if (error.code === 'auth/requires-recent-login') {
                        setmassage({ show: true, message: 'You have to login again', type: 'warning' })
                    }
                    console.log(error.code);
                }
            }

            if (value.email && value.password && value.confirmPassword && value.password === value.confirmPassword) {
                try {
                    await UpdateUserEmail(value.email)

                    const responsData = await db.collection('user').doc(auth.currentUser.uid).get()
                    await SeUsertDetailsToStorage(auth.currentUser.uid, {
                        ...responsData.data(),
                        email: `${value.email}`
                    })
                    await UpdateUserPassword(value.password)
                    setmassage({ show: true, message: 'Email & password changed', type: 'success' })
                    setupdateDesable(true)
                    setvalue({
                        email: '',
                        password: '',
                        confirmPassword: '',
                    })
                } catch (error) {
                    if (error.code === 'auth/weak-password') {
                        setmassage({ show: true, message: 'Your password should be more than 8', type: 'error' })
                    }
                    if (error.code === 'auth/requires-recent-login') {
                        setmassage({ show: true, message: 'You have to login again', type: 'warning' })
                    }
                    console.log(error.code);
                }
            }
            if (value.password && value.confirmPassword && value.password !== value.confirmPassword) {
                setmassage({ show: true, message: 'password dose not match', type: 'error' })
            }
        }

    }



    const classes = useStyles();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setmassage({
            ...message,
            show: false
        });
    };


    if (loading) {
        return <Loading />
    }

    return (
        <div className='genaeral__settings'>
            <form onSubmit={updateUserInformation}>
                <div className={classes.form_input} >

                    <TextField label="Change your Email" name='email' id="standard-size-small" defaultValue={userData.email ? userData.email : ''} disabled={updateDesable}
                        size="small" required onChange={handleFormValue} />

                    <TextField label="Password" name='password' id="standard-size-normal"
                        onChange={handleFormValue} placeholder='leave it empty if want"t to change'
                        type="password" disabled={updateDesable}
                    />
                    <TextField label="confirm password" name='confirmPassword' id="password"
                        onChange={handleFormValue} placeholder='leave it empty if want"t to change'
                        type="password" disabled={updateDesable}
                    />
                </div>
                <Button
                    type="submit"
                    color="primary"
                    className={'update_btn'} >
                    {updateDesable ? 'Click to Change' : 'Click to update'}
                </Button>
            </form>
            <div className="errorMassage">
                <Snackbar open={message.show} autoHideDuration={2000} onClose={handleClose}>
                    <AlertMassage onClose={handleClose} severity={message.type}>
                        {message.message}
                    </AlertMassage>
                </Snackbar>
            </div>
        </div>
    )
}

export default GeneralSettings
