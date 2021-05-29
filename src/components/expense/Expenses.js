import "./Expenses.css";
import ExpenseBar from "./expensebar/ExpenseBar";
import YearBudgetSummary from "./year-budget-summary/YearBudgetSummary";
import { useState } from "react";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const selectedYearHandler = (Year) => {
    setSelectedYear(Year);
  };

  const filteredExpense = props.expenseDetails.filter(
    (expenseDetail) => expenseDetail.date.getFullYear() === Number(selectedYear)
  );

  let expenseContent = <p>No Expense Found</p>;

  if (filteredExpense.length > 0) {
    expenseContent = filteredExpense.map((expenseDetail, index) => (
      <ExpenseBar
        key={index}
        date={expenseDetail.date}
        title={expenseDetail.title}
        amount={expenseDetail.amount}
      ></ExpenseBar>
    ));
  }

  return (
    <div className="expense-container">
      <YearBudgetSummary
        onSelectedYear={selectedYearHandler}
        selectedYear={selectedYear}
        getAmtSumMonth={props.getAmtSumOfMonth}
        expense={props.expenseDetails}
      ></YearBudgetSummary>
      {expenseContent}
    </div>
  );
}

export default Expenses;
