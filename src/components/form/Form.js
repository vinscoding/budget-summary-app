import "./Form.css";
import { useState } from "react";

function Form(props) {
  //the state variable is used as the form is being rendered conditionally, initial render form is made false as we need to display form only when the user click on add-expense button
  const [renderForm, setrenderForm] = useState(false);

  //what to do when the form is submitted?
  const formSubmitHandler = (e) => {
    e.preventDefault(); /*to prevent page reload, as form submit reload the page by default*/
    const date = document.querySelector("#form-date").value;
    const year = Number(date.slice(0, 4));
    const month = Number(date.slice(5, 7));
    const day = Number(date.slice(8, 10));

    //send the form data as an object to app.js as new expense array is updated there
    props.onSaveForm({
      date: new Date(year, month - 1, day),
      title: document.querySelector("#title").value,
      amount: Number(document.querySelector("#amount").value),
    });
    //clear the form
    document.querySelector("#title").value = "";
    document.querySelector("#amount").value = "";
    document.querySelector("#form-date").value = "";
    
    //hide the form, to do this, this function needs to be re-evaluated with the state varaible(renderForm) as false
    setrenderForm(false);
  };

  //hide the form whenever cancle button is clicked
  function formCancelHandler(event) {
    setrenderForm(false);
  }

  //initial an add-expense-button is displayed whenever clicked on that form needs to be rendered
  const addExpenseButtonClickHandler = (event) => {
    setrenderForm(true);
  };

  //render form based on the conditon and return the function
  if (renderForm)
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
          <button className="button" onClick={formCancelHandler}>
            cancel
          </button>
        </div>
      </form>
    );

  //render add expense button, initial display
  return (
    <div
      className="expense-button-container"
      onClick={addExpenseButtonClickHandler}
    >
      <button className="expense-button" type="submit">
        add expense
      </button>
    </div>
  );
}

export default Form;
