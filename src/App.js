import "./App.css";
import Expenses from "./components/expense/Expenses";
import Form from "./components/form/Form";
import {useState} from 'react'


//initial static input expenses
const expenseDetails = [
  {
    date: new Date(2021, 0, 1),
    title: "bat",
    amount: 200,
  },
  {
    date: new Date(2021, 1, 4),
    title: "table",
    amount: 2000,
  },
  {
    date: new Date(2021, 2, 11),
    title: "chair",
    amount: 1000,
  },
  {
    date: new Date(2021, 4, 11),
    title: "Mobile Phone",
    amount: 5000,
  },
];

function App() {
  //app needs to be re-evaluated whenever new expense is added, thus we declare a state variable for expense 
  const [newExpenseDatails, setNewExpenseDetails] = useState(expenseDetails);

  //this function is defined here but its called in form component that is form.js, whenever a user submit form, a handler function is triggred which inturn call this function and sends newly added data
  const formHandler = (formData) => {
    setNewExpenseDetails([{ ...formData }, ...newExpenseDatails])
  };

  //filter expense detail for a given year
  function expenseDetailsOfGivenYear(year,expense) {
    return expense.filter(element=>element.date.getFullYear()===year)
  }
  
  //add amount for given month
  function addAmount(month,array) {
   return array.reduce((acc, ele) => ele.date.getMonth()===month ? acc + ele.amount: acc, 0);
  }

  //compute amount for all the month and store in a array
  //this function is called in yearBudgetSummary as the return value of this function is required there
  function result(expense, selectedYear) {
    let monthAmountArray=[]
    for (let month = 0; month < 12; month++){
      monthAmountArray.push(addAmount(month, expenseDetailsOfGivenYear(selectedYear,expense)));
    }
    return monthAmountArray;
  }
  
//we are using custom build components here
//form and expenses are the custom built components
  return (
    <div className="app-container">
      <Form onSaveForm={formHandler}></Form>
      <Expenses
        expenseDetails={newExpenseDatails}
        getAmtSumOfMonth={result}
      ></Expenses>
      <div className="signature-container">
        <a href="https://github.com/vinscoding" className="signature">
          By vinscoding
        </a>
      </div>
    </div>
  );
}

export default App;
