import React, { useState, useEffect } from "react";

function TransactionList() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/expenses")
      .then((res) => res.json())
      .then((data) => setExpenses(data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3002/expenses/${id}`, { method: "DELETE" })
      .then(() => {
        // remove the deleted expense from the state
        setExpenses((prevExpenses) =>
          prevExpenses.filter((expense) => expense.id !== id)
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="expense-grid">
      <h2>Expense List</h2>
      {expenses.map((expense) => (
        <div key={expense.id} className="expense-item">
          <p>{expense.date}</p>
          <p>{expense.description}</p>
          <p>{expense.category}</p>
          <p>{expense.amount}</p>
          <button onClick={() => handleDelete(expense.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;
