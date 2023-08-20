import { createContext, useContext, useState } from "react";
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
    // const logout 



    // Context value 
    const contextValue = {}

    // @ts-ignore
    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}