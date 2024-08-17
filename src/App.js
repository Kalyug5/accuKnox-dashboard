import React from "react";
import SearchBar from "./components/dashboard/SearchBar";
import Dashboard from "./components/dashboard/Dashboard";
import Sidebar from "./components/dashboard/Sidebar";

const App = () => {
  return (
    <>
      <div className="search__bar">
        <div>
          Home &gt; <span style={{ fontWeight: "bold" }}>Dashboard v2</span>
        </div>
        <SearchBar />
      </div>
      <div className="app">
        <Sidebar />
        <Dashboard />
      </div>
    </>
  );
};

export default App;
