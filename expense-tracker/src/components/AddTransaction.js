import React, { useState, useEffect } from 'react';

function AddTransaction({ addNewTransaction }) {
  const [transaction, setTransaction] = useState({
    id: null,
    date: '',
    description: '',
    category: '',
    amount: ''
  });

  useEffect(() => {
    fetch('/api/transactions')
      .then(response => response.json())
      .then(data => {
        const latestId = data[data.length - 1].id;
        setTransaction(transaction => ({ ...transaction, id: latestId + 1 }));
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTransaction(transaction);
    setTransaction({ id: transaction.id + 1, date: '', description: '', category: '', amount: '' });
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'green' }}>
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <label>Date:</label>
        <input type="date" name="date" value={transaction.date} onChange={handleChange} required style={{ backgroundColor: 'pink' }} />
        <label>Description:</label>
        <input type="text" name="description" value={transaction.description} onChange={handleChange} required style={{ backgroundColor: 'pink' }} />
        <label>Category:</label>
        <input type="text" name="category" value={transaction.category} onChange={handleChange} required style={{ backgroundColor: 'pink' }} />
        <label>Amount:</label>
        <input type="number" name="amount" value={transaction.amount} onChange={handleChange} required style={{ backgroundColor: 'pink' }} />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddTransaction;
