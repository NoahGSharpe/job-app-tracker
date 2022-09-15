import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function Form({ jobApps, setJobApps }) {
  const [inputCompany, setInputCompanyText] = useState("");
  const inputTextHandler = (e) => {
    setInputCompanyText(e.target.value);
  };
  const submitJobAppHandler = (e) => {
    e.preventDefault();
    setJobApps([...jobApps, { companyName: inputCompany, id: uuid() }]);
    setInputCompanyText("");
  };
  return (
    <form>
      <input value={inputCompany} onChange={inputTextHandler} type="text" />
      <button
        className="btn btn-primary"
        onClick={submitJobAppHandler}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
