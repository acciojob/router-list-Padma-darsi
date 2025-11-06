
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import "./../styles/App.css";

// ItemList component
const ItemList = () => {
  const items = [
    { id: 1, name: "Item 1", description: "Description for Item 1" },
    { id: 2, name: "Item 2", description: "Description for Item 2" },
    { id: 3, name: "Item 3", description: "Description for Item 3" },
  ];

  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/items/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ItemDetail component
const ItemDetail = () => {
  const { id } = useParams();
  const itemData = {
    1: { name: "Item 1", description: "Description for Item 1" },
    2: { name: "Item 2", description: "Description for Item 2" },
    3: { name: "Item 3", description: "Description for Item 3" },
  };

  const item = itemData[id];

  return (
    <div>
      <h1>{item?.name}</h1>
      <p>{item?.description}</p>
      <Link to="/">Back to List</Link>
    </div>
  );
};

// App Component
const App = () => {
  return (
    <div>
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
