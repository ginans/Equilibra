import { Fetch } from "../../../../../services/fetch.js"; 
export const createUser = async ( existName, existEmail, isHeightValid, isWeightValid, isYearValid, hasAcceptedTerms)=>{
    
    if( existName, existEmail, !isHeightValid, !isWeightValid, !isYearValid, !hasAcceptedTerms){
        return console.error("no cumple las condiciones")
    }
    const existsName = sessionStorage.getItem('name');
    const existsEmail = sessionStorage.getItem('email') ;
    const existsPassword = sessionStorage.getItem('password'); 
    const existsRepeatPassword = sessionStorage.getItem('repeatPassword');  
    const existsYear = sessionStorage.getItem('year');
    const existsHeight = sessionStorage.getItem('height') ;
    const existsWeight = sessionStorage.getItem('weight'); 
    const existsDiseases = sessionStorage.getItem('diseases');  
    if(!existsEmail || !existsName || !existsPassword || !existsRepeatPassword
        || !existsYear || !existsHeight || !existsWeight || !existsDiseases
    ){ 
        return console.error("Faltan datos")
    }  
    const result = await Fetch("http://localhost:8000/createUser", "POST",
        {
         age:existsYear,
         height:existsHeight,
         weight:existsWeight,
         chronicDiseases:existsDiseases,
         userName:existsName,
         email:existsEmail,
         password:existsPassword
        }) 
    if(result.status == 200){   
        return true
    }
    return false
}
