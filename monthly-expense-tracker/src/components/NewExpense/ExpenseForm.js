import React, { useState } from 'react'

import './ExpenseForm.css'
const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState('')
  // const [enteredDate, setEnteredDate] = useState('')
  // const [enteredAmount, setEnteredAmount] = useState('')
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  })
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  }
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  }
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  }
  return (
    <form>
      <div className='new-expense__controls'>
        <div className='expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} />
        </div>
        <div className='expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
          />
        </div>
        <div className='expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2023-01-01'
            step='2023-12-31'
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