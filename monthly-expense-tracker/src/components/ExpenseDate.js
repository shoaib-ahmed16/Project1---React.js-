function ExpenseDate(props) {
  const month = props.subDate.toLocaleString('en-US', { month: 'long' })
  const day = props.subDate.toLocaleString('en-US', { day: '2-digit' })
  const year = props.subDate.getFullYear()
  return (
    <div>
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  )
}

export default ExpenseDate
