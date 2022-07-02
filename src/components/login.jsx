import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {isauthenticated} from "../Redux/mainpage/action"

export const Login=()=>{
    const [email,setEmail]=React.useState("");
    const [password,setPassword]=React.useState("");
    const navigate=useNavigate();
    const {isAuth}=useSelector((state)=>state.Moviesdata);
    const dispatch=useDispatch();
    console.log(isAuth);
    const handlelogin=()=>{
        const payload={email,password};
        fetch("https://reqres.in/api/login",{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((res)=>res.json())
        .then((res)=>{
            if(res.token){
                dispatch(isauthenticated(true));
                navigate("/");
            }
        })
        .catch((err)=>{
            console.log(err);
        });
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <label>Email
                <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </label>
            <br />
            <label>
                Password
                <input type="text" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </label>
            <button onClick={handlelogin}>LOGIN</button>
        </div>
    )
}