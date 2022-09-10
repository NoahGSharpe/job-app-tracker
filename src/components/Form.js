import React from "react";

function Form({ inputText, setInputText, jobApps, setJobApps }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitJobAppHandler = (e) => {
    e.preventDefault();
    setJobApps([
      ...jobApps,
      { companyName: inputText, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" />
      <button onClick={submitJobAppHandler} type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
