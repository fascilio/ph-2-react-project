import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard"
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";
import ExpenseLimit from "./ExpenseLimit";
import Report from "./Report";

function App() {
    const [expenses, setExpenses] = useState([]);

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
        
          fetch("http://localhost:3002/expenses", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(transaction),
          })
            .then(res => res.json())
            .then(data => setExpenses([...expenses, data]))
            .catch(error => console.error(error));
        
      };
    return (
      <div>
        <h1 className="app-name">Welcome to view your progress!</h1>
        <Dashboard />
        <TransactionList expenses={expenses} />
        <AddTransaction addTransaction={addTransaction} />
        <ExpenseLimit />
        <Report expenses={expenses} />
      </div>
    );
  }
  
  export default App;