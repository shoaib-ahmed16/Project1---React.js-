import {createSlice,configureStore} from '@reduxjs/toolkit'
const intialAuthState ={
  isAuthenicated:false
}
const authSlice=createSlice({
  name:'auth',
  initialState:intialAuthState,
  reducers:{
    login(state){
      state.isAuthenicated =true;
    },
    logout(state){
       state.isAuthenicated =false;
    }
  }
})
export const authActions=authSlice.actions;
export default authSlice.reducer;