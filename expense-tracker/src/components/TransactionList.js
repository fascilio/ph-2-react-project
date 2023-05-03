import React from "react";

// function TransactionList(props) {
//   return (
//     <div>
//       <h2>Transactions</h2>
//       {props.transactions && props.transactions.map((transaction) => (
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

function TransactionList(props) {
  return (
    <div>
      <h2>Transactions</h2>
      {props.expenses && props.expenses.map((expense) => (
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
