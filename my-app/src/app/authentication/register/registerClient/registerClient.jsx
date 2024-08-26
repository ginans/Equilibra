import styles from "./../../../../styles/authentication/login/login.module.scss" 
import { createUser } from "./services/createUserClient.js"; 
import { useState, createContext, useEffect } from "react";
import { Link ,useNavigate } from "react-router-dom";
import { nextStep } from "./utils/nextStep.js";
import StepOneForm from "./components/stepOneForm.jsx";
import StepTwoForm from "./components/stepTwoForm.jsx"; 
import arrowLeftIcon from "../../img/arrow-left-long-solid.svg";   

export const RegisterContext = createContext();

const RegisterClient = () => {
    const [stepOneVisibility, setStepOneVisibility] = useState(true);
    const [stepTwoVisibility, setStepTwoVisibility] = useState(false);
    const [step, setStep] = useState(1);
    const [switchWidth, setSwitchWidth] = useState(false);
    const [backButtonVisibility, setBackButtonVisibility] = useState(false); 
    
    const [existName, setExistName] = useState();
    const [existEmail, setExistEmail] = useState(); 
    const [isHeightValid,setIsHeightValid] = useState()
    const [isWeightValid,setIsWeightValid] = useState()
    const [isYearValid,setIsYearValid] = useState()
    const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false) 
    const navigate = useNavigate() 
    const createUserCompleted = async (event)=>{
        event.preventDefault()
        const isUserCreationComplete = await createUser( existName, existEmail, isHeightValid, isWeightValid, isYearValid,hasAcceptedTerms)
        if (isUserCreationComplete){   
           
           return navigate("/home")
        }
    } 
    const backStep = () => {
        setStepOneVisibility(true); 
        setStep(1);
        setSwitchWidth(false);
        setBackButtonVisibility(false);
        setStepTwoVisibility(false);
    }

    return (
        <RegisterContext.Provider value={{ hasAcceptedTerms, setHasAcceptedTerms, isYearValid , setIsYearValid,  isWeightValid , setIsWeightValid, isHeightValid, setIsHeightValid, existEmail, setExistEmail, existName, setExistName ,stepOneVisibility, setStepOneVisibility, stepTwoVisibility, setStepTwoVisibility, step, setStep, switchWidth, setSwitchWidth, backButtonVisibility, setBackButtonVisibility }}> 
                <div className={styles.containRegisters}>
                    <h1>Registro de usuario</h1>  
                    <div onClick={backStep} style={ !backButtonVisibility ? { visibility:"hidden" } : null} className={styles.backButton}>
                        <img src={arrowLeftIcon}/>
                        <p>Volver</p>
                    </div>  
                    <div className={styles.stepsLine}>
                        <div style={{ width: !switchWidth ? "50%" : "100%" }} className={styles.stepsLine2}></div>
                    </div>
                    <form className={styles.containLogin} onSubmit={createUserCompleted}>  
                        <StepOneForm /> 
                        <StepTwoForm /> 
                        {
                            step === 2 ? 
                            <button type="submit" className={styles.buttonEnter}>Registrarse</button>
                            : 
                            <button className={styles.buttonEnter} onClick={() => nextStep(setStepOneVisibility, setStep, setSwitchWidth, setBackButtonVisibility, setStepTwoVisibility,existName,existEmail)}>Siguiente</button> 
                        }
                    </form>
                    <div className={styles.containLinks}>
                        <Link className={styles.enlaces} to="/login">¿Ya tienes una cuenta? Iniciar sesión</Link> 
                    </div>
                </div> 
        </RegisterContext.Provider>
    )
}

export default RegisterClient; 