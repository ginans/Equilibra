import styles from "./../../../styles/authentication/login/login.module.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import mailIcon from "../img/envelope-solid.svg";
import passwordIcon from "../img/lock-solid.svg";
import checkIcon from "../img/circle-check-solid.svg" 
import getUserClient from "./services/getUser";
import getUserProfession from "./services/getUserProfessional";
import { useNavigate } from "react-router-dom";



const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState(""); 
    const navigate = useNavigate()
    const [isChecked, setIsChecked] = useState(false); 
    const getUser = async(e)=>{
        e.preventDefault() 
        if(!isChecked){
            const dataUser = await getUserClient(email, password)
            if(dataUser){
                return navigate("/")
            }
            return console.error("error")
        }
        const dataUser = await getUserProfession(email, password)
            if(dataUser){
                return navigate("/")
            }
            return console.error("error")
       
    }
    // Guarda los datos en sessionStorage
    useEffect(() => { 
        if (email) sessionStorage.setItem("email", email); 
    }, [email]);
 

    // useEffect(() => {
    //     const timeoutId = setTimeout( async() => {
    //         if (email) {
    //             const regexEmail = /^[a-zA-Z0-9._%+-]+@(gmail|hotmail|outlook|genstudents)\.(com|cl|org)$/;
    //             const resultRegexEmail = regexEmail.test(email);
    //             if(!resultRegexEmail){
    //                 console.error("Tu Correo no cumple con las condiciones")

    //             return setIsEmailValid(false)
    //             }
    //             setIsEmailValid(true)
    //             const response = await Fetch(`http://localhost:8000/checkEmail/${email}`, "GET")
    //             if(response){
                   
    //                 const test = await response.json()  
    //                 console.log("b",test)
    //                 if(test){ 
    //                     console.log("a",test.exists)
    //                    return setExistEmail(test.exists)
    //                 } 
    //             }   
    //         }
    //     }, 1000);

    //     // Limpiar el temporizador cuando cambie el nombre o el componente se desmonte
    //     return () => clearTimeout(timeoutId);
    // }, [email]);


    // Carga los datos desde sessionStorage al inicializar el componente
    useEffect(() => { 
        const existsEmail = sessionStorage.getItem('email'); 
    }, []);

    return (
        // style={{ visibility: !stepOneVisibility ? "hidden" : "visible", position: "absolute", width: "100%" }}
        <div > 
            <h1>¡Bienvenido de nuevo!</h1>
            <form onSubmit={getUser}>
            <div className={styles.containInput}>
                <div>
                    <label htmlFor="email">Correo electronico</label>
                    
                </div>
                <div>  
                    <img alt="IconEmail" className={styles.iconInput} src={mailIcon} />
                    
                    <input className={styles.input} placeholder="Correo electronico" type="email" value={email} id="email" name="email" onChange={req => setEmail(req.target.value)} required />
                      
                </div> 
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
            <div style={{margin:"2rem 0"}}>
            <input
                id="professional-checkbox"
                style={{ margin: "0 1rem" }}
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                />
                <label htmlFor="professional-checkbox">
                Soy un profesional
                </label>

              
                </div>
                <button className={styles.buttonEnter}  type="submit">Iniciar sesión</button>
            </form>
            <div className={styles.containLinks}>
                <Link to="/registerClient">¿Todavía no tienes una cuenta? Regístrate</Link>
                <Link to="/registerProfessional">¿Eres un profesional? Regístrate aquí</Link>
            </div>
        </div>
    );
}

export default Login;
