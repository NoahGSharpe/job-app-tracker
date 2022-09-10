import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import JobAppList from "./components/JobAppList";

function App() {
  const [inputText, setInputText] = useState("");
  const [jobApps, setJobApps] = useState([]);

  useEffect(() => {
    getLocal();
  }, [])

  useEffect(() => {
    saveLocal();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobApps])

  const saveLocal = () => {
    localStorage.setItem("JobApps", JSON.stringify(jobApps));
  }
  const getLocal = () => {
    if (localStorage.getItem("JobApps") === null){
      localStorage.setItem("JobApps", JSON.stringify([]));
    } else {
      let localJobApps = JSON.parse(localStorage.getItem("JobApps"));
      setJobApps(localJobApps);
    }
  }


  return (
    <div className="App">
      <header>
        <h1>Job Application Tracker</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} jobApps={jobApps} setJobApps={setJobApps} />
      <JobAppList jobApps={jobApps} setJobApps={setJobApps} />
    </div>
  );
}

export default App;
