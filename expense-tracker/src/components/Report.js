import React, { useState, useEffect } from "react";

function Report() {
  const [totalExpenses, setTotalExpenses] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3002/expenses")
      .then((res) => res.json())
      .then((data) => {
        let total = 0;
        if (data) {
          data.forEach((expense) => {
            total += parseInt(expense.amount);
          });
        }
        setTotalExpenses(total);
      })
      .catch((err) => console.log(err));
  }, []);

  let message;

  if (totalExpenses > 25000) {
    message = "Be keen! You are overspending";
  } else if (totalExpenses >= 20000) {
    message = "Spend carefully";
  }

  return (
    <div>
      <h2>Report</h2>
      <p>Dear customer, welcome to a full report of your expenditure.</p>
      {message && <p>{message}</p>}
      <p>Total Expenses: {totalExpenses}</p>
    </div>
  );
}

export default Report;

