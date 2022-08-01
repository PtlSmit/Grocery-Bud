import React, { useState } from "react";
import List from "./List";
import Alert from "./Alert";

const App = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setISEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: true, msg: "Hello World", type: "Sucess" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name){
      //Set Alert
    }else if (name && isEditing) {
      //We want to do something
    }else{
      const newItem = {ID:Date.toString(), title:name}
      setList([...list,newItem])
      setName('')
    }
  };
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert}/>}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      {
        list.length >0 &&
        <div className="grocery-container">
        <List items={list}/>
        <button className="clear-btn">Clear Items</button>
      </div>
      }
      
    </section>
  );
};

export default App;
