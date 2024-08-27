import { useState,useEffect } from "react"

const HomewithoutLogin = () => {
    const [numb,setNumb] =useState(0)
    return(
        <div>  
            <button onClick={()=>setNumb(numb++)}></button> 
        </div>
    )
}
export default HomewithoutLogin