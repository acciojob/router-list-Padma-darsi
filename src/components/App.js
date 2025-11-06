import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import "./../styles/App.css";

const ItemList = () => {
  return (
    <div>
      <h1>Item List</h1>
      <ul>
        <li>
          <Link to="/items/1">Item 1</Link>
        </li>
        <li>
          <Link to="/items/2">Item 2</Link>
        </li>
        <li>
          <Link to="/items/3">Item 3</Link>
        </li>
      </ul>
    </div>
  );
};

const ItemDetail = () => {
  const { id } = useParams();

  const data = {
    1: { name: "Item 1", description: "Description for Item 1" },
    2: { name: "Item 2", description: "Description for Item 2" },
    3: { name: "Item 3", description: "Description for Item 3" },
  };

  const item = data[id];

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <Link to="/">Back to List</Link>
    </div>
  );
};

const App = () => {
  return (
    <div id="main">
      {/* Do not remove the main div */}
      <Router>
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/items/:id" element={<ItemDetail />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
