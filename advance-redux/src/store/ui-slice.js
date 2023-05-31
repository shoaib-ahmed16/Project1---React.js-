import { createSlice } from "@reduxjs/toolkit";
const intialUiState ={
  cartIsVisible:false,
}
const uiSlice =createSlice({
  name:'ui',
  intialState:intialUiState,
  reducers:{
    toggle(state){
      state.cartIsVisible =!state.cartIsVisible;
    }
  }
})
export const uiActions =uiSlice.actions
export default uiSlice;