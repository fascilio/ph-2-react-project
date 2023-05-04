# Ph-2-React-Project
## Expense Tracker App

This is a simple expense tracker application created with React that allows you to track your 
expenses by adding new transactions, listing them, and generating reports.
The application uses React and the `react-router-dom` library for routing.

## To get the app running
1. Fork and clone this repository to your local machine.
2. Navigate to the project directory `cd expense-tracker` , then run `npm install` to install the dependencies.
3. Run `json-server -- watch db.json --port 3002` to get the json server running.
4. Open another terminal and run `cd expense-tracker` and then `npm start` to start the app.

## Application Components.
`App.js`, is the main entry point for the application. It imports various components and defines 
an `App` function that sets up the routing for the different pages of the application. It also 
defines a state variable `expenses` using the `useState` hook to keep track of the transactions in 
the application. The `fetchTransactions` function fetches the transactions from a local server and 
updates the `expenses` state when the component mounts using the `useEffect` hook. The navigation bar at the top of the page allows you to easily navigate between different sections of the application.

`AddTransaction.js` defines a form that allows the user to add a new transaction. It uses the 
`useState` hook to define a state variable `transaction` that contains the information for the new 
transaction. The `handleChange` function updates the state as the user types in the form, and the 
`handleSubmit` function sends the transaction to the server and updates the `expenses` state with 
the new transaction.The add transaction page allows you to add a new transaction. You can specify 
the date, description, category, and amount for the transaction.

`Dashboard.js` displays the total amount of expenses for all transactions in the application. It 
uses the `useState` hook to define a state variable `totalExpenses` and the `useEffect` hook to 
fetch the transactions from the server and calculate the total amount.

`Report.js` displays the total amount of expenses and the amount of expenses by category. It uses 
the `useState` hook to define state variables `totalExpenses` and `expensesByCategory` and the 
`useEffect` hook to fetch the transactions from the server and calculate the amounts. It uses an 
object to keep track of the expenses by category and updates the `expensesByCategory` state with 
the new totals.

## Backend
The backend server is a simple Node.js server that uses the `json-server` library to provide a REST API for the application.

The `db.json` file in the root directory of the project contains the data for the expenses.

##  Link to the repository
https://github.com/fascilio/ph-2-react-project

## Author
Samuel Karanja