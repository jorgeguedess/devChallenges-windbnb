import React, { useState } from "react";
import useData from "./hooks/useData";

import Header from "./components/Header";
import Hotels from "./components/Hotels";
import Footer from "./components/Footer";

import "./styles/scss/App.scss";

function App() {
  const { data } = useData();
  const [newData, setNewData] = useState(data);

  return (
    <div className="app">
      <Header setNewData={setNewData} />
      <Hotels newData={newData} />
      <Footer />
    </div>
  );
}

export default App;
