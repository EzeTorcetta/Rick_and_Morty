import { useState } from "react";
import validation from "./Validation";

export default function Form({login}){

    const [userData, setUserData] = useState({username:"", password:""});
    const[errors, setErrors] = useState({username:"" , password:""}); 

    const handleInputChange = (event) =>{
        const property = event.target.name;
        const value = event.target.value;

      setUserData({...userData,[property]: value })
      setErrors(validation({ ...userData, [property]: value }, errors));
    }


    const handleSubmit = (event) => {
        event.preventDefault();   
        login(userData);
    }
    
    
    
    
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username" >Username:</label>
            <input 
            type="text" 
            name="username" 
            value={userData.username}  
            onChange={handleInputChange} 
            />
            <p>{errors.username}</p>
            <label htmlFor="password">Password:</label>
            <input 
            type="text" 
            name="password" 
            value={userData.password}  
            onChange={handleInputChange} 
            />
            <p>{errors.password}</p>
            <button type = "submit" >Submit</button>
        </form>
        </div>

    )
}