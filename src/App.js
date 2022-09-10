import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import JobAppList from "./components/JobAppList";

const LOCAL_STORAGE_KEY = "JobAppsLocalStorage";

function App() {
  const [inputText, setInputText] = useState("");
  const [jobApps, setJobApps] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(jobApps));
  }, [jobApps]);

  return (
    <div className="App">
      <header>
        <h1>Job Application Tracker</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        jobApps={jobApps}
        setJobApps={setJobApps}
      />
      <JobAppList jobApps={jobApps} setJobApps={setJobApps} />
    </div>
  );
}

export default App;
