export const Booking_Data_Loading="Booking_Data_Loading";
export const Booking_Data_Success="Booking_Data_Success";
export const Booking_Data_Failure="Booking_Data_Failure";


export const bookingdataLoading=()=>({
  type:Booking_Data_Loading
});
export const bookingdataSuccess=(payload)=>({
    type:Booking_Data_Success,
    payload
  });
  export const bookingdataError=()=>({
    type:Booking_Data_Failure
  });
  

  export const bookeddata=({id})=>
    async(dispatch)=>{
        try {
            dispatch(bookingdataLoading());
            let res=await fetch(`http://localhost:8080/moviesBooked`);
            let data=await res.json();
            dispatch(bookingdataSuccess(data));
        } catch (error) {
            dispatch(bookingdataError())
        }
    };
    