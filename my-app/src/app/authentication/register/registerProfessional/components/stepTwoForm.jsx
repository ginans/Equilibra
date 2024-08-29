import styles from "./../../../../../styles/authentication/login/login.module.scss";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom"; 
import { RegisterContext } from "../registerClient"; // Importa el contexto desde el archivo Register
import xMarkIcon from "../../../img/circle-xmark-solid.svg"
import checkIcon from "../../../img/circle-check-solid.svg"
import hospitalIcon from "../../../img/hospital-solid.svg"
import stethoscopeIcon from "../../../img/stethoscope-solid.svg"
import rutIcon from "../../../img/id-card-solid.svg"
import yearIcon from "../../../img/clock-rotate-left-solid.svg"

const StepTwoForm = () => {
    const { stepTwoVisibility, isYearValid, 
         setIsYearValid, hasAcceptedTerms
         , setHasAcceptedTerms } = useContext(RegisterContext);  

    const [year, setYear] = useState("");
    const [rut, setRut] = useState("");
    const [registerSis, setRegisterSis] = useState("");
    const [especial, setEspecial] = useState(""); 

    const specialties = {
        Enfermeria: "Enfermería",
        Fonoaudiologia: "Fonoaudiología",
        Kinesiologia: "Kinesiología",
        Medicina: "Medicina",
        Nutricion: "Nutrición y Dietética",
        Obstetricia: "Obstetricia y Puericultura",
        Odontologia: "Odontología",
        Quimica: "Química y Farmacia"
    };


    // useEffect(()=>{
    //    if(height > 99 && height < 251){
    //     return setIsHeightValid(true)
    //    }
    //    setIsHeightValid(false) 
    // },[height])
    
    // useEffect(()=>{ 
    //     if(weight > 29 && weight < 701){
    //         return setIsWeightValid(true)
    //        }
    //        setIsWeightValid(false) 
    // },[weight])

    useEffect(()=>{ 
        if(year < 121 && year > 17){
            return setIsYearValid(true)
           }
           setIsYearValid(false) 
    },[year])

    // Carga los datos desde sessionStorage al inicializar el componente
    useEffect(() => {
        const existsRut = sessionStorage.getItem('rut');
        const existsRegisterSis = sessionStorage.getItem('registerSis');
        const existsEspecial = sessionStorage.getItem('especial');
        const existsYear = sessionStorage.getItem('year'); 
        if (existsYear) setYear(existsYear);
        if (existsRut) setRut(existsRut);
        if (existsRegisterSis) setRegisterSis(existsRegisterSis); 
        if(existsEspecial) setEspecial(existsEspecial)
    }, []);
    
    
    // Guarda los datos en sessionStorage
    useEffect(() => { 
        sessionStorage.setItem("year", year);
        sessionStorage.setItem("rut", rut);
        sessionStorage.setItem("registerSis", registerSis);
        sessionStorage.setItem("especial", especial); 
    }, [year, rut, registerSis, especial]);
    
    

    return (
        <div style={{ visibility: !stepTwoVisibility ? "hidden" : "visible" }}>
            <div className={styles.containInput}>
                <label htmlFor="rut">Rut</label>
                <div>
                    <img alt="rut Icon" className={styles.iconInput} src={rutIcon} />
                    
                    {/* { isYearValid && year ? 
                        <img className={styles.iconCircle}  src={checkIcon}/> :
                        !isYearValid && year ? 
                        <img className={styles.iconCircle}  src={xMarkIcon}/> :
                        null
                    }   */}

                    <input
                        className={styles.input}
                        min="1000000"
                        max="30000000"
                        pattern="\d{1,4}"
                        placeholder="12.345.678-9"
                        type="number"
                        value={rut}
                        id="rut"
                        name="rut"
                        onChange={req => setRut(req.target.value)}
                        required
                    />
                     {/* { !isYearValid && year && <div className={styles.error}>La edad debe estar entre 18 y 120 años</div> } */}
                </div>
            </div>
            <div className={styles.containInput}>
                <label htmlFor="sis">N º de Registro SIS</label>
                <div>
                    <img alt="hospital Icon" className={styles.iconInput} src={hospitalIcon} />
                    {/* { isHeightValid && height ? 
                        <img className={styles.iconCircle}  src={checkIcon}/> :
                        !isHeightValid && height ? 
                        <img className={styles.iconCircle}  src={xMarkIcon}/> :
                        null
                   }  */}
                    <input
                        className={styles.input}
                        // min="100"
                        // max="250"
                        maxLength="4"
                        placeholder="Ingrese su numero de registro"
                        type="number"
                        value={registerSis}
                        id="sis"
                        name="sis"
                        onChange={req => setRegisterSis(req.target.value)}
                        required
                    />
                    {/* { !isHeightValid && height && <div className={styles.error}>Altura debe estar entre 100 y 250 cm</div> } */}
                </div>
            </div>
            <div className={styles.containInput}>
                <label htmlFor="edad">Edad</label>
                <div>
                    <img alt="Edad Icon" className={styles.iconInput} src={yearIcon} />
                   
                   { isYearValid && year ? 
                        <img className={styles.iconCircle}  src={checkIcon}/> :
                        !isYearValid && year ? 
                        <img className={styles.iconCircle}  src={xMarkIcon}/> :
                        null
                    }  
                    <input
                        className={styles.input}
                        placeholder="Peso en kg"
                        min="18"
                        max="120"
                        type="number"
                        id="edad"
                        name="edad"
                        value={year}
                        onChange={req => setYear(req.target.value)}
                        required
                    />
                    { !isYearValid && year && <div className={styles.error}>La edad debe estar entre 18 y 120 años</div> }
                     {/* { !isWeightValid && weight && <div className={styles.error}>El peso debe estar entre 30 y 700 kg</div> } */}
                </div>
            </div>
            <div className={styles.containInput}>
            <label htmlFor="height">Especialidad</label>
                <div>  
                <img alt="stethoscope Icon" className={styles.iconInput} src={stethoscopeIcon} />
                <select required className={styles.input} onChange={(e)=>{setEspecial(e.target.value)}} value={especial}>
                
                    <option value="" disabled>
                        Selecciona una especialidad
                    </option>
                    {Object.entries(specialties).map(([key, value]) => (
                        <option key={key} value={value}>
                            {value}
                        </option>
                    ))}
                </select>
                </div>
            </div>
            <div className={styles.containInput}>
                {/* <p htmlFor="diseases">Enfermedades crónicas</p> */}
                 
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
