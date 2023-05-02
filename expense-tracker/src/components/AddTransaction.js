import React, { useState } from "react";

function AddTransaction(props) {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const transaction = {
        description,
        category,
        amount,
      };
      await props.addTransaction(transaction);
      setDescription("");
      setCategory("");
      setAmount("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={handleDescriptionChange}
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            value={category}
            onChange={handleCategoryChange}
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
        />
        </label>
        <button type="submit">Add</button>
        </form>
    </div>
    );
}
export default AddTransaction;