import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import JobAppList from "./components/JobAppList";

function App() {
  const [inputText, setInputText] = useState("");
  const [jobApps, setJobApps] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Job Application Tracker</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} jobApps={jobApps} setJobApps={setJobApps} />
      <JobAppList jobApps={jobApps} />
    </div>
  );
}

export default App;
