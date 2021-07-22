import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import EmployeesContext from "../../store/employeeContext";

export default function Edit() {
  const history = useHistory();
  const { state: employeesList, dispatch } = React.useContext(EmployeesContext);
  const { params } = useRouteMatch();
  const [employee, setEmployee] = React.useState(
    employeesList.find((emp) => emp.id === params.id)
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployees = employeesList.filter((emp) => emp.id !== params.id);
    newEmployees.unshift(employee);
    dispatch({
      type: "UPDATE",
      payload: newEmployees,
    });
    history.push("/");
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
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
        <img
          src={employee.photo}
          alt={employee.firstName}
          width="100"
          height="100"
        />
      </div>
      <button type="button" class="btn btn-primary w100" onClick={handleSubmit}>
        Update
      </button>
    </form>
  );
}
