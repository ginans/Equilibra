import styles from "./../../../../../styles/authentication/login/login.module.scss";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import rulerIcon from "../../../img/ruler-vertical-solid.svg";
import clockIcon from "../../../img/clock-rotate-left-solid.svg";
import virusIcon from "../../../img/virus.svg";
import bodyWeightIcon from "../../../img/body-weight-scales-icon.svg";
import { RegisterContext } from "../registerClient"; // Importa el contexto desde el archivo Register
import xMarkIcon from "../../../img/circle-xmark-solid.svg"
import checkIcon from "../../../img/circle-check-solid.svg"


const StepTwoForm = () => {
    const { stepTwoVisibility, isYearValid, 
         setIsYearValid, isWeightValid, setIsWeightValid,
         isHeightValid, setIsHeightValid,
         hasAcceptedTerms, setHasAcceptedTerms } = useContext(RegisterContext); // Accede al estado del contexto

    const [year, setYear] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [diseases, setDiseases] = useState(); 


    useEffect(()=>{
       if(height > 99 && height < 251){
        return setIsHeightValid(true)
       }
       setIsHeightValid(false) 
    },[height])
    
    useEffect(()=>{ 
        if(weight > 29 && weight < 701){
            return setIsWeightValid(true)
           }
           setIsWeightValid(false) 
    },[weight])

    useEffect(()=>{ 
        if(year < 121 && year > 17){
            return setIsYearValid(true)
           }
           setIsYearValid(false) 
    },[year])

    // Carga los datos desde sessionStorage al inicializar el componente
    useEffect(() => {
        const existsYear = sessionStorage.getItem('year');
        const existsHeight = sessionStorage.getItem('height');
        const existsWeight = sessionStorage.getItem('weight');
        const existsDiseases = sessionStorage.getItem('diseases'); 
        if (existsYear) setYear(existsYear);
        if (existsHeight) setHeight(existsHeight);
        if (existsWeight) setWeight(existsWeight); 
        try {
            if (existsDiseases) {
                setDiseases(JSON.parse(existsDiseases)); // Convierte de vuelta a booleano
            }
        } catch (e) {
            console.error("Error parsing diseases from sessionStorage:", e);
            // Manejo de errores si JSON.parse falla
        }
    }, []);
    
    
    // Guarda los datos en sessionStorage
    useEffect(() => { 
        sessionStorage.setItem("year", year);
        sessionStorage.setItem("height", height);
        sessionStorage.setItem("weight", weight);
        sessionStorage.setItem("diseases", JSON.stringify(diseases)); 
    }, [year, height, weight, diseases]);
    
    

    return (
        <div style={{ visibility: !stepTwoVisibility ? "hidden" : "visible" }}>
            <div className={styles.containInput}>
                <label htmlFor="year">Edad</label>
                <div>
                    <img alt="IconClock" className={styles.iconInput} src={clockIcon} />
                    
                    { isYearValid && year ? 
                        <img className={styles.iconCircle}  src={checkIcon}/> :
                        !isYearValid && year ? 
                        <img className={styles.iconCircle}  src={xMarkIcon}/> :
                        null
                    }  

                    <input
                        className={styles.input}
                        min="18"
                        max="120"
                        pattern="\d{1,4}"
                        placeholder="Edad"
                        type="number"
                        value={year}
                        id="year"
                        name="year"
                        onChange={req => setYear(req.target.value)}
                        required
                    />
                     { !isYearValid && year && <div className={styles.error}>La edad debe estar entre 18 y 120 años</div> }
                </div>
            </div>
            <div className={styles.containInput}>
                <label htmlFor="height">Altura</label>
                <div>
                    <img alt="IconRuler" className={styles.iconInput} src={rulerIcon} />
                    { isHeightValid && height ? 
                        <img className={styles.iconCircle}  src={checkIcon}/> :
                        !isHeightValid && height ? 
                        <img className={styles.iconCircle}  src={xMarkIcon}/> :
                        null
                   } 
                    <input
                        className={styles.input}
                        min="100"
                        max="250"
                        maxLength="4"
                        placeholder="Altura en cm"
                        type="number"
                        value={height}
                        id="height"
                        name="height"
                        onChange={req => setHeight(req.target.value)}
                        required
                    />
                    { !isHeightValid && height && <div className={styles.error}>Altura debe estar entre 100 y 250 cm</div> }
                </div>
            </div>
            <div className={styles.containInput}>
                <label htmlFor="weight">Peso</label>
                <div>
                    <img alt="IconPeso" className={styles.iconInput} src={bodyWeightIcon} />
                    { isWeightValid && weight ? 
                        <img className={styles.iconCircle}  src={checkIcon}/> :
                        !isWeightValid && weight ? 
                        <img className={styles.iconCircle}  src={xMarkIcon}/> :
                        null
                   } 
                    <input
                        className={styles.input}
                        placeholder="Peso en kg"
                        min="30"
                        max="700"
                        type="number"
                        id="weight"
                        name="weight"
                        value={weight}
                        onChange={req => setWeight(req.target.value)}
                        required
                    />
                     { !isWeightValid && weight && <div className={styles.error}>El peso debe estar entre 30 y 700 kg</div> }
                </div>
            </div>
            <div className={styles.containInput}>
                {/* <p htmlFor="diseases">Enfermedades crónicas</p> */}
                <div className={styles.checkInput}> 
                    {/* <img alt="IconContraseña" className={styles.iconInput} src={virusIcon} /> */}
                    <input 
                    style={{ width: "20%" }}
                    type="checkbox"
                    id="diseases"
                    name="diseases"
                    checked={diseases}  
                    onChange={req => setDiseases(req.target.checked)}   
                    /> 
                    <p>Tengo enfermedades cronicas</p>
                    
                </div>
                <div className={styles.checkInput}> 
                    {/* <img alt="IconContraseña" className={styles.iconInput} src={virusIcon} /> */}
                    <input
                    className={styles.inputCheck}
                    style={{ width: "20%" }}
                    type="checkbox"
                    id="diseases"
                    name="diseases"
                    checked={hasAcceptedTerms}  
                    onChange={req => setHasAcceptedTerms(req.target.checked)}  
                    required
                    /> 
                    <p style={{fontSize:"14px"}}>Acepto los términos y condiciones</p>
                    
                </div>
            </div>
        </div>
    );
};

export default StepTwoForm;
