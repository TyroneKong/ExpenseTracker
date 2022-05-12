import "./Card.scss";

function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;

// props children allow you to create wrapper components. This allows the jsx contained witin the card component (see ExpenseItem) to be affected by Card component