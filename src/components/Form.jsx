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
    }
    setValidated(true);
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
              Please Input a Company Name
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

        <Row className="mt-3">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </Row>
      </RForm>

      {/* <form>
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

            <div>
              <div className="row">
                <div className="col-md-4">
                  <DateForm.Group controlId="dob">
                    <DateForm.Label>Select Date</DateForm.Label>
                    <DateForm.Control
                      value={formState.date}
                      onChange={changeHandler}
                      type="date"
                      name="date"
                      placeholder="Date Applied"
                    />
                  </DateForm.Group>
                </div>
              </div>
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
              className="btn btn-primary"
              onClick={submitJobAppHandler}
              type="submit"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form> */}
    </div>
  );
}

export default Form;
