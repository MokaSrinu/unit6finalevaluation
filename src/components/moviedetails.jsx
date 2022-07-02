import React from "react"
import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { moviedetails } from "../Redux/moviedetails/action";
import { useEffect } from "react";
export const Moviedetails=()=>{
    const [name,setName]=React.useState("");
    const [seatno,setSeatno]=React.useState("");
    let movieid=useParams();
    const {Moviedesc,isLoading,isError}=useSelector((state)=>state.Moviedesc);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(moviedetails(movieid));
    },[dispatch]);
   
    const handlebooking=(movieid)=>{
        const payload={name,seatno};
        fetch("http://localhost:8080/moviesBooked",{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((res)=>res.json())
        .then((res)=>{
               // dispatch(isauthenticated(true));
        })
        .catch((err)=>{
            console.log(err);
        });
    }
    console.log(Moviedesc,isLoading,isError)
    if(isLoading){
        return <h1>Loading ...</h1>
    }
    else if(isError){
        return <h1>SomeThing Went Wrong </h1>
    }
    if(Moviedesc.length!=0){
        return (
            <div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <div style={{width:"40%",padding:"10px"}} >
               <img src={Moviedesc[0].poster_path} alt="" width="100%" height="auto" />
               <p>Title: {Moviedesc[0].title}</p>
               <p>id: {Moviedesc[0].id}</p>
               <p>original_language: {Moviedesc[0].original_language}</p>
               <p>original_title: {Moviedesc[0].original_title}</p>
               <p>overview: {Moviedesc[0].overview}</p>
               <p>popularity: {Moviedesc[0].popularity}</p>
               <p>release_date: {Moviedesc[0].release_date}</p>
               <p>vote_average: {Moviedesc[0].vote_average}</p>
               <p>vote_count: {Moviedesc[0].vote_count}</p>
            </div>

            <div>
                <h2>Book Tickets</h2>
                <label>Name:
                <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
            </label>
            <br />
            <label>
                SeatNo:
                <input type="text" placeholder="seatno" value={seatno} onChange={(e)=>setSeatno(e.target.value)} />
            </label>
            <button onClick={handlebooking}>LOGIN</button>
            </div>
            </div>
           
        )
    }
    
}