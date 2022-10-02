import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

const LOCAL_STORAGE_KEY = "JobAppsLocalStorage";

function App() {
  const [jobApps, setJobApps] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(jobApps));
  }, [jobApps]);

  return (
    <div className="App">
      <header id="title">
        <h1>Job Application Tracker</h1>
      </header>
      <Form jobApps={jobApps} setJobApps={setJobApps} />
      <Table jobApps={jobApps} setJobApps={setJobApps} />
    </div>
  );
}

export default App;
