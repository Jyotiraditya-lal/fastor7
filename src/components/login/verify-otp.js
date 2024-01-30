import React, { useState } from "react";
import { useNavigate } from "react-router";


const Verify=()=>{

    const [isnum,setnum]=useState('')
    const navigate=useNavigate()

    const phone ='9818979450';
    const dial = '+91';

    const NumChangeHandler=(event)=>{
        setnum(event.target.value)
    }

    const SubmitHandler= async (event)=>{
        event.preventDefault()
        try{
            const res= await fetch('https://staging.fastor.in/v1/pwa/user/login',{
                method: 'POST',
                body: JSON.stringify({
                    phone: phone,
                    otp: isnum,
                    dial_code: dial
                }),
                headers: {'Content-Type': 'application/json'}
            })

            if(!res.ok){
                throw new Error('Something went wrong')
            }

            const data = await res.json()
            navigate('/resturants')
             
        }catch(err){
            console.log(err)
        }
    }


    return(
        <form onSubmit={SubmitHandler} className="form-container">
          <label>Verify OTP</label>
          <input type="number" value={isnum} onChange={NumChangeHandler} required /><br />
          <button type="submit">Verify OTP</button>
        </form>
    )
}

export default Verify