import {createStore} from 'redux';
import {createSlice,configureStore} from '@reduxjs/toolkit'

/* this code is importing from counterslice.js file OR we have written this code in that file and importing here
const initialCounterState = {counter:0,showCounter:true};

const counterSlice =createSlice({
  name:"counter",
  initialState:initialCounterState,
  reducers:{
    increment(state){
      state.counter++;
    },
    decrement(state){
      state.counter--;
    },
    increase(state,action){
      state.counter =state.counter+action.payload;
    },
    toggleCounter(state){
      state.showCounter=!state.showCounter;
    }
  }
})
*/

/* this code is importing from counterslice.js file OR we have written this code in that file and importing here
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

*/


/* without redux-tootkit 
export const INCREMENT ='increment';
export const DECREMENT ='decrement';
export const INCREASE ='increase';
export const TOGGLE ='toggle';

const counterReducer =(state=initialState,action)=>{
  if(action.type===INCREMENT){
    // absolutely must not do will working with redux
    // state.counter++;
    // return state;
    // use should never mutate the existing state  instead override it by returning a brand new state object because object and arrays are reference values in javascript is easy to accidently override and change the existing state
    // return {
     // counter:state ,
    //  showCounter:state.showCounter
    //}
    return {
      counter:state.counter+1,
      showCounter:state.showCounter
    }
  
  }
  if(action.type ===INCREASE){
    return {
      counter:state.counter+ action.amount,
      showCounter:state.showCounter
    }
  }
  if(action.type===DECREMENT){
    return {
      counter:state.counter-1,
      showCounter:state.showCounter
    }
  }
  if(action.type ===TOGGLE){
    return {
      showCounter: !state.showCounter,
      counter:state.counter
    }
  }
  return state;
}

const store =createStore(counterReducer);
*/

import counterSlice from './counterslice';
import authSlice from './authslice';
const store =configureStore({
  reducer:{
    counter:counterSlice,
    auth:authSlice
  }
});

// export const counterActions =counterSlice.actions;     // exported from the respective files
// export const authActions=authSlice.actions;      // exported from the respective files
export default store;

