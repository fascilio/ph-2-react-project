// import React, { useState } from "react";

// function ExpenseLimit() {
//   const [expenseLimit, setExpenseLimit] = useState("");

//   const handleExpenseLimitChange = (event) => {
//     setExpenseLimit(event.target.value);
//   };

//   return (
//     <div>
//       <h2>Expense Limit</h2>
//       <form>
//         <label>
//           Limit:
//           <input
//             type="number"
//             value={expenseLimit}
//             onChange={handleExpenseLimitChange}
//           />
//         </label>
//         <button onClick={handleExpenseLimitChange}>Submit</button>
//       </form>
//       <p>Current Expense Limit: {expenseLimit}</p>
//     </div>
//   );
// }

// export default ExpenseLimit;
// import React, { useState } from "react";

// function ExpenseLimit() {
//   const [expenseLimit, setExpenseLimit] = useState("");

//   const handleExpenseLimitChange = (event) => {
//     setExpenseLimit(event.target.value);
//   };

//   const handleExpenseLimitSubmit = (event) => {
//     event.preventDefault();
//     // Handle submitting the expense limit value to the server
//     console.log(`Submitted expense limit: ${expenseLimit}`);
//   };

//   return (
//     <div>
//       <h2>Expense Limit</h2>
//       <form>
//         <label>
//           Limit:
//           <input
//             type="number"
//             value={expenseLimit}
//             onChange={handleExpenseLimitChange}
//           />
//         </label>
//         <button onClick={handleExpenseLimitSubmit}>Submit</button>
//       </form>
//       <p>Current Expense Limit: {expenseLimit}</p>
//     </div>
//   );
// }

// export default ExpenseLimit;
import React, { useState } from "react";

function ExpenseLimit() {
  const [expenseLimit, setExpenseLimit] = useState("");

  const handleExpenseLimitChange = (event) => {
    setExpenseLimit(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Expense limit set to ${expenseLimit}`);
    setExpenseLimit("");
  };

  return (
    <div>
      <h2>Expense Limit</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Limit:
          <input
            type="number"
            value={expenseLimit}
            onChange={handleExpenseLimitChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>Current Expense Limit: {expenseLimit}</p>
    </div>
  );
}

export default ExpenseLimit;
