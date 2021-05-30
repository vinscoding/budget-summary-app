import MonthBar from "./month-bar/MonthBar";
import "./YearBudgetSummary.css";
import { useState } from "react";

//this component renders the bar chart
function YearBudgetSummary(props) {
  //this function needs to re-run whenever a year is selected through filter
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

  //function is defined in app.js and called here
  const monthSumArray = props.getAmtSumMonth(
    props.expense,
    Number(props.selectedYear)
  );
  
  //find max value
  const maxValue = Math.max(...monthSumArray);
  //normalization
  const monthBarHeightArray = monthSumArray.map((ele, index) => ({
    month: monthArray[index],
    barfill: maxValue!==0? (ele / maxValue) * 4 + "rem":"0rem",
  }));

  //send the selected year to parent
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
          {monthBarHeightArray.map((ele, index) => (
          <MonthBar
            key={index}
            month={ele.month}
            barfill={ele.barfill}
          ></MonthBar>
        ))}
      </div>
    </div>
  );
}

export default YearBudgetSummary;
