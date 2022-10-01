import React from "react";
import "./Row.css";

function Row({ jobApp, jobApps, setJobApps }) {
  const deleteHandler = () => {
    setJobApps(jobApps.filter((x) => x.id !== jobApp.id));
  };
  return (
    <tr className="table-secondary">
      <td>
        <select className="form-select" id="statusSelect">
          <option>Pending</option>
          <option>Rejected</option>
          <option>Interview</option>
          <option>Offer</option>
        </select>
      </td>
      <td>{jobApp.companyName}</td>
      <td>{jobApp.position}</td>
      <td>{jobApp.location}</td>
      <td>{jobApp.date}</td>
      <td>{jobApp.notes}</td>
      <td>
        <button className="btn btn-info btn-sm">Edit</button>
        <span> - </span>
        <button className="btn btn-danger btn-sm" onClick={deleteHandler}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Row;
