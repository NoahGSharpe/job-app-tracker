import React from "react";
import "./App.css";
import Form from "./components/Form";
import JobAppList from "./components/JobAppList";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Job Application Tracker</h1>
      </header>
      <Form />
      <JobAppList/>
    </div>
  );
}

export default App;
