// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import React, { useState, useEffect } from "react";

// const API_URL = "http://localhost:3000/expenses";

// function App() {
//   return (
//     <div>
//       <Dashboard />
//     </div>
//   );
// }

// function Dashboard() {
//   const [transactions, setTransactions] = useState([]);
//   const [accountBalance, setAccountBalance] = useState(1000);

//   useEffect(() => {
//     fetchTransactions();
//   }, []);

//   const fetchTransactions = async () => {
//     try {
//       const response = await fetch(API_URL);
//       const data = await response.json();
//       setTransactions(data.expenses);
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
//       <TransactionList transactions={transactions} />
//       <AddTransaction addTransaction={addTransaction} />
//       <ExpenseLimit />
//       <Report transactions={transactions} />
//     </div>
//   );
// }

// function TransactionList(props) {
//   return (
//     <div>
//       <h2>Transactions</h2>
//       {props.transactions.map((transaction) => (
//         <div key={transaction.id}>
//           <p>{transaction.date}</p>
//           <p>{transaction.description}</p>
//           <p>{transaction.category}</p>
//           <p>{transaction.amount}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// function AddTransaction(props) {
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [amount, setAmount] = useState("");

//   const handleDescriptionChange = (event) => {
//     setDescription(event.target.value);
//   };

//   const handleCategoryChange = (event) => {
//     setCategory(event.target.value);
//   };

//   const handleAmountChange = (event) => {
//     setAmount(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const transaction = {
//         description,
//         category,
//         amount,
//       };
//       await props.addTransaction(transaction);
//       setDescription("");
//       setCategory("");
//       setAmount("");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h2>Add Transaction</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Description:
//           <input
//             type="text"
//             value={description}
//             onChange={handleDescriptionChange}
//           />
//         </label>
//         <label>
//           Category:
//           <input
//             type="text"
//             value={category}
//             onChange={handleCategoryChange}
//           />
//         </label>
//         <label>
//           Amount:
//           <input
//             type="number"
//             value={amount}
//             onChange={handleAmountChange}
//           />
//         </label>
//         <button type="submit">Add</button>
//       </form>
//     </div>
//   );
// }

// function ExpenseLimit() {
//   const [expenseLimit, setExpenseLimit] = useState(0);

//   const handleExpenseLimitChange = (event) => {
//     setExpenseLimit(event.target.value);
//   };

//   return (
//     <div>
//       <h2>ExpenseLimit</h2>
// <label>
// Set Expense Limit:
// <input
//        type="number"
//        value={expenseLimit}
//        onChange={handleExpenseLimitChange}
//      />
// </label>
// </div>
// );
// }

// function Report(props) {
//   const { transactions, expenseLimit } = props;

//   const totalExpenses = transactions.reduce(
//     (total, transaction) => total + transaction.amount,
//     0
//   );

//   const remainingBalance = expenseLimit - totalExpenses;

//   return (
//     <div>
//       <h2>Report</h2>
//       <p>Total Expenses: {totalExpenses}</p>
//       <p>Remaining Balance: {remainingBalance}</p>
//     </div>
//   );
// }


// export default App;


import React from "react";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}

export default App;




// import React, { useState, useEffect } from "react";

// const API_URL = "http://localhost:3000/expenses";

// function App() {
//   return (
//     <div>
//       <Dashboard />
//     </div>
//   );
// }

// function Dashboard() {
//   const [transactions, setTransactions] = useState([]);
//   const [accountBalance, setAccountBalance] = useState(1000);

//   useEffect(() => {
//     fetchTransactions();
//   }, []);

//   const fetchTransactions = async () => {
//     try {
//       const response = await fetch(API_URL);
//       const data = await response.json();
//       setTransactions(data.expenses);
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
//       <TransactionList transactions={transactions} />
//       <AddTransaction addTransaction={addTransaction} />
//       <ExpenseLimit />
//       <Report transactions={transactions} />
//     </div>
//   );
// }

// function TransactionList(props) {
//   return (
//     <div>
//       <h2>Transactions</h2>
//       {props.transactions.map((transaction) => (
//         <div key={transaction.id}>
//           <p>{transaction.date}</p>
//           <p>{transaction.description}</p>
//           <p>{transaction.category}</p>
//           <p>{transaction.amount}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// function AddTransaction(props) {
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [amount, setAmount] = useState("");

//   const handleDescriptionChange = (event) => {
//     setDescription(event.target.value);
//   };

//   const handleCategoryChange = (event) => {
//     setCategory(event.target.value);
//   };

//   const handleAmountChange = (event) => {
//     setAmount(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const transaction = {
//         description,
//         category,
//         amount,
//       };
//       await props.addTransaction(transaction);
//       setDescription("");
//       setCategory("");
//       setAmount("");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h2>Add Transaction</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Description:
//           <input
//             type="text"
//             value={description}
//             onChange={handleDescriptionChange}
//           />
//         </label>
//         <label>
//           Category:
//           <input
//             type="text"
//             value={category}
//             onChange={handleCategoryChange}
//           />
//         </label>
//         <label>
//           Amount:
//           <input
//             type="number"
//             value={amount}
//             onChange={handleAmountChange}
//           />
//         </label>
//         <button type="submit">Add</button>
//       </form>
//     </div>
//   );
// }

// function ExpenseLimit() {
//   const [expenseLimit, setExpenseLimit] = useState(0);

//   const handleExpenseLimitChange = (event) => {
//   setExpenseLimit(event.target.value);
//   };
  
//   return (
//   <div>
//   <h2>Expense Limit</h2>
//   <label>
//   Set Expense Limit:
//   <input
//          type="number"
//          value={expenseLimit}
//          onChange={handleExpenseLimitChange}
//        />
//   </label>
//   <p>Current Expense Limit: {expenseLimit}</p>
//   </div>
//   );
//   }
  
//   function Report(props) {
//   const [totalExpense, setTotalExpense] = useState(0);
  
//   useEffect(() => {
//   const calculateTotalExpense = () => {
//   let total = 0;
//   props.transactions.forEach((transaction) => {
//   total += transaction.amount;
//   });
//   setTotalExpense(total);
//   };
//   calculateTotalExpense();
//   }, [props.transactions]);
  
//   return (
//   <div>
//   <h2>Report</h2>
//   <p>Total Expense: {totalExpense}</p>
//   </div>
//   );
//   }
  
//   export default App;
