import React, { useState } from "react";

function ExpenseLimit() {
  const [expenseLimit, setExpenseLimit] = useState("");

  const handleExpenseLimitChange = (event) => {
    setExpenseLimit(event.target.value);
  };

  return (
    <div>
      <h2>Expense Limit</h2>
      <form>
        <label>
          Limit:
          <input
            type="number"
            value={expenseLimit}
            onChange={handleExpenseLimitChange}
          />
        </label>
      </form>
      <p>Current Expense Limit: {expenseLimit}</p>
    </div>
  );
}

export default ExpenseLimit;
