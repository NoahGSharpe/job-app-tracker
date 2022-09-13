import React from "react";

function Table({ jobApps }) {
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
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobApps.map((jobApp) => (
            <tr class="table-dark">
              <td>{jobApp.companyName}</td>
              <td>{jobApp.position}</td>
              <td>{jobApp.date}</td>
              <td>{jobApp.platform}</td>
              <td>{jobApp.link}</td>
              <td>
                <button className="btn btn-info btn-sm">Edit</button>
                <span> - </span>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
