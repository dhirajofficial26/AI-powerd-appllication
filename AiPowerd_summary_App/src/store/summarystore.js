import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";


const summaryStore=configureStore({
    reducer:{
        [articleApi.reducerPath]:articleApi.reducer

    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(articleApi.middleware)
})
export default summaryStore;