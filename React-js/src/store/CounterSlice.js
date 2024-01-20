import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstace from "../apis/AxiosInstace";

const CounterSlice = createSlice({
  name: "counter",
  initialState: { count: 0, apiData: [] },
  reducers: {
    increment: (state, action) => {
      state.count++;
    },
    decrement: (state, action) => {
      state.count--;
    },
    reset: (state, action) => {
      state.count = 0;
    },
  },
  extraReducers: builder => {
    builder.addCase(GetApiProducts.fulfilled, (state, action) => {
      state.apiData = action.payload;
    });
  },
});

export default CounterSlice.reducer;
export const { increment, decrement } = CounterSlice.actions;
export const GetApiProducts = createAsyncThunk(
  "asyncThunKReducer",
  async () => {
    const response = await AxiosInstace.get(`/products`);
    let result = response.data;
    return result;
  }
);
