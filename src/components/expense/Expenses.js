import "./Expenses.css";
import ExpenseBar from "./expensebar/ExpenseBar";
import YearBudgetSummary from "./year-budget-summary/YearBudgetSummary";
import { useState } from "react";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");
  const selectedYearHandler = (Year) => {
    setSelectedYear(Year);
  };

  return (
    <div className="expense-container">
      <YearBudgetSummary
        onSelectedYear={selectedYearHandler}
        selectedYear={selectedYear}
      ></YearBudgetSummary>
      {props.expenseDetails
        .filter(
          (expenseDetail) =>
            expenseDetail.date.getFullYear() === Number(selectedYear)
        )
        .map((expenseDetail, index) => (
          <ExpenseBar
            key={index}
            date={expenseDetail.date}
            title={expenseDetail.title}
            amount={expenseDetail.amount}
          ></ExpenseBar>
        ))}
    </div>
  );
}

export default Expenses;
