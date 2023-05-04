import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

function TransactionList() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/expenses")
      .then((res) => res.json())
      .then((data) => setExpenses(data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3002/expenses/${id}`, 
    { method: "DELETE" })
      .then(() => {
        setExpenses((prevExpenses) =>
          prevExpenses.filter((expense) => expense.id !== id)
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", backgroundColor: "grey", fontSize: "30px" }}>Expense List</h2>
      <SearchBar transactions={expenses} setTransactions={setExpenses} />
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.date}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
              <td>
                <button onClick={() => handleDelete(expense.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
