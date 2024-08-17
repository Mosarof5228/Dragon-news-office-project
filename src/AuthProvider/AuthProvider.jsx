import { createContext } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";



export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {

    const userCreate=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const logIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }



    const authInfo={
       userCreate,
       logIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes={
    children:PropTypes.node
}
export default AuthProvider;





