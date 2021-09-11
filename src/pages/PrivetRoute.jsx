import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useGolobalContext } from '../components/contex/TheProvider'
// import Login from '../components/Auth/Login';
// import { auth } from '../Firebase/config'
// import Loading from '../components/contex/Loading';



const PrivetRoute = ({ component: Component, ...rest }) => {

    const { isUserIsTrue } = useGolobalContext()

    return (<Route {...rest} render={props => {
        return isUserIsTrue ? <Component {...props} /> : <Redirect to='/login/' />
    }} >
    </Route>)

    // return (<Route {...rest} render={props => {
    //     return loading ? <Loading /> : !auth.currentUser && !isUserIsTrue ? <Redirect to='/login/' /> : <Component {...props} />
    // }} >
    // </Route>)

}

export default PrivetRoute


// return (<Route {...rest} render={props => {
//     return !auth.currentUser && !isUserIsTrue ? <Redirect to='/login/' /> : !auth.currentUser ? <Loading /> : <Component {...props} />
// }} >

// </Route>)