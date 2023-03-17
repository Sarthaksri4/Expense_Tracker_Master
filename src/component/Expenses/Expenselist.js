
//  function Createloop(expense)
// {
// return(
//     <Expense 
//     title={expense.title} 
//     amount={expense.amount}
//     date={expense.date}
//     />
// );
// }

import React, { useState } from 'react';

// import Expense from './Expense.js';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter.js';
import ExpenseItem from './ExpenseItem.js';
import ExpensesChart from './ExpenseChart';

const Expenseslist = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseItem items={filteredExpenses}/>
      </Card>
    </div>
  );
};
export default Expenseslist;