import "./Calender.css";
function Calender(props) {
  let month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    props.date
  );

  return (
    <div className="calender-container">
      <span className="expense-details" id="month">
        {month}
      </span>
      <span className="expense-details" id="year">
        {props.date.getFullYear()}
      </span>
      <span className="expense-details" id="date">
        {props.date.getDate()}
      </span>
    </div>
  );
}

export default Calender;
