import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Dashboard from "./Dashboard"
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";
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
// style={{backgroundColor: "grey"}}
    return (
        <Router>
            <div >
              <Navigation>
                <Routes>
                    <Route path="/" element={<Dashboard expenses={expenses} />} />
                    <Route path="/transactions" element={<TransactionList />} />
                    <Route path="/add-transaction" element={<AddTransaction addNewTransaction={addTransaction} />} />
                    <Route path="/report" element={<Report transactions={expenses} />} />
                </Routes>
              </Navigation>  
            </div>
        </Router>
    );
}

export default App;
