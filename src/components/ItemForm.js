import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("")
  const [itemCategory, setItemCategory] = useState("Produce")
  
  
  function handleName(e) {
    setItemName(e.target.value)
  }

  function handlCategory(e) {
    setItemCategory(e.target.value)
  }
  
  const newItem = {
    id: uuid(),
    name: itemName,
    category: itemCategory,
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handlCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
