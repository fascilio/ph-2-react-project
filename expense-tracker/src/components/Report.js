import React from "react";

function Report({ transactions }) {
  const totalSpent = transactions.reduce((total, transaction) => {
    return total + transaction.amount;
  }, 0);

  return (
    <div>
      <h2>Report</h2>
      <p>Total Spent: {totalSpent}</p>
    </div>
  );
}

export default Report;
