import { createAction } from "@reduxjs/toolkit";


// export const createFilter = (value)=>({type:FILTER, payload:value});

export const createFilter = createAction(FILTER)