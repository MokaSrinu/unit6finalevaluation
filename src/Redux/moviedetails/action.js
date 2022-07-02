export const Movie_Details_Loading="Movie_Details_Loading";
export const Movie_Details_Success="Movie_Details_Success";
export const Movie_Details_Failure="Movie_Details_Failure";




export const moviedetailsLoading=()=>({
  type:Movie_Details_Loading
});
export const moviedetailsSuccess=(payload)=>({
    type:Movie_Details_Success,
    payload
  });
  export const moviedetailsError=()=>({
    type:Movie_Details_Failure
  });
  
  
  export const moviedetails=({id})=>
    async(dispatch)=>{
        try {
            dispatch(moviedetailsLoading());
            let res=await fetch(`http://localhost:8080/movies/${id}`);
            let data=await res.json();
            dispatch(moviedetailsSuccess(data));
        } catch (error) {
            dispatch(moviedetailsError())
        }
    };
    