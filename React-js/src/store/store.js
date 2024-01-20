import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";
const STORE = configureStore({ reducer: { counter: CounterSlice } });
export default STORE;
