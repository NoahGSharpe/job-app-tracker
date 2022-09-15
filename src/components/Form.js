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
    console.log(e.target.name);
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
    <div>
      <form>
        <label htmlFor="inputCompany" className="form-label mt-4">
          Company
        </label>
        <input
          value={formState.company}
          onChange={changeHandler}
          name="company"
          id="inputCompany"
          className="form-control"
          type="text"
          placeholder="Enter Company Name"
        />

        <label htmlFor="inputPosition" className="form-label mt-4">
          Position
        </label>
        <input
          value={formState.position}
          onChange={changeHandler}
          name="position"
          id="inputPosition"
          className="form-control"
          type="text"
          placeholder="Enter Position"
        />

        <label htmlFor="inputPlatform" className="form-label mt-4">
          Platform
        </label>
        <input
          value={formState.platform}
          onChange={changeHandler}
          name="platform"
          id="inputPlatform"
          className="form-control"
          type="text"
          placeholder="Enter Platform"
        />

        <button
          className="btn btn-primary"
          onClick={submitJobAppHandler}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
