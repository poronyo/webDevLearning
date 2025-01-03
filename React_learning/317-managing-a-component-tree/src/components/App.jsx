import React, { useState } from "react";
import ToDoItem from "./toDoItems";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    if (inputText.trim() === "") {
      return;
    }
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItems(id) {
    setItems((prevValue) =>
      prevValue.filter((item, index) => {
        return index !== id;
      })
    );
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <ToDoItem
              key={index}
              itemText={item}
              id={index}
              onChecked={deleteItems}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
