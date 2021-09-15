import { auth, provider, facebookProvider, db } from "./config";
import { deleteUser } from "firebase/auth";

const Login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
}

const SignUpWithEmail = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password)

}

const ForgetPassword = (email) => {
    return auth.sendPasswordResetEmail(email)
}

const SeUsertDetailsToStorage = (uid, details) => {
    auth.currentUser.updateProfile({
        displayName: details.name,
        photoURL: details.photoURL
    })
    return db.collection('user').doc(uid).set(details)
}

const UpdateUserEmail = (email) => {
    return auth.currentUser.updateEmail(email)
}

const UpdateUserPassword = (password) => {
    return auth.currentUser.updatePassword(password)
}

const SignWithGoogle = () => {
    return auth.signInWithPopup(provider)
}
const SignWithFaceBook = () => {
    return auth.signInWithPopup(facebookProvider)
}

const DELET_USER = (user) => {
    return deleteUser(user)
}

const RedirectWithGoogleLogin = () => {
    return auth.signInWithRedirect(provider)
}


export { Login, SignUpWithEmail, SignWithGoogle, SignWithFaceBook, SeUsertDetailsToStorage, RedirectWithGoogleLogin, ForgetPassword, UpdateUserEmail, UpdateUserPassword, DELET_USER }