import { Fetch } from "../../../../fetch/fetch.js"; 
export const createUser = async ( existName, existEmail, isYearValid, hasAcceptedTerms)=>{

    if( existName, existEmail, !isYearValid, !hasAcceptedTerms){
        return console.error("no cumple las condiciones")
    }
    const existsName = sessionStorage.getItem('name');
    const existsEmail = sessionStorage.getItem('email') ;
    const existsPassword = sessionStorage.getItem('password'); 
    const existsRepeatPassword = sessionStorage.getItem('repeatPassword');  
    const existsYear = sessionStorage.getItem('year');
    const existsRut = sessionStorage.getItem('rut') ;
    const existsEspecial = sessionStorage.getItem('especial'); 
    const existsRegisterSis = sessionStorage.getItem('registerSis');  
    if(!existsEmail || !existsName || !existsPassword || !existsRepeatPassword
        || !existsYear || !existsRut || !existsEspecial || !existsRegisterSis
    ){ 
        return console.error("Faltan datos")
    }  
    const result = await Fetch("http://localhost:8000/createUserProfessional", "POST",
        {
         age:existsYear,
         registerSis:existsRegisterSis,
         rut: existsRut,
         specialty:existsEspecial,
         userNameP:existsName,
         email:existsEmail,
         password:existsPassword
        }) 

    if(result.status === 200){   
        console.log(result)
        const token = await result.json()
        if(token){
            sessionStorage.clear();
            localStorage.clear()
            localStorage.setItem("tokenProfessional", token.token) 
        } 
        return true
    }
    return false
}
