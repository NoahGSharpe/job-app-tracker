import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function Form({ jobApps, setJobApps }) {
  const [formState, setFormState] = useState({
    company: "",
    position: "",
    location: "",
    date: "",
    notes: "",
  });

  function changeHandler(e) {
    const value = e.target.value;
    setFormState({
      ...formState,
      [e.target.name]: value,
    });
  }

  const submitJobAppHandler = (e) => {
    e.preventDefault();
    setJobApps([
      ...jobApps,
      {
        companyName: formState.company,
        position: formState.position,
        location: formState.location,
        date: formState.date,
        notes: formState.notes,
        status: "Pending",
        id: uuid(),
      },
    ]);
    setFormState({
      company: "",
      position: "",
      location: "",
      date: "",
      notes: "",
    });
  };

  return (
    <div className="Form m-4">
      <form>
        <fieldset className="border p-3">
          <legend>Create New Job Application</legend>
          <div className="row">
            <div className="form-floating col-auto">
              <input
                value={formState.company}
                onChange={changeHandler}
                name="company"
                id="inputCompany"
                className="form-control"
                type="text"
                placeholder="Enter Company Name"
              />
              <label htmlFor="inputCompany">Company</label>
            </div>

            <div className="form-floating col-auto">
              <input
                value={formState.position}
                onChange={changeHandler}
                name="position"
                id="inputPosition"
                className="form-control"
                type="text"
                placeholder="Enter Position"
              />
              <label htmlFor="inputPosition">Position</label>
            </div>

            <div className="form-floating col-auto">
              <input
                value={formState.location}
                onChange={changeHandler}
                name="location"
                id="inputLocation"
                className="form-control"
                type="text"
                placeholder="Enter Location"
              />
              <label htmlFor="inputLocation">Location</label>
            </div>

            <div className="form-floating col-auto">
              <input
                value={formState.notes}
                onChange={changeHandler}
                name="notes"
                id="inputNotes"
                className="form-control"
                type="text"
                placeholder="Enter Notes"
              />
              <label htmlFor="inputNotes">Notes</label>
            </div>

            <button
              className="btn btn-primary col"
              onClick={submitJobAppHandler}
              type="submit"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Form;
