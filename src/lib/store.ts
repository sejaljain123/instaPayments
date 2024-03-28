import { configureStore } from "@reduxjs/toolkit";
import checkoutReducer from "./reducers/checkoutSlice";
import themeReducer from "./reducers/themeSlice";

const store = configureStore({
    reducer: {
       checkout: checkoutReducer,
       theme: themeReducer,
    },
});


export default store;