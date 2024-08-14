import { Fetch } from "../../../fetch/fetch";


const getUserProfessional = async (email, password)=> {
    if(!email && !password){
        return console.error("Faltan datos")
    } 
    const result = await Fetch("http://localhost:8000/loginUserProfessional", "POST",
        { email:email, password:password })  
    if(result.status == 200){    
        const token = await result.json()
        if(token){ 
            sessionStorage.clear();
            localStorage.setItem("token", token.token) 
        } 
        return true
    }
}

export default getUserProfessional;