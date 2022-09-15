import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function Form({ jobApps, setJobApps }) {
  const [formState, setFormState] = useState({
    company: "",
    position: "",
    date: "",
    platform: "",
    link: "",
    status: "",
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
        date: formState.date,
        platform: formState.platform,
        link: formState.link,
        status: formState.status,
        id: uuid(),
      },
    ]);
    setFormState({
      company: "",
      position: "",
      date: "",
      platform: "",
      link: "",
      status: "",
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
                value={formState.platform}
                onChange={changeHandler}
                name="platform"
                id="inputPlatform"
                className="form-control"
                type="text"
                placeholder="Enter Platform"
              />
              <label htmlFor="inputPlatform">Platform</label>
            </div>

            <div className="form-floating col-auto">
              <input
                value={formState.link}
                onChange={changeHandler}
                name="link"
                id="inputLink"
                className="form-control"
                type="text"
                placeholder="Enter Link"
              />
              <label htmlFor="inputLink">Link</label>
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
