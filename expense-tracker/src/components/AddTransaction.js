import React, { useState } from 'react';

function AddTransaction({ AddNewTransaction }) {
  const [transaction, setTransaction] = useState({
    date: '', description: '', category: '', amount: ''
  });

  const handleChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    AddNewTransaction(transaction);
    setTransaction({ date: '', description: '',category: '', amount: '' });
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
      </form>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button type="submit" onClick={handleSubmit}>Add</button>
      </div>
    </div>
  );

}
export default AddTransaction;