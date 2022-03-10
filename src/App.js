import React from "react";
import "./App.css";
import { Folders } from "./Layout/Folders";
import { Layout } from "./Layout/Layout";
import { Navbar } from "./Layout/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Layout />
    </div>
  );
}

export default App;
