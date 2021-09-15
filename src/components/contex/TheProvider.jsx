import React, { useEffect, useState, useContext, createContext } from 'react'
import { auth, db } from '../../Firebase/config'


const TheContextProvider = createContext()

const TheProvider = ({ children }) => {

    const [loading, setloading] = useState(true)

    const [isUserIsTrue, setisUserIsTrue] = useState(false)

    const [showTheRefreshPage, setshowTheRefreshPage] = useState(false)


    // useEffect(() => {
    //     const sub = auth.onAuthStateChanged(user => {
    //         db.collection('user').orderBy('createdAt').onSnapshot(shot => {
    //             let detailscarryer = []
    //             shot.forEach(e => {
    //                 detailscarryer.push(e.data().mail)
    //             })

    //             if (user) {
    //                 const isuser = detailscarryer.find(e => user.email === e)
    //                 setisUserIsTrue(isuser)
    //                 setloading(false)
    //             } else {
    //                 setisUserIsTrue()
    //                 setloading(false)
    //             }
    //             // setisUserExeist(isuser)
    //         })

    //     })
    //     return () => sub
    // }, [])


    const getTheData = async () => {
        try {
            const Ref = db.collection('user').doc();
            const doc = await Ref.get()
            if (!doc.exists) {
                setloading(false)
            } else {
                setloading(false)
            }
        } catch (error) {
            setloading(false)
            setshowTheRefreshPage(true)
        }
    }

    useEffect(() => {
        getTheData()
    }, [])



    useEffect(() => {
        const sub = auth.onAuthStateChanged(user => {
            if (user) {
                setisUserIsTrue(true)
            } else {
                setisUserIsTrue()
            }
        })
        return () => sub
    }, [])

    // const [cheackMail, setcheackMail] = React.useState('')

    // const [isUserExeist, setisUserExeist] = React.useState('')

    // useEffect(() => {
    //     if (cheackMail === isUserExeist) {
    //         setisUserIsTrue(cheackMail)
    //     }
    // }, [cheackMail, isUserExeist])





    // useEffect(() => {
    //     const subscribe = db.collection('user').orderBy('createdAt').onSnapshot(shot => {
    //         let detailscarryer = []
    //         shot.forEach(e => {
    //             detailscarryer.push(e.data().mail)
    //         })
    //         const isuser = detailscarryer.find(e => cheackMail === e)
    //         setisUserExeist(isuser)
    //     })
    //     return subscribe
    // }, [cheackMail])





    return (
        <TheContextProvider.Provider value={{ isUserIsTrue, loading, showTheRefreshPage, setshowTheRefreshPage }}>
            {children}
        </TheContextProvider.Provider>
    )
}


export default TheProvider

export const useGolobalContext = () => {
    return useContext(TheContextProvider)
}