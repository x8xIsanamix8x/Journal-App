import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers";
import { clearNotesLogout } from "../journal/journalSlice";
import { checkingCrendentials, logout, login } from "./";


export const checkingAuthentication = () => {
    return async( dispatch ) => {

        dispatch( checkingCrendentials() );
        
    }
}


export const startGoogleSignIn = () => {
    return async( dispatch ) => {

        dispatch( checkingCrendentials() );

        const result = await singInWithGoogle();
        if ( !result.ok ) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result ))

    }
}


export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async( dispatch ) => {

        dispatch( checkingCrendentials() );

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });
        if ( !ok ) return dispatch( logout({ errorMessage }) );

        dispatch( login({ uid, photoURL, errorMessage }))

    }

}


export const startLoginWithEmailPassword = ({ email, password }) => {
    return async( dispatch ) => {

        dispatch( checkingCrendentials() );

        const result = await loginWithEmailPassword({ email, password });
        console.log(result);

        if ( !result.ok ) return dispatch( logout( result ) );
        dispatch( login( result ));

    }
}


export const startLogout = () => {
    return async( dispatch ) => {
        
        await logoutFirebase();
        dispatch( clearNotesLogout() );
        dispatch( logout() );

    }
}

