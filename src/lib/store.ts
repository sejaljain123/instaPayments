import { configureStore } from "@reduxjs/toolkit";
import checkoutReducer from "./reducers/checkoutSlice";

const store = configureStore({
    reducer: {
       checkout: checkoutReducer,
    },
});


export default store;