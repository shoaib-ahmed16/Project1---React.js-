import React from "react";
import useInput from "../hooks/use-input";

const isNotEmpty =value =>value.trim()!=="";
const isEmail =value =>value.includes('@');

const SimpleInput = (props) => {

  const {
    value:enteredFirstName,
    isValid:enteredFirstNameIsValid,
    hasError:firstNameInputHasError,
    valueChangeHandler:firstNameChangehandler,
    inputBlurHandler:firstNameBlurHandler,
    reset:resetFirstNameInput
  }=useInput(isNotEmpty);

    const {
    value:enteredLastName,
    isValid:enteredLastNameIsValid,
    hasError:lastNameInputHasError,
    valueChangeHandler:lastNameChangehandler,
    inputBlurHandler:lastNameBlurHandler,
    reset:resetLastNameInput
  }=useInput(isNotEmpty);
  const {
    value:enteredEmail,
    isValid:enteredEmailIsValid,
    hasError:emailInputHasError,
    valueChangeHandler:emailChangehandler,
    inputBlurHandler:emailBlurHandler,
    reset:resetEmailInput
  }=useInput(isEmail);

  let formIsValid =false;

  if(enteredFirstNameIsValid && enteredEmailIsValid && enteredLastNameIsValid){
    formIsValid=true;
  }
  const formSubmissionHandler =event =>{
    event.preventDefault();

    if(!enteredFirstNameIsValid || !enteredEmailIsValid ||!enteredLastNameIsValid){
      return
    }
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  }

  const firstNameInputClass =firstNameInputHasError ? 'form-control invalid':'form-control';
  const emailInputClass =emailInputHasError ? 'form-control invalid':'form-control';
  const lastNameInputClass =lastNameInputHasError? 'form-control invalid':'form-control';
  return (
    <form>
      <div className={firstNameInputClass}>
        <label htmlFor='name'>First Name</label>
        <input 
        type='text' 
        id='name'
        value={enteredFirstName}
        onChange={firstNameChangehandler}
        onBlur={firstNameBlurHandler} />
        {firstNameInputHasError && <p className="error-text">Please Enter First Name.</p>}
      </div>
       <div className={lastNameInputClass}>
        <label htmlFor='name'>Last Name</label>
        <input 
        type='text' 
        id='name'
        value={enteredLastName}
        onChange={lastNameChangehandler}
        onBlur={lastNameBlurHandler} />
        {lastNameInputHasError && <p className="error-text">Please Enter Last Name.</p>}
      </div>
      <div className={emailInputClass}>
        <label htmlFor='name'>Your Email</label>
        <input 
        type='text' 
        id='email' 
        onChange={emailChangehandler} 
        value={enteredEmail}
        onBlur={emailBlurHandler} />
        {emailInputHasError && <p className="error-text">Please Enter the Valid Email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid} onClick={formSubmissionHandler}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
