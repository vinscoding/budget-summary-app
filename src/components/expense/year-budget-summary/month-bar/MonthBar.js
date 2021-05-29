import "./MonthBar.css";

function MonthBar(props) {
  return (
    <div className="month-bar-container">
      <div className="month-bar">
        <div className="month-bar-fill"></div>
      </div>
      <span className="month">{props.month}</span>
    </div>
  );
}

export default MonthBar;
