import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom"
import styles from "../../styles/authentication/layoutAuthentication.module.scss"
import logo from "./img/logo.svg"
import subLogo from "./img/subLogo.svg"
const LayoutAuthentication = ()=>{
    const navigate = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(token){
            return navigate("/")
        }
    },[])

    return(
        <div className={styles.container}>
            <div className={styles.ContainLogos}>
                <img src={logo} alt='logo Equilibra'/>
                <img className={styles.subLogo} src={subLogo} alt='subLogo Equilibra'/>
                <p>“Equilibra tu cuerpo, revitaliza tu vida”</p>
            </div>
            <Outlet/>
        </div>
    )
}

export default LayoutAuthentication;