import React from "react";

function Report(props) {
    const total = props.transactions && props.transactions.reduce((acc, curr) => acc + curr.amount, 0);
  
    return (
      <div>
        <h2>Report</h2>
        <p>Total: {total}</p>
      </div>
    );
  }

export default Report;
