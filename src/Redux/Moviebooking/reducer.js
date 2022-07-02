import {Booking_Data_Failure,Booking_Data_Loading,Booking_Data_Success} from "./action";

export const BookingReducer=(store={Booking:[],isLoading:false,isError:false},{type,payload})=>{
    switch(type){
        case Booking_Data_Loading:
            return{
                ...store,
                isLoading:true,
                isError:false,
                Booking:[]
            };
        case  Booking_Data_Success:
            return{
                ...store,
                isLoading:false,
                isError:false,
                Booking:[payload]
            };
        case  Booking_Data_Failure:
            return{
                ...store,
                isLoading:false,
                isError:true,
                Booking:[]
            }; 
        default:
            return store;         
    }
}