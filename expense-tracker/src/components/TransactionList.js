import React from "react";

function TransactionList({ expenses }) {
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