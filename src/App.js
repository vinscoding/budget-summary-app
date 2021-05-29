import "./App.css";
import Expenses from "./components/expense/Expenses";
import Form from "./components/form/Form";
import {useState} from 'react'
import YearBudgetSummary from "./components/expense/year-budget-summary/YearBudgetSummary";


const expenseDetails = [
  {
    date: new Date(2021, 1, 1),
    title: "bat",
    amount: 200,
  },
  {
    date: new Date(2021, 1, 4),
    title: "table",
    amount: 2000,
  },
  {
    date: new Date(2021, 1, 11),
    title: "chair",
    amount: 1000,
  },
];

function App() {
  const [newExpenseDatails, setNewExpenseDetails] = useState(expenseDetails);
  const formHandler = (formData) => {
    setNewExpenseDetails([{ ...formData }, ...newExpenseDatails])
  };

  const expenseDetailYearMonthAmount = expenseDetails.map(expenseDetails => 
     ({
      year: expenseDetails.date.getFullYear(),
      month: expenseDetails.date.getMonth(),
      amount: expenseDetails.amount
    })
  );
  
  function expenseDetailsOfGivenYear(year,expense) {
    return expense.filter(element=>element.date.getFullYear()===year)
  }

  function addAmount(month,array) {
   return array.reduce((acc, ele) => ele.date.getMonth()===month ? acc + ele.amount: acc, 0);
  }

  function result(expense, selectedYear) {
    let monthAmountArray=[]
    for (let month = 0; month < 12; month++){
      monthAmountArray.push(addAmount(month, expenseDetailsOfGivenYear(selectedYear,expense)));
    }
    return monthAmountArray;
  }

  return (
    <div className="app-container">
      <Form onSaveForm={formHandler}></Form>
      
      <Expenses expenseDetails={newExpenseDatails} getAmtSumOfMonth={result} ></Expenses>
    </div>
  );
}

export default App;
