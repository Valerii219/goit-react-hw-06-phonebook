import { FILTER } from "./types";

export const createFilter = (value)=>({type:FILTER, payload:value});
