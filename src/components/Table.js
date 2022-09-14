import React from "react";
import Row from "./Row";

function Table({ jobApps, setJobApps }) {
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Company</th>
            <th scope="col">Position</th>
            <th scope="col">Date Applied</th>
            <th scope="col">Platform</th>
            <th scope="col">Link</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobApps.map((jobApp) => (
            <Row
              key={jobApp.id}
              jobApp={jobApp}
              jobApps={jobApps}
              setJobApps={setJobApps}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
