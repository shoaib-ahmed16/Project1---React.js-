import React,{useState,useReducer} from "react";

const  initialInputState ={
    value:'',
    isTouched:false
  }
const inputStateReducer =(state,action)=>{
  if(action.type="INPUT"){
    return {value:action.value,isTouched:state.isTouched}
  }
  if(action.type="BLUR"){
    return {value:state.value,isTouched:true}
  }
  if(action.type="RESET"){
    return {value:'',isTouched:false}
  }
  return inputStateReducer;
}
const useInput =(validateValue)=>{

  const [inputState,dispatch]=useReducer(inputStateReducer,initialInputState)
  const valueIsValid =validateValue(inputState.value);
  const hasError =!valueIsValid && inputState.isTouched;

  //  const [enteredValue,setEnteredValue] =useState("");
  // const [isTouched,setIsTouched] =useState(false);

  //const valueIsValid=validateValue(enteredValue);
  //const hasError =!valueIsValid && isTouched;

  const valueChangeHandler =(event)=>{
    // setEnteredValue(event.target.value);
    dispatch({type:"INPUT",value:event.target.value});
  }
  const inputBlurHandler=(event)=>{
    // setIsTouched(true);
     dispatch({type:"BLUR"});
  }

  const reset=()=>{
    // setEnteredValue('');
    // setIsTouched(false)
    dispatch({type:"RESET"});
  }

  // return {
  //   value:enteredValue,
  //   isValid:valueIsValid,
  //   hasError,
  //   valueChangeHandler,
  //   inputBlurHandler,
  //   reset
  // }
   return {
    value:inputState.value,
    isValid:valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  }
}

export default useInput;