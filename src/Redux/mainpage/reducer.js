import {Movie_Data_Failure,Movie_Data_Loading,Movie_Data_Success,Is_Authenticated} from "./action";

export const movielistReducer=(store={Moviesdata:[],isLoading:false,isError:false,isAuth:false},{type,payload})=>{
    switch(type){
        case Movie_Data_Loading:
            return{
                ...store,
                isLoading:true,
                isError:false,
                Moviesdata:[]
            };
        case  Movie_Data_Success:
            return{
                ...store,
                isLoading:false,
                isError:false,
                Moviesdata:[payload]
            };
        case  Movie_Data_Failure:
            return{
                ...store,
                isLoading:false,
                isError:true,
                Moviesdata:[]
            }; 
        case   Is_Authenticated:
            return{
               ...store,
               isAuth:payload
            };  
        default:
            return store;         
    }
}