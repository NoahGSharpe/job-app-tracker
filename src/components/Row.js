import React from "react";

function Row({ jobApp, jobApps, setJobApps }) {
  const deleteHandler = () => {
    setJobApps(jobApps.filter((x) => x.id !== jobApp.id));
  };
  return (
    <tr className="table-dark">
      <td>{jobApp.companyName}</td>
      <td>{jobApp.position}</td>
      <td>{jobApp.date}</td>
      <td>{jobApp.platform}</td>
      <td>{jobApp.link}</td>
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
