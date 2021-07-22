import React from "react";
import { useHistory } from "react-router-dom";
import EmployeesContext from "../../store/employeeContext";

export default function Add() {
  const { state: employeesList, dispatch } = React.useContext(EmployeesContext);
  const [employee, setEmployee] = React.useState({
    id: String + (employeesList.length + 1),
    firstName: "",
    lastName: "",
    dob: "",
    designation: "",
    experience: "",
    photo: "",
  });
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!employee.firstName) {
      window.alert("fill all the fields");
      return;
    }
    dispatch({
      type: "UPDATE",
      payload: [...employeesList, employee],
    });
    history.push("/");
  };
  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    setEmployee((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };
  return (
    <form className="form w60" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="first name"
          value={employee.firstName}
          onChange={handleChange}
          required
          name="firstName"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="last name"
          value={employee.lastName}
          onChange={handleChange}
          required
          name="lastName"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="dob"
          value={employee.dob}
          onChange={handleChange}
          required
          name="dob"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="designation"
          value={employee.designation}
          onChange={handleChange}
          required
          name="designation"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="experience"
          value={employee.experience}
          onChange={handleChange}
          required
          name="experience"
        />
      </div>
      <div className="mb3">
        <input
          type="text"
          placeholder="photo"
          value={employee.photo}
          onChange={handleChange}
          required
          name="photo"
        />
        {employee.photo && (
          <img
            src={employee.photo}
            alt={employee.firstName}
            width="100"
            height="100"
          />
        )}
      </div>
      <button
        type="button"
        className="btn btn-primary w100"
        onClick={handleSubmit}
      >
        Update
      </button>
    </form>
  );
}
