import {Movie_Details_Failure,Movie_Details_Loading,Movie_Details_Success} from "./action";

export const moviedescReducer=(store={Moviedesc:[],isLoading:false,isError:false},{type,payload})=>{
    switch(type){
        case Movie_Details_Loading:
            return{
                ...store,
                isLoading:true,
                isError:false,
                Moviedesc:[]
            };
        case  Movie_Details_Success:
            return{
                ...store,
                isLoading:false,
                isError:false,
                Moviedesc:[payload]
            };
        case  Movie_Details_Failure:
            return{
                ...store,
                isLoading:false,
                isError:true,
                Moviedesc:[]
            }; 
        default:
            return store;         
    }
}