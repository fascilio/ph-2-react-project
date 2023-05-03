import React, { useState, useEffect } from "react";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";
import ExpenseLimit from "./ExpenseLimit";
import Report from "./Report";

function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [accountBalance, setAccountBalance] = useState(1000);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = () => {
    try {
      fetch("http://localhost:3002/expenses")
        .then(response => response.json())
        .then(data => setExpenses(data.expenses))
        .catch(error => console.error(error));
    } catch (error) {
      console.error(error);
    }
  };

  const addTransaction = (transaction) => {
    try {
      fetch("http://localhost:3002/expenses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transaction),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error("Failed to add transaction");
          }
          return response.json();
        })
        .then(data => setExpenses([...expenses, data]))
        .catch(error => console.error(error));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Account Balance: {accountBalance}</p>
      <TransactionList expenses={expenses} />
      <AddTransaction addTransaction={addTransaction} />
      <ExpenseLimit />
      <Report expenses={expenses} />
    </div>
  );
}

export default Dashboard;
