import React, {useState} from "react";

function Dashboard() {
  
  const [accountBalance, setAccountBalance] = useState(1000);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Account Balance: {accountBalance}</p>
      
    </div>
  );
}

export default Dashboard;
