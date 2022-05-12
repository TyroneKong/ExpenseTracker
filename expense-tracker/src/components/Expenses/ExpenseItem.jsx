import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.scss";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title); // useState returns and array[item to change and setState function]

  const clickHandler = () => {
    setTitle("Updated!"); // setTitle is a function which calls the component function again, and re-evaluates JSX!!
    console.log(title); // useState is on a per component instance basis
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;

// we imported the expenseDate component to use in our JSX
// we imported Card to use the Card component