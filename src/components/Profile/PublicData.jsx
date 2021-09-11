import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import { auth, db, storage } from '../../Firebase/config'
import { SeUsertDetailsToStorage } from '../../Firebase/Syntex';
import { makeStyles } from '@material-ui/core/styles';
import Loading from '../singleComponents/Loading';
import Progress from '../singleComponents/Progress';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';



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
        gap: '2rem',
        flexDirection: 'column',
        '& input': {
            width: '12rem'
        }
    }
}));


const PublicData = () => {

    const [loading, setloading] = useState(true)

    const [progress, setprogress] = useState(false)

    const [userData, setuserData] = useState({
        firsName: '',
        lastName: '',
        photoURL: '',

    })

    const [value, setvalue] = React.useState({
        firstName: '',
        lastName: '',
    })
    const [message, setmassage] = useState({ show: false, message: '', type: 'error' })



    React.useEffect(() => {
        const subscribe = auth.onAuthStateChanged(user => {
            if (user) {

                setuserData({
                    firsName: user.displayName.split(' ')[0],
                    lastName: user.displayName.split(' ')[1],
                    photoURL: user.photoURL
                })
                setloading(false)
            }
        })
        return () => subscribe
    }, [])


    const handleFormValue = (e) => {
        const TheName = e.target.name
        const TheValue = e.target.value
        setvalue({ ...value, [TheName]: TheValue })

    }



    const UploaduserPhoto = (e) => {
        const photo = e.target.files[0]
        const photoTypeRequired = ['image/png', 'image/jpeg', 'image/jpg']


        if (photo && photoTypeRequired.includes(photo.type)) {
            const storageRef = storage.ref(photo.name)

            storageRef.put(photo).on('state_changed', (shot) => {
                setprogress(true)
            }, (error) => {
                setmassage({ show: true, message: 'please try again', type: 'error' })
            }, async () => {

                try {
                    const photoURL = await storageRef.getDownloadURL()
                    const responsData = await db.collection('user').doc(auth.currentUser.uid).get()
                    await SeUsertDetailsToStorage(auth.currentUser.uid, {
                        ...responsData.data(),
                        photoURL: photoURL
                    })
                    setuserData({
                        ...userData,
                        photoURL: photoURL
                    })
                    setprogress(false)

                    setmassage({ show: true, message: 'your phot uploaded', type: 'success' })

                } catch (error) {
                    console.log(error);
                }
            }
            )

        }
    }


    const updateUserInformation = async (e) => {
        e.preventDefault()

        try {
            const responsData = await db.collection('user').doc(auth.currentUser.uid).get()
            await SeUsertDetailsToStorage(auth.currentUser.uid, {
                ...responsData.data(),
                name: `${value.firstName} ${value.lastName}`
            })
            setmassage({ show: true, message: 'Name changed', type: 'success' })
        } catch (error) {
            console.log(error.code);
        }
    }



    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setmassage({
            ...message,
            show: false
        });
    };

    const classes = useStyles();
    if (loading) {
        return <Loading />
    }

    return (
        <div className='public_data'>
            <div className={classes.userBranding}>
                <div className="img_container">
                    <img src={userData.photoURL || '/img/user-icon.png'} alt="userphoto" />
                </div>
                <div className="inpuphoto">
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                        onClick={UploaduserPhoto}
                        onChange={UploaduserPhoto}
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="outlined" component="span">
                            change
                        </Button>
                    </label>
                </div>
            </div>

            <div className="user_other_details">
                <form onSubmit={updateUserInformation} >
                    <div className={classes.form_input}>

                        <TextField label="First Name" name='firstName' id="standard-size-small" defaultValue={userData.firsName} required
                            onChange={handleFormValue} size="small" />
                        <TextField label="Last Name" name='lastName' id="standard-size-normal" defaultValue={userData.lastName}
                            onChange={handleFormValue} required />

                    </div>
                    <Button
                        type="submit"
                        color="primary"
                        className={'update_btn'} >
                        update
                    </Button>
                </form>
            </div>
            <div className="errorMassage">
                <Snackbar open={message.show} autoHideDuration={2000} onClose={handleClose}>
                    <AlertMassage onClose={handleClose} severity={message.type}>
                        {message.message}
                    </AlertMassage>
                </Snackbar>
            </div>
            {progress && <Progress />}
        </div>
    )
}

export default PublicData
