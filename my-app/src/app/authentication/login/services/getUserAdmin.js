import { Fetch } from "../../../fetch/fetch";

const getUserAdmin = async (email, password) => {
    if (!email || !password) {
        return console.error("Faltan datos");
    }

    const result = await Fetch("http://localhost:8000/loginUserAdmin", "POST", {  email:email, password:password });

    if (result.status === 200) {
        const token = await result.json();
        if (token) {
            sessionStorage.clear();
            localStorage.setItem("tokenAdmin", token.token);
        }
        return true;
    }
};

export default getUserAdmin;
