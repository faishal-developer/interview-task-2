import { getAuth, updateProfile, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebaseApp from "../../Firebase/Firebase.init";

initializeFirebaseApp()

//code started here
const auth = getAuth();

const useFireBase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const createUserWithPassword = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then((result) => {
                    let updateUser = { ...res.user }
                    updateUser['displayName'] = name
                    setUser(updateUser)

                }).finally((error) => {
                    setIsLoading(false)
                })

            })
            .catch(e => {
                let error = {}
                error.message = e.message;
                setUser(error)
                setIsLoading(false)
            })
    }
    const signInWithPassword = (email, password, history, url) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                setUser(res.user)
            })
            .catch(e => {
                let error = {}
                error.message = e.message;
                setUser(error)
                setIsLoading(false)
            })
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(e => {
                let error = {}
                error.message = e.message;
                setUser(error)
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user);
            if (user) {
                setUser(user)
                setIsLoading(false)
            } else {
                setIsLoading(false)
            }
        });
    }, [])

    return {
        user,
        signInWithPassword,
        createUserWithPassword,
        logOut,
        isLoading
    }
}

export default useFireBase