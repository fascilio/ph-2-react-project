import React from "react";

function TransactionList(props) {
  return (
    <div>
      <h2>Transactions</h2>
      {props.transactions.map((transaction) => (
        <div key={transaction.id}>
          <p>{transaction.date}</p>
          <p>{transaction.description}</p>
          <p>{transaction.category}</p>
          <p>{transaction.amount}</p>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;
