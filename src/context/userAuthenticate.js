import { createContext, useContext, useState, useEffect } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth"
import { auth } from "../fire"

const userAuthContext = createContext()

export function UserAuthProvider({ children }) {
    const [user, setUser] = useState("")

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        onAuthStateChanged(auth, (e) => {
            setUser(e)
        })
    }, [])



    console.log(user, "<<<<")
    return (
        <userAuthContext.Provider value={{ user, signUp, logIn, logOut }}>{children}</userAuthContext.Provider>
    )
}

export function useUserAuth() {
    return useContext(userAuthContext)
}

