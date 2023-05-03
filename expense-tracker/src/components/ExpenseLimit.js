import React, { useState } from "react";

function ExpenseLimit() {
  const [expenseLimit, setExpenseLimit] = useState("");

  const handleExpenseLimitChange = (event) => {
    setExpenseLimit(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Expense limit set to ${expenseLimit}`);
    setExpenseLimit("");
  };

  return (
    <div>
      <h2>Expense Limit</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Set your weekly limit:
          <input
            type="number"
            value={expenseLimit}
            onChange={handleExpenseLimitChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>Current Expense Limit: {expenseLimit}</p>
    </div>
  );
}

export default ExpenseLimit;