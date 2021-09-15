import React from 'react'
import { auth, db } from '../../Firebase/config'

const GetProfileData = () => {


    React.useEffect(() => {
        const sub = auth.onAuthStateChanged(user => {
            console.log(user.uid, 'from profile');
            if (user) {
                db.collection('user').doc(user.uid).get().then(e => {
                    console.log(e.data(), ' see the datas');
                })
            } else {
            }
        })
        return () => sub

    }, [])


    return (
        <div>
            <h1>hi</h1>
        </div>
    )
}

export default GetProfileData
