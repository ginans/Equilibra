import styles from "./../../../../../styles/authentication/login/login.module.scss";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import mailIcon from "../../../img/envelope-solid.svg";
import passwordIcon from "../../../img/lock-solid.svg";
import userIcon from "../../../img/usericon.svg";
import { RegisterContext } from "../registerClient.jsx"; // Importa el contexto desde el archivo Register
import { Fetch } from "../../../../fetch/fetch.js";
import checkIcon from "../../../img/circle-check-solid.svg"
import xMarkIcon from "../../../img/circle-xmark-solid.svg"
import infoIcon from "../../../img/circle-info-solid.svg"


const StepOneForm = () => {
    const { stepOneVisibility,existEmail,existName,setExistEmail, setExistName } = useContext(RegisterContext); // Accede al estado del contexto
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState(""); 
    const [isPasswordMatch, setIsPasswordMatch] = useState(true)
    const [isEmailValid, setIsEmailValid] = useState()
    const [hoverInfoEmail, setHoverInfoEmail] = useState(false)

    // Guarda los datos en sessionStorage
    useEffect(() => {
        if (name) sessionStorage.setItem("name", name);
        if (email) sessionStorage.setItem("email", email);
        if (password) sessionStorage.setItem("password", password);
        if (repeatPassword) sessionStorage.setItem("repeatPassword", repeatPassword);
    }, [name, email, password, repeatPassword]);

   // Valida los datos
useEffect(() => {
    const validate = () => {
        if (password && repeatPassword && password === repeatPassword) {
           return setIsPasswordMatch(true);
        } else {
           return setIsPasswordMatch(false);
        }
    };
    validate();
}, [password, repeatPassword]);


    // useEffect para el nombre
    useEffect(() => {
        const timeoutId = setTimeout( async() => {
            if (name) {
                const response = await Fetch(`http://localhost:8000/checkNameProfessional/${name}`, "GET")
                if(response){
                    const test = await response.json()  
                    if(test.exists){ 
                       return setExistName(true)
                    }
                    setExistName(false)
                }   
            }
        }, 300);

        // Limpiar el temporizador cuando cambie el nombre o el componente se desmonte
        return () => clearTimeout(timeoutId);
    }, [name]);

    useEffect(() => {
        const timeoutId = setTimeout( async() => {
            if (email) {
                const regexEmail = /^[a-zA-Z0-9._%+-]+@(gmail|hotmail|outlook|genstudents)\.(com|cl|org)$/;
                const resultRegexEmail = regexEmail.test(email);
                if(!resultRegexEmail){
                    console.error("Tu Correo no cumple con las condiciones")

                return setIsEmailValid(false)
                }
                setIsEmailValid(true)
                const response = await Fetch(`http://localhost:8000/checkEmailProfessional/${email}`, "GET")
                if(response){
                   
                    const test = await response.json()  
                    console.log("b",test)
                    if(test){ 
                        console.log("a",test.exists)
                       return setExistEmail(test.exists)
                    } 
                }   
            }
        }, 1000);

        // Limpiar el temporizador cuando cambie el nombre o el componente se desmonte
        return () => clearTimeout(timeoutId);
    }, [email]);


    // Carga los datos desde sessionStorage al inicializar el componente
    useEffect(() => {
        const existsName = sessionStorage.getItem('name');
        const existsEmail = sessionStorage.getItem('email');
        const existsPassword = sessionStorage.getItem('password');
        const existsRepeatPassword = sessionStorage.getItem('repeatPassword');
        existsName && setName(existsName);
        existsEmail && setEmail(existsEmail);
        existsPassword && setPassword(existsPassword);
        existsRepeatPassword && setRepeatPassword(existsRepeatPassword);
    }, []);

    return (
        // 
        <div style={{ visibility: !stepOneVisibility ? "hidden" : "visible", position: "absolute", width: "100%" }}>
            <div className={styles.containInput}>
                <label htmlFor="name">Nombre</label>
                <div>
                    <img alt="IconEmail" className={styles.iconInput} src={userIcon} />
                    <input className={styles.input} placeholder="Nombre completo" type="text" value={name} id="name" name="name" onChange={req => setName(req.target.value)} required />
                    { existName && name ? 
                        <img className={styles.iconCircle}  src={xMarkIcon}/>
                        :  !existName && name ?
                        <img className={styles.iconCircle}  src={checkIcon}/> : null
                    }
                </div>
                {existName && <div className={styles.error}>Este nombre ya existe</div>}
            </div>
            <div className={styles.containInput}>
                <div className={styles.emailInfo}>
                    <label htmlFor="email">Correo electronico</label>
                    <img onMouseEnter={()=> setHoverInfoEmail(true)} onMouseLeave={()=> setHoverInfoEmail(false)} src={infoIcon} className={styles.infoIcon}/>  
                </div>
                <div>  
                    <img alt="IconEmail" className={styles.iconInput} src={mailIcon} />
                    
                    <input className={styles.input} placeholder="Correo electronico" type="email" value={email} id="email" name="email" onChange={req => setEmail(req.target.value)} required />
                    { hoverInfoEmail && <p className={styles.infoEmailHover}> Correos aceptados: gmail, outlook, hotmail .com, .es, .org</p>  }
                    
                    {  email && !isEmailValid || existEmail? 
                        <img className={styles.iconCircle}  src={xMarkIcon}/>
                        :  !existEmail && email && isEmailValid?
                        <img className={styles.iconCircle}  src={checkIcon}/> : null
                    }
                </div>
                { !isEmailValid && email && <div className={styles.error}>El correo no cumple las condiciones</div> }
                { existEmail && <div className={styles.error}>Este correo ya existe</div> }
            </div>
            <div className={styles.containInput}>
                <label htmlFor="password">Contraseña</label>
                {/* {!isPasswordMatch && password && repeatPassword && <div className={styles.error}>Las contraseñas no coinciden</div>} */}
                <div>
                    <img alt="IconContraseña" className={styles.iconInput} src={passwordIcon} />
                    <input className={styles.input} placeholder="Contraseña" type="password" id="password" name="password" value={password} onChange={req => setPassword(req.target.value)} required />
                    { password && <img className={styles.iconCircle}  src={checkIcon}/> }
                </div>
            </div>
            <div className={styles.containInput}>
                <label htmlFor="Repite contraseña">Repetir contraseña </label> 
                {!isPasswordMatch && password && repeatPassword && <div className={styles.error}>Las contraseñas no coinciden</div>}
                <div>
                    <img alt="IconContraseña" className={styles.iconInput} src={passwordIcon} /> 
                    <input className={styles.input} placeholder="Contraseña" type="password" id="Repite contraseña" name="password" value={repeatPassword} onChange={req => setRepeatPassword(req.target.value)} required />
                    { password && repeatPassword && !isPasswordMatch ? 
                        <img className={styles.iconCircle}  src={xMarkIcon}/>
                        :  password && repeatPassword && isPasswordMatch ?
                        <img className={styles.iconCircle}  src={checkIcon}/> : null
                    }
                </div>
            </div>
        </div>
    );
}

export default StepOneForm;
