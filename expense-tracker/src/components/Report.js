// import React, { useState, useEffect } from "react";

// function Report() {
//   const [totalExpenses, setTotalExpenses] = useState(0);

//   useEffect(() => {
//     fetch("http://localhost:3002/expenses")
//       .then((res) => res.json())
//       .then((data) => {
//         let total = 0;
//         if (data) {
//           data.forEach((expense) => {
//             total += parseInt(expense.amount);
//           });
//         }
//         setTotalExpenses(total);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   let message;

//   if (totalExpenses > 25000) {
//     message = "Be keen! You are overspending";
//   } else if (totalExpenses >= 20000) {
//     message = "Spend carefully";
//   }

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'grey' }}>
//       <h2>Report</h2>
//       <p>Dear customer, welcome to a full report of your expenditure.</p>
//       {message && <p>{message}</p>}
//       <p>Total Expenses: {totalExpenses}</p>
//     </div>
//   );
// }

// export default Report;
import React, { useState, useEffect } from "react";

function Report() {
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [expensesByCategory, setExpensesByCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/expenses")
      .then((res) => res.json())
      .then((data) => {
        let total = 0;
        let categoryTotals = {};
        if (data) {
          data.forEach((expense) => {
            total += parseInt(expense.amount);
            if (categoryTotals[expense.category]) {
              categoryTotals[expense.category] += parseInt(expense.amount);
            } else {
              categoryTotals[expense.category] = parseInt(expense.amount);
            }
          });
        }
        setTotalExpenses(total);
        setExpensesByCategory(categoryTotals);
      })
      .catch((err) => console.log(err));
  }, []);

  let message;

  if (totalExpenses > 25000) {
    message = "Be keen! You are overspending";
  } else if (totalExpenses >= 20000) {
    message = "Spend carefully";
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'grey' }}>
      <h2>Report</h2>
      <p>Dear customer, welcome to a full report of your expenditure.</p>
      {message && <p>{message}</p>}
      <p>Total Expenses: {totalExpenses}</p>
      <h3>Expenses by Category</h3>
      <ul>
        {Object.keys(expensesByCategory).map((category) => (
          <li key={category}>{category}: Ksh {expensesByCategory[category]}</li>
        ))}
      </ul>
    </div>
  );
}

export default Report;

