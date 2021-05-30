import "./Expenses.css";
import ExpenseBar from "./expensebar/ExpenseBar";
import YearBudgetSummary from "./year-budget-summary/YearBudgetSummary";
import { useState } from "react";


//this component includes expense-bar, summary chart, filter year
function Expenses(props) {
  //need to re-evaluate this component whenever a different year is selected through the filter bar 
  const [selectedYear, setSelectedYear] = useState("2021");
  
  const selectedYearHandler = (Year) => {
   //state function re-evaluates the component(the function)
    setSelectedYear(Year);
  };

  //filter the expense details for the selected year
  const filteredExpense = props.expenseDetails.filter(
    (expenseDetail) => expenseDetail.date.getFullYear() === Number(selectedYear)
  );

   
  let expenseContent = <p>No Expense Found</p>;
//conditional rendering of expense-bar if expense is present
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
