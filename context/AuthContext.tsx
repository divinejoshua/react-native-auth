import { createContext, useContext } from "react";
import axios from "../api/axios";

interface AuthProps {
    authState : { token: string | null, authenticated: boolean | null}
    onLogin: (username: string, password : string) => Promise<any>
    onLogout: (token : string) => Promise<any>
}

const TOKEN_KEY : string = ""  //Token key from expo secure store

// Create context 
const AuthContext = createContext<AuthProps>({
    authState: {
        token: null,
        authenticated: null
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

    // Context value 
    const contextValue = {}

    // @ts-ignore
    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}