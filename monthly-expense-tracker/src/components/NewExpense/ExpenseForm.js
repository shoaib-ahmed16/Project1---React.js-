import React, { useState } from 'react'

import './ExpenseForm.css'
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredDate, setEnteredDate] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // })
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredTitle:event.target.value
    // })
    /*why should we like this instance of above function in many cases both work fine but keep in mind that i mentions that  Reacts schedules state updates.it doesn't perform them instantly and therefore, theoretically,if you schedule a lot of state updates at the same time, you could be depending on an outdated or incorrect state snapshot if you use this approch. if we use below approch, React will guarantee that the state snapshot it gives you here in this inner function will always be the lastest state snapshot, keeping all scheduled state updates in mind.this is the safest way to ensure that you always operate on the latest state snapshot.So you should use this function syntax here whenever your state update depends on the previous state. */
    // setUserInput((prevState)=>{
    //   return {...userInput,
    //   enteredTitle:event.target.value}
    // })
  }
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
    //  setUserInput({
    //   ...userInput,
    //   enteredDate:event.target.value
    // })
    //  setUserInput((prevState)=>{
    //   return {...userInput,
    //   enteredDate:event.target.value}
    // })
  }
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
    //  setUserInput({
    //   ...userInput,
    //   enteredAmount:event.target.value
    // }) 
    // setUserInput((prevState)=>{
    //   return {...userInput,
    //   enteredAmount:event.target.value}
    // })
  }

  const submitHandler =(event)=>{
    event.preventDefault();
    const expenseData ={
      title:enteredTitle,
      amount:enteredAmount,
      date:new Date(enteredDate)
    }
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
  }
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className='expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2023-01-01'
            step='2023-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className='new-expense__actions'>
          <button type='submit'>Add Expense</button>
        </div>
      </div>
    </form>
  )
}

export default ExpenseForm
