import "./MonthBar.css";

function MonthBar(props) {
  return (
    <div className="month-bar-container">
      <div className="month-bar">
        <div className="month-bar-fill" style={{ height: props.barfill }}></div>
      </div>
      <span className="month">{props.month}</span>
    </div>
  );
}

export default MonthBar;
