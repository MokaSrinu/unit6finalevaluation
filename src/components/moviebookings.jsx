import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { bookeddata } from "../Redux/Moviebooking/action";
import { useNavigate } from "react-router-dom";
export const Moviebookings=()=>{
    const {Booking,isLoading,isError}=useSelector((state)=>state.Booking);
    const {isAuth}=useSelector((state)=>state.Moviesdata)
    const dispatch=useDispatch();
    const navigate=useNavigate();
    useEffect(()=>{
       dispatch(bookeddata("id"));
    },[dispatch]);

    // if(!isAuth){
    //   navigate("/")
    // }

    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(isError){
       return <h1>Some Thing Went Wrong</h1>
    }
    console.log("data of booking",Booking)
    // Moviesdata[0].map((Movie)=>{
    //      console.log(Movie.poster_path,Movie.title,Movie)       
    // })
    if(Booking.length!=0){
        return (
            <div >
               {
                  Booking[0].map((item)=>(
                    <div style={{border:"1px solid #ccc",padding:"10px"}} key={Booking.id}>
                      <p>Name:{item.name}</p>
                       <p>Seat no:{item.seatno}</p>
                    </div>
                 ))
               }
            </div>
        )
    }
}