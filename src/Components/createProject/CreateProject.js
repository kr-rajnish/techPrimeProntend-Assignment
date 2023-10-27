import React, { useEffect, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import back from "../image/Headerbg.svg";
import Logo from "../image/Logo.svg";

const CreateProject = () => {
  const [formData, setFormData] = useState({
    name: "",
    startDate: "",
    endDate: "",
    status: "Registered",
    reason: "",
    type: "",
    priority: "",
    division: "",
    category: "",
    dept: "",
    location: "",
  });

  const [errorMessages, setErrorMessages] = useState({
    name: "",
    reason: "",
    startDate: "",
    endDate: "",
    type: "",
    priority: "",
    division: "",
    category: "",
    dept: "",
    location: "",
  });

  const isFormValid = () => {
    return (
      formData.name &&
      formData.reason &&
      formData.startDate &&
      formData.endDate &&
      formData.type &&
      formData.priority &&
      formData.division &&
      formData.category &&
      formData.dept &&
      formData.location
    );
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const startDate = new Date(formData.startDate);
    const endDate = new Date(formData.endDate);

    if (!startDate || !endDate) {
      setErrorMessages({
        ...errorMessages,
        startDate: "Please enter valid start and end dates.",
      });
    } else if (endDate < startDate) {
      setErrorMessages({
        ...errorMessages,
        endDate: "End date should not be smaller than the start date.",
      });
    } else {
      setErrorMessages({
        ...errorMessages,
        startDate: "",
        endDate: "",
      });

      if (isFormValid()) {
        // Form is valid, you can submit it or perform other actions here
        alert("Data posted");
      } else {
        alert("Please fill in all required fields.");
      }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "startDate" || name === "endDate") {
      setErrorMessages({
        ...errorMessages,
        startDate: "",
        endDate: "",
      });
    }
  };

  return (
    <div
      className="createproject-container"
      style={{ position: "absolute", left: "7%", right: "0" }}
    >
      <img
        className="back"
        src={back}
        alt="back"
        style={{ position: "relative" }}
      />
      <div className="main-container-main">
        <div
          className="main-container-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            transform: "translateY(-170%)",
          }}
        >
          <h2
            className="creatprojecttital"
            style={{ marginLeft: "5%", marginTop: "2%" }}
          >
            Create Project
          </h2>
          <div style={{ marginRight: "45%" }}>
            <img className="logo" src={Logo} />
          </div>
        </div>
        <div className="container mt-4 ">
          <Form
            className="shadow p-3 mb-5 bg-white rounded"
            onSubmit={handleSubmit}
            style={{
              transform: "translateY(-25%)",
              height: "500px",
              width: "1200px",
            }}
          >
            <Row className="mb-3" style={{ marginTop: "3%" }}>
              <Col>
                <Form.Group controlId="exampleFormControlTextarea1">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter Project Theme"
                  />
                  <Form.Text className="text-danger">
                    {errorMessages.name}
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col className="d-flex align-items-end">
                <Button variant="primary" type="submit">
                  Save Project
                </Button>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="reason">
                  <Form.Label>Reason</Form.Label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Reason</option>
                    <option value="Business">For Business</option>
                    <option value="Dealership">For Dealership</option>
                    <option value="Transport">For Transport</option>
                  </select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="type">
                  <Form.Label>Type</Form.Label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Type</option>
                    <option value="External">External</option>
                    <option value="Vendor">Vendor</option>
                    <option value="Internal">Internal</option>
                  </select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="division">
                  <Form.Label>Division</Form.Label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="division"
                    value={formData.division}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Division</option>
                    <option value="Filters">Filters</option>
                    <option value="Compressor">Compressor</option>
                    <option value="Pumps">Pumps</option>
                    <option value="Glass">Glass</option>
                    <option value="Water Heater">Water Heater</option>
                  </select>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="category">
                  <Form.Label>Category</Form.Label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="Quality A">Quality A</option>
                    <option value="Quality B">Quality B</option>
                    <option value="Quality C">Quality C</option>
                    <option value="Quality D">Quality D</option>
                  </select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="priority">
                  <Form.Label>Priority</Form.Label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="department">
                  <Form.Label>Department</Form.Label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="dept"
                    value={formData.dept}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Department</option>
                    <option value="Startegy">Startegy</option>
                    <option value="Finance">Finance</option>
                    <option value="Quality">Quality</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Stores">Stores</option>
                  </select>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col>
                <Form.Group controlId="startDate">
                  <Form.Label>Start Date as per Project Plan</Form.Label>
                  <Form.Control
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                  />
                  <Form.Text className="text-danger">
                    {errorMessages.startDate}
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="endDate">
                  <Form.Label>End Date as per Project Plan</Form.Label>
                  <Form.Control
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                  />
                  <Form.Text className="text-danger">
                    {errorMessages.endDate}
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col>
                <Form.Label>Location</Form.Label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Location</option>
                  <option value="Pune">Pune</option>
                  <option value="Ranchi">Ranchi</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                </select>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
