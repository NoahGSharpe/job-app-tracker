import React from "react";

function JobApp({ jobApp, jobApps, setJobApps }) {
  const deleteHandler = () => {
    setJobApps(jobApps.filter((el) => el.id !== jobApp.id));
  };
  return (
    <div className="jobApp">
      <li className="jobApp-item">{jobApp.companyName}</li>
      <button onClick={deleteHandler}>X</button>
    </div>
  );
}

export default JobApp;
