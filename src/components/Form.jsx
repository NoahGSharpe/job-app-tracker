import React, { useState } from "react";
import { Form as RForm } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { v4 as uuid } from "uuid";

function Form({ jobApps, setJobApps }) {
  var date = new Date();
  var today = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  const [formState, setFormState] = useState({
    company: "",
    position: "",
    location: "",
    date: today,
    notes: "",
  });
  const [validated, setValidated] = useState(false);

  function changeHandler(e) {
    const value = e.target.value;
    setFormState({
      ...formState,
      [e.target.name]: value,
    });
  }

  const submitJobAppHandler = (e) => {
    e.preventDefault();
    if (e.currentTarget.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    setValidated(false);
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
    var date = new Date();
    var today = `${
      date.getMonth() + 1
    }/${date.getDate()}/${date.getFullYear()}`;
    setFormState({
      company: "",
      position: "",
      location: "",
      date: today,
      notes: "",
    });
  };

  return (
    <div className="w-50 mx-auto my-5">
      <RForm noValidate validated={validated} onSubmit={submitJobAppHandler}>
        <Row className="mt-3">
          <RForm.Group as={Col} controlId="RFormCompany">
            <RForm.Label>Company</RForm.Label>
            <RForm.Control
              required
              value={formState.company}
              onChange={changeHandler}
              name="company"
              placeholder="Enter Company Name"
            />
            <RForm.Control.Feedback type="invalid">
              Please enter a company name
            </RForm.Control.Feedback>
          </RForm.Group>
          <RForm.Group as={Col} controlId="RFormPosition">
            <RForm.Label>Position</RForm.Label>
            <RForm.Control
              required
              value={formState.position}
              onChange={changeHandler}
              name="position"
              placeholder="Enter Position"
            />
            <RForm.Control.Feedback type="invalid">
              Please enter a postion
            </RForm.Control.Feedback>
          </RForm.Group>
        </Row>
        <Row className="mt-3">
          <RForm.Group as={Col} controlId="RFormLocation">
            <RForm.Label>Location</RForm.Label>
            <RForm.Control
              required
              value={formState.location}
              onChange={changeHandler}
              name="location"
              placeholder="Enter Location"
            />
            <RForm.Control.Feedback type="invalid">
              Please enter a location
            </RForm.Control.Feedback>
          </RForm.Group>
          <RForm.Group as={Col} controlId="RFormDate">
            <RForm.Label>Date Applied</RForm.Label>
            <RForm.Control
              required
              value={formState.date}
              onChange={changeHandler}
              name="date"
            />
          </RForm.Group>
        </Row>
        <Row className="mt-3">
          <RForm.Group as={Col} controlId="RFormNotes">
            <RForm.Label>Notes</RForm.Label>
            <RForm.Control
              value={formState.notes}
              onChange={changeHandler}
              name="notes"
              placeholder="Notes (Optional)"
            />
          </RForm.Group>
        </Row>

        <Row className="mt-4">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </Row>
      </RForm>
    </div>
  );
}

export default Form;
