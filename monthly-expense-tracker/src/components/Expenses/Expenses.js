import ExpenseItem from './ExpenseItem'
import React,{useState} from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from '../NewExpense/ExpressFilter'
const Expenses = (props) => {
  const [filteredYear,setFilteredYear]=useState('2019')
  const filterChangeHandler =(selectedyear) =>{
    // console.log('Express.js');
    setFilteredYear(selectedyear);
    // console.log(selectedyear);
  }
  return (
    <div>
      <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {props.data.map(expense =><ExpenseItem
      key={expense.id}
      title={expense.title} amount={expense.amount} date={expense.date}/>)}
      {/* <ExpenseItem
        title={props.data[0].title}
        amount={props.data[0].amount}
        date={props.data[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.data[1].title}
        amount={props.data[1].amount}
        date={props.data[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.data[2].title}
        amount={props.data[2].amount}
        date={props.data[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.data[3].title}
        amount={props.data[3].amount}
        date={props.data[3].date}
  ></ExpenseItem> */ }
    </Card>
    </div>
    
  )
}
export default Expenses
