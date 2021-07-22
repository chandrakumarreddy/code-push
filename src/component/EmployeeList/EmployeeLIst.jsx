import React from "react";
import { Link } from "react-router-dom";
import EmployeesContext from "../../store/employeeContext";

export default function EmployeeLIst() {
  const { state: employees, dispatch } = React.useContext(EmployeesContext);
  if (!employees.length) return <h1>No employees at this time</h1>;
  const headers = Object.keys(employees[0]);
  const handleDelete = (id) => {
    if (window.confirm("are u ok to delete")) {
      const newEmployees = employees.filter((emp) => emp.id !== id);
      dispatch({
        type: "UPDATE",
        payload: newEmployees,
      });
    }
  };
  return (
    <table className="table mt3">
      <thead className="thead-dark dark">
        <tr>
          {headers.map((header) => (
            <th scope="col" className="white" key={header}>
              {header}
            </th>
          ))}
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        {employees.map(
          ({
            id,
            firstName,
            lastName,
            dob,
            designation,
            photo,
            experience,
          }) => (
            <tr key={id}>
              <th scope="row">{id}</th>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{dob}</td>
              <td>{designation}</td>
              <td>
                <img
                  src={photo}
                  className="img-fluid profile-image"
                  alt={firstName}
                />
              </td>
              <td>{experience}</td>
              <td>
                <Link to={`/edit/${id}`}>Edit</Link>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary w100"
                  onClick={() => handleDelete(id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}
