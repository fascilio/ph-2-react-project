import React, {useState} from "react";

function Dashboard() {
  
  const [accountBalance, setAccountBalance] = useState(1000);
  const handleAddTransaction = (transaction) => {
    setAccountBalance((prevBalance) => prevBalance - transaction.amount);
  };

  return (
    <div >
      <h1>Dashboard</h1>
      <p className="dashboard-container">Account Balance: {accountBalance}</p>
      
    </div>
  );
}

export default Dashboard;
// import React, { useState } from "react";
// import AddTransaction from "./AddTransaction";

// function Dashboard() {
//   const [accountBalance, setAccountBalance] = useState(1000);

//   const handleAddTransaction = (transaction) => {
//     const newBalance = accountBalance - parseFloat(transaction.amount);
//     setAccountBalance(newBalance);
//   };

//   return (
//     <div style={{ backgroundColor: "navy", color: "white", textAlign: "center" }}>
//       <h1>Dashboard</h1>
//       <p>Account Balance: {accountBalance}</p>
//       <AddTransaction addTransaction={handleAddTransaction} />
//     </div>
//   );
// }

// export default Dashboard;
