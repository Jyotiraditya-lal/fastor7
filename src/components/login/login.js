import React, { useState } from "react";
import './login.css'
import { useNavigate } from "react-router";



const Login=()=>{

    const [isnum,setnum]=useState('')
    const navigate=useNavigate()
    
    const dial= '+91'

    const NumChangeHandler=(event)=>{
        setnum(event.target.value)
    }


    const SubmitHandler= async (event)=>{
        event.preventDefault()
        try{
            const res= await fetch('https://staging.fastor.in/v1/pwa/user/register',{
                method: 'POST',
                body: JSON.stringify({
                    phone: isnum,
                    dial_code: dial
                }),
                headers: {'Content-Type': 'application/json'}
            })

            if(!res.ok){
                throw new Error('Something went wrong')
            }

            navigate('/verify') 
        }catch(err){
            console.log(err)
        }
        
    }

    return(
        <form onSubmit={SubmitHandler} className="form-container">
            <label>Enter your mobile number</label>
            <input type="number" value={isnum} onChange={NumChangeHandler} required /><br />
            <button type="submit">Get OTP</button>
            
        </form>
    )
}

export default Login