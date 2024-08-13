export const nextStep = (  
    setStepOneVisibility, 
    setStep, 
    setSwitchWidth, 
    setBackButtonVisibility,
    setStepTwoVisibility ,
    existsNameApi,
    existsEmailApi
)=>{  
    if(existsNameApi || existsEmailApi){
        return console.error("name or email no exist")
    }
    const existsName = sessionStorage.getItem('name');
    const existsEmail = sessionStorage.getItem('email') ;
    const existsPassword = sessionStorage.getItem('password'); 
    const existsRepeatPassword = sessionStorage.getItem('repeatPassword');   
    if(!existsEmail || !existsName || !existsPassword || !existsRepeatPassword){
        return console.error("Faltan datos")
    }
    if(existsPassword != existsRepeatPassword){
        return console.error("las Contraseñas no coinciden")
    }
    // const regexName = /^[a-zA-Z]+\s[a-zA-Z]+\s[a-zA-Z]+\s[a-zA-Z]+$/;
    // const resultRegexName = regexName.test(existsName);
    // if(!resultRegexName){
    //     return console.error("Tu Nombre no cumple con las condiciones")
    // } 
    setStepOneVisibility(false); 
    setStep(2)
    setSwitchWidth(true)
    setBackButtonVisibility(true)
    setStepTwoVisibility(true)
}