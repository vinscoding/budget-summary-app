import "./Form.css";
// import { useState } from "react";

let expenseAddedFlag = 0;

function Form(props) {
  // const [formData, setformData] = useState({
  //   date: "",
  //   title: "",
  //   amount: "",
  // });

  // if (expenseAddedFlag) {
  //   props.onSaveForm(
  //     formData
  //   ); /*sending user input expense details to app.js */

  //   expenseAddedFlag = 0;
  // }

  const formSubmitHandler = (e) => {
    e.preventDefault(); /*to prevent page reload, as form submit reload the page by default*/
    const date = document.querySelector("#form-date").value;
    const year = Number(date.slice(0, 4));
    const month = Number(date.slice(5, 7));
    const day = Number(date.slice(8, 10));

    props.onSaveForm({
      date: new Date(year, month - 1, day),
      title: document.querySelector("#title").value,
      amount: Number(document.querySelector("#amount").value),
    });
    expenseAddedFlag = 1; //as formdata dont reflect immediately, and it reflect when re-executing the form function we take help of this flag
    document.querySelector("#title").value = "";
    document.querySelector("#amount").value = "";
    document.querySelector("#form-date").value = "";
  };

  return (
    <form className="form-container" onSubmit={formSubmitHandler}>
      <div className="input-container">
        <label>title</label>
        <input type="text" name="title" id="title" required />
      </div>
      <div className="input-container">
        <label>Amount</label>
        <input type="number" name="amt" id="amount" required />
      </div>
      <div className="input-container">
        <label>date</label>
        <input type="date" name="date" id="form-date" required />
      </div>
      <div className="button-container">
        <button className="button" type="submit">
          add expense
        </button>
      </div>
    </form>
  );
}

export default Form;
