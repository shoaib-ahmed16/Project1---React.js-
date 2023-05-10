import React,{useRef,useState,useEffect} from "react";
const SimpleInput = (props) => {

  const nameInputRef =useRef();

  const [enteredName,setEnterName] =useState("");

  const [enteredNameIsValid,setEnterNameIsValid] =useState(false);

  const [enteredNameTouched,setEnterNameTouched] =useState(false);

  const nameInputBlurHandler =event =>{
    setEnterNameTouched(true);
     if(enteredName.trim()===""){
      setEnterNameIsValid(false);
      return;
    }
  }

  const nameInputChangehandler =(event)=>{
  setEnterName(event.target.value);
  }

  useEffect(()=>{
    if(enteredNameIsValid){

      console.log("Name Input is Valid!");

    }
  },[enteredNameIsValid]);

  const formSubmissionHandler =event =>{

    event.preventDefault();

    setEnterNameTouched(true);

    if(enteredName.trim()===""){
      setEnterNameIsValid(false);
      return;
    }
    setEnterNameIsValid(true);

    console.log(enteredName);

    const enterValue =nameInputRef.current.value

    console.log("useRef",enterValue);
   // nameInputRef.current.value ="" this directly manupulating the dom this is not according to the concept of React which work on virtul dom manupulation.
    setEnterName('')
  }

  const nameInputIsValid =!enteredNameIsValid && enteredNameTouched;

  const nameInputClass =nameInputIsValid ? 'form-control invalid':'form-control';
  return (
    <form>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' onChange={nameInputChangehandler} value={enteredName} onBlur={nameInputBlurHandler} />
        {nameInputIsValid && <p className="error-text">Name Must Not Be Empty.</p>}
      </div>
      <div className="form-actions">
        <button onClick={formSubmissionHandler}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
