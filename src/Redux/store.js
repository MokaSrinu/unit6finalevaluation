import {combineReducers,applyMiddleware} from "redux";
import {createStore} from "redux"
import {movielistReducer} from "./mainpage/reducer";
import {moviedescReducer} from "./moviedetails/reducer"
import thunk from "redux-thunk";
import { BookingReducer } from "./Moviebooking/reducer"; 

const rootReducer=combineReducers({
    Moviesdata:movielistReducer,
    Moviedesc:moviedescReducer,
    Booking:BookingReducer
})

export const store=createStore(rootReducer,applyMiddleware(thunk));

store.subscribe(()=>{
    console.log("state checking",store.getState());
})