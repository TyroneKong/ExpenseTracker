import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.scss";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {   id: Math.random().toString(),
      ...enteredExpenseData,
   
    };
   
    // by passing in expenseData we are lifting the state up to App.js
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;