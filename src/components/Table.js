import React from "react";
import Row from "./Row";

function Table({ jobApps, setJobApps }) {
  return (
    <div className="m-4">
      <table className="table table-hover table-striped">
        <thead>
          <tr className="table-dark">
            <th scope="col">Status</th>
            <th scope="col">Company</th>
            <th scope="col">Position</th>
            <th scope="col">Location</th>
            <th scope="col">Date Applied</th>
            <th scope="col">Notes</th>
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
