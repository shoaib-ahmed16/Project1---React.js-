import React,{useState,useEffect} from "react";
const SimpleInput = (props) => {

  const [enteredName,setEnterName] =useState("");
  const [enteredNameTouched,setEnterNameTouched] =useState(false);

  const enteredNameIsValid = enteredName.trim() !=='';
  const nameInputIsValid =!enteredNameIsValid && enteredNameTouched;
  
  const formIsValid =false;
  if(enteredNameIsValid){
    formIsValid=true;
  }
     
  
  const nameInputChangehandler =(event)=>{
  setEnterName(event.target.value);
  }

 const nameInputBlurHandler =event =>{
    setEnterNameTouched(true);
  }
  const formSubmissionHandler =event =>{
    event.preventDefault();

    setEnterNameTouched(true);

    if(!enteredNameIsValid){
      return
    }

   // nameInputRef.current.value ="" this directly manupulating the dom this is not according to the concept of React which work on virtul dom manupulation.
    setEnterName('')
    setEnterNameTouched(false);
  }

  const nameInputClass =nameInputIsValid ? 'form-control invalid':'form-control';
  return (
    <form>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangehandler} value={enteredName} onBlur={nameInputBlurHandler} />
        {nameInputIsValid && <p className="error-text">Name Must Not Be Empty.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid} onClick={formSubmissionHandler}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
