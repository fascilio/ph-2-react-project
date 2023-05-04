import React, { useState, useEffect } from "react";

function Dashboard() {
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

  return (
    <div style={{ textAlign: "center", backgroundColor: "grey", height: '100vh' }}>
      <h1>Dashboard</h1>
      <h1 className="app-name">Welcome to view your progress!</h1>
      <p className="dashboard-container">Total Expenses: {totalExpenses}</p>
    </div>
  );
}

export default Dashboard;
