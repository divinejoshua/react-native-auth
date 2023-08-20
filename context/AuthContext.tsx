import { createContext, useContext, useEffect, useState } from "react";
import axios from "../api/axios";
import * as SecureStore from 'expo-secure-store';


interface AuthProps {
    authState : { token: string | null}
    onLogin: (username: string, password : string) => Promise<any>
    onLogout: (token : string) => Promise<any>
}

const TOKEN_KEY : string = ""  //Token key from expo secure store

// Create context 
const AuthContext = createContext<AuthProps>({
    authState: {
        token: null,
    },
    onLogin: function (username: string, password: string): Promise<any> {
        throw new Error("Function not implemented.");
    },
    onLogout: function (token: string): Promise<any> {
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

    // Login function 
    const login = async (username: string, password: string) => {

        // Attempt 
        try {
            // @ts-ignore 
            let response = await axios.get('/accounts/check/', { username, password });

            console.log (response.data)

            // Set the authstate 
            setauthState({
                token : response.data.access_token
            })

            // Set the access token as the authorisation data 
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`

            //Set the access token to expo secure store 
            await SecureStore.setItemAsync(TOKEN_KEY, response.data.access_token)

            return response
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
    }


    // Get token from expo secure store 
    const loadToken = async () => {
        const token = await SecureStore.getItemAsync(TOKEN_KEY)

        console.log(token)

        if(token) {
            // Set the access token as the authorisation data 
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        }
    }


    useEffect(() => {
        // Load the token from expo secure store
        loadToken()
    }, [])
    


    // Context value 
    const contextValue = {
        onLogin     : login,
        onLogout    : logout,
        authState   : authState,

    }

    // @ts-ignore
    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}