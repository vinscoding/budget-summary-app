import MonthBar from "./month-bar/MonthBar";
import "./YearBudgetSummary.css";
import { useState } from "react";

function YearBudgetSummary(props) {
  const [selectedYear, setSeletedYear] = useState(props.selectedYear);
  const monthArray = [
    "jan",
    "feb",
    "mar",
    "april",
    "may",
    "june",
    "july",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  console.log(
    props.getAmtSumMonth(props.expense, Number(selectedYear)),
    props.expense,
    Number(selectedYear)
  );

  const yearSelectionHandler = (event) => {
    setSeletedYear(event.target.value);
    props.onSelectedYear(event.target.value);
  };
  return (
    <div className="year-budget-summary-container">
      <div className="lable-year-button-container">
        <span className="year-lable">filter by year</span>
        <select
          className="year-select-button"
          value={props.selectedYear}
          onChange={yearSelectionHandler}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
      <div className="filter-by-year-container">
        {monthArray.map((month, index) => (
          <MonthBar key={index} month={month}></MonthBar>
        ))}
      </div>
    </div>
  );
}

export default YearBudgetSummary;
