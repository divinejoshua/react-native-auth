import { useState } from "react"
import { LoginForm } from '../types/login';


const useValidateForm = () => {

       // Data 
       const [formData, setformData] = useState<LoginForm[]>([])
   
       const validateForm = () : void =>{

        // Get the user data from the json file 
        let objectData = []
        objectData = require("../assets/data/users.json")
        let users = objectData.users

        // save the thread posts to store 
        }
   


    return { validateForm };
}
 
export default useValidateForm;