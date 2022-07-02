import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import {movielist} from "../Redux/mainpage/action";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Home=()=>{
    const {Moviesdata,isLoading,isError,isAuth}=useSelector((state)=>state.Moviesdata);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    useEffect(()=>{
       dispatch(movielist("id"));
    },[dispatch]);

    if(!isAuth){
       navigate("/login")
    }

    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(isError){
       return <h1>Some Thing Went Wrong</h1>
    }
    // console.log(Moviesdata)
    // Moviesdata[0].map((Movie)=>{
    //      console.log(Movie.poster_path,Movie.title,Movie)       
    // })
    if(Moviesdata.length!=0){
        return (
            <div >
               {
                 Moviesdata[0].map((Movie)=>(
                    <div style={{border:"1px solid #ccc",padding:"10px"}} key={movielist.id}>
                       <img src={Movie.poster_path} alt="" height="400px" width="400px" />
                       <p>{Movie.title}</p>
                       <button><Link to={`/movies/${Movie.id}`}>More</Link></button>
                    </div>
                 ))
               }
            </div>
        )
    }
    
}