 import React, {useState} from "react";

function Dashboard() {
  
  const [accountBalance, setAccountBalance] = useState(1000);
  const handleAddTransaction = (transaction) => {
    setAccountBalance((prevBalance) => prevBalance - transaction.amount);
  };

  return (
    <div style={{textAlign: "center", backgroundColor: "grey"}}>
      <h1>Dashboard</h1>
      <h1 className="app-name">Welcome to view your progress!</h1>
      <p className="dashboard-container">Account Balance: {accountBalance}</p>
      
    </div>
  );
}

export default Dashboard;

