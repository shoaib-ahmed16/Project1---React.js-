import './ExpenseItem.css'
import React, { useState } from 'react'
import '../UI/Card.css'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title)
  const [date, setDate] = useState(props.date)
  const [amount, setAmount] = useState(props.amount)
  const clickHandler = () => {
    setTitle('Updated!')
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate subDate={date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem
