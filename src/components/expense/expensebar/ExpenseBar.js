import "./ExpenseBar.css";
import Calender from "./calender/Calender";

function ExpenseBar(props) {
  return (
    <div className="expense-bar">
      <div className="calender-item-container">
        <Calender date={props.date}></Calender>
        <span className="expense-details" id="item">
          {props.title}
        </span>
      </div>
      <span className="expense-details" id="cost">
        {props.amount}&#8377;
      </span>
    </div>
  );
}

export default ExpenseBar;
