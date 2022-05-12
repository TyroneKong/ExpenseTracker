import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.scss";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesChart from "./ExpensesChart";


function Expenses(props) {
  //always set state in the component function
  const [filteredYear, setFilteredYear] = useState("2021"); // 2021 is the initial value


const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString()=== filteredYear
})
console.log(filteredExpenses)


  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        <ExpensesChart expenses={filteredExpenses}/>
        {filteredExpenses.length ===0 ? <p>No expenses found</p> :
        
        
        filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        
        }
      
      </Card>
    </div>
  );
}

export default Expenses;

// to get access to the object items we import ExpenseItem
// we use props to pass data from one component to another, we cannot skip components
// we also imported Card here to use the component
// every time an ExpenseItem is called a new state is set and managed independantly by React