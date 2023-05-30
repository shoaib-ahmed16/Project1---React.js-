import {createStore} from 'redux';

export const INCREMENT ='increment';
export const DECREMENT ='decrement';
export const INCREASE ='increase';
export const TOGGLE ='toggle';

const initialState = {counter:0,showCounter:true};

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

export default store;

