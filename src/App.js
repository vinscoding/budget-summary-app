import "./App.css";
import Expenses from "./components/expense/Expenses";
import Form from "./components/form/Form";
import {useState} from 'react'



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

  return (
    <div className="app-container">
      <Form onSaveForm={formHandler}></Form>
      
      <Expenses expenseDetails={newExpenseDatails} ></Expenses>
    </div>
  );
}

export default App;
