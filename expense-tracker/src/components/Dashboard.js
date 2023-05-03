// import React, { useState, useEffect } from "react";
// import TransactionList from "./TransactionList";
// import AddTransaction from "./AddTransaction";
// import ExpenseLimit from "./ExpenseLimit";
// import Report from "./Report";

// const API_URL = "http://localhost:3002/expenses";

// function Dashboard() {
//   const [expenses, setExpenses] = useState([]);
//   const [accountBalance, setAccountBalance] = useState(1000);

//   useEffect(() => {
//     fetchTransactions();
//   }, []);

//   const fetchTransactions = async () => {
//     try {
//       const response = await fetch(API_URL);
//       const data = await response.json();
//       setExpenses(data.expenses);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const addTransaction = async (transaction) => {
//     try {
//       const response = await fetch(API_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(transaction),
//       });
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <p>Account Balance: {accountBalance}</p>
//       <TransactionList expenses={expenses} />
//       <AddTransaction addTransaction={addTransaction} />
//       <ExpenseLimit />
//       <Report expenses={expenses} />
//     </div>
//   );
// }

// export default Dashboard;
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

  const fetchTransactions = async () => {
    const API_URL = "http://localhost:3002/expenses";

    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setExpenses(data.expenses);
    } catch (error) {
      console.error(error);
    }
  };

  const addTransaction = async (transaction) => {
    const API_URL = "http://localhost:3002/expenses";

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transaction),
      });

      if (!response.ok) {
        throw new Error("Failed to add transaction");
      }

      const data = await response.json();
      setExpenses([...expenses, data]);
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
