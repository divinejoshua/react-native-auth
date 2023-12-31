import { createContext, useContext, useEffect, useState } from "react";
import axios from "../api/axios";
import * as SecureStore from 'expo-secure-store';
import { router } from "expo-router";


interface AuthProps {
    authState : { token: string | null}
    onSetToken: (token: string) => Promise<any>
    onLogout: () => Promise<any>
}

const TOKEN_KEY : string = "jwt-token"  //Token key from expo secure store

// Create context 
const AuthContext = createContext<AuthProps>({
    authState: {
        token: null,
    },
    onSetToken: function (token : string): Promise<any> {
        throw new Error("Function not implemented.");
    },
    onLogout: function (): Promise<any> {
        throw new Error("Function not implemented.");
    }
})


// Context hook 
export const useAuth = () => {
    return useContext(AuthContext)
}

// Auth provider 
export const AuthProvider = ({children} : any) => {

    //Data
    
    const [authState, setauthState] = useState<{
        token : string | null,
    }>({
        token : null,
    })

    // Set token
    const setToken = async (token: string) => {

        // Attempt 
        try {

            // Set the authstate 
            setauthState({
                token : token
            })

            // Set the access token as the authorisation data 
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

            //Set the access token to expo secure store 
            await SecureStore.setItemAsync(TOKEN_KEY, token)

        }

        // Exception 
        catch (error) {
            console.log (error)
        }

    }

    // Logout function 
    const logout = async () => {
        // Set the access token to null
        axios.defaults.headers.common['Authorization'] = null

        //Delete the access token to expo secure store 
        await SecureStore.deleteItemAsync(TOKEN_KEY)

        // Set the auth state to null
        setauthState({
            token : null
        })

        // Redirect to get started page after logout
        router.replace("/accounts/getstarted")

    }


    // Get token from expo secure store 
    const loadToken = async () => {
        const token = await SecureStore.getItemAsync(TOKEN_KEY)


        if(token) {
            // Set the access token as the authorisation data 
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

            // Set the authstate 
            setauthState({
                token : token
            })

        }
    }


    // Axios interceptors 
    axios.interceptors.response.use(null, (error) => {

        // if the error is 401 (Unauthorised)
        if(error && error.response && error.response.status === 401){
          return Promise.reject(

            // Log out the user 
            logout()
          )
        } else {
            return Promise.reject(error)
        }
      }) 



    useEffect(() => {
        // Load the token from expo secure store
        loadToken()
    }, [])
    


    // Context value 
    const contextValue = {
        onSetToken  : setToken,
        onLogout    : logout,
        authState   : authState,

    }

    // @ts-ignore
    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}