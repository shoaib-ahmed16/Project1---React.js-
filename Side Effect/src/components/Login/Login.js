import React, { useState,useEffect,useReducer,useContext,useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input'
import AuthContext from '../../Store/Auth-context'


const emailReducer =(state,action)=>{
  if(action.type ==="USER_INPUT"){
    return {value:action.val,isValid:action.val.includes('@')}
  }
  if(action.type==="INPUT_BLUR") {
    return {value:state.value,isValid:state.value.includes('@')}
  }
  return {value:'',isValid:false};
};
const passwordReducer =(state,action)=>{
 if(action.type ==="USER_INPUT"){
    return {value:action.val,isValid:action.val.trim().length>6}
  }
  if(action.type==="INPUT_BLUR") {
    return {value:state.value,isValid:state.value.trim().length>6}
  }
  return {value:'',isValid:false};
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState,dispatchEmail] = useReducer(emailReducer,
    {value:'',isValid:null});

  const [passwordState,dispatchPassword] = useReducer(passwordReducer,
    {value:'',isValid:null});

  const authCtx =useContext(AuthContext)

  const emailInputRef= useRef();

  const passwordInputRef =useRef();

  const {isValid: emailIsValid} =emailState;

  const {isValid:passwordIsValid} =passwordState;

  useEffect(()=>{
   const timer = setTimeout(()=>{
    console.log("checking validity!");
    setFormIsValid(
          emailState.isValid && passwordState.isValid
        );
    },500);
    return ()=>{
      console.log("clean Up !");
      clearTimeout(timer);
    };
  },[emailIsValid,passwordIsValid])

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({type:"USER_INPUT",val:event.target.value})
    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.isValid
    // );
  };

    const passwordChangeHandler = (event) => {
    dispatchPassword({type:'USER_INPUT',val:event.target.value})
    // setEnteredPassword(event.target.value);/
    // setFormIsValid(
    //   emailState.value.trim().length > 6 && emailState.isValid
    // );
  };
  
  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
     dispatchEmail({type:"INPUT_BLUR"})
  };

  const validatePasswordHandler = () => {
       dispatchPassword({type:'INPUT_BLUR'})
    // setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      authCtx.onLogin(emailState.value,passwordState.value)
    }else if(!emailIsValid){
      emailInputRef.current.focus();
    }else{
      passwordInputRef.current.focus();
    }

    authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input ref ={emailInputRef} id='email' label='E-Mail' type='email' isValid={emailIsValid} value={emailState.value} onChange={emailChangeHandler}
        onBlur={validateEmailHandler}/>

        <Input ref ={passwordInputRef} id='password' label='Password' type='password' isValid={emailIsValid} value={passwordState.value} onChange={passwordChangeHandler}
        onBlur={validatePasswordHandler}/>
        <div className={classes.actions}>

        <Button type="submit" className={classes.btn}>
          Login
        </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
