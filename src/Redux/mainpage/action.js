export const Movie_Data_Loading="Movie_Data_Loading";
export const Movie_Data_Success="Movie_Data_Success";
export const Movie_Data_Failure="Movie_Data_Failure";
export const Is_Authenticated="Is_Authenticated";



export const moviedataLoading=()=>({
  type:Movie_Data_Loading
});
export const moviedataSuccess=(payload)=>({
    type:Movie_Data_Success,
    payload
  });
  export const moviedataError=()=>({
    type:Movie_Data_Failure
  });
  export const isauthenticated=(payload)=>({
    type:Is_Authenticated,
    payload
  })
  
  

  export const movielist=({id})=>
    async(dispatch)=>{
        try {
            dispatch(moviedataLoading());
            let res=await fetch(`http://localhost:8080/movies`);
            let data=await res.json();
            dispatch(moviedataSuccess(data));
        } catch (error) {
            dispatch(moviedataError())
        }
    };
    
  
