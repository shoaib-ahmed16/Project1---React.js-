import React from 'react'

import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {
  const SaveExpenseDataHandler =(enteredExpenseData)=>{
    const expenseData ={
      id:Math.random().toString(),
      ...enteredExpenseData
    }
    props.onAddExpense(expenseData)
  }
 
}

export default NewExpense
