import React, {useState, useEffect} from "react";

function TransactionList() {
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

  console.log(expenses);
  return (
    <div>
      <h2>Expense List</h2>
      {expenses && expenses.map((expense) => (
        <div key={expense.id}>
          <p>{expense.date}</p>
          <p>{expense.description}</p>
          <p>{expense.category}</p>
          <p>{expense.amount}</p>
        </div>
      ))}
    </div>
  );
}
  
export default TransactionList;