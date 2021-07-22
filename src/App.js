import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EmployeeLIst from "./component/EmployeeList/EmployeeLIst";
import Nav from "./component/Nav/Nav";
import EmployeesContext from "./store/employeeContext";
import employess from "./data/employees.json";
import Edit from "./component/Edit/Edit";
import Add from "./component/Add/Add";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD": {
      return [...state, payload];
    }
    case "UPDATE": {
      return payload;
    }
    case "DELETE": {
      return state.filter((emp) => emp.id !== payload);
    }
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, employess);
  return (
    <EmployeesContext.Provider value={{ state, dispatch }}>
      <div className="container">
        <Router>
          <div className="col-md-12">
            <Nav />
            <Switch>
              <Route path="/" exact component={EmployeeLIst} />
              <Route path="/edit/:id" component={Edit} />
              <Route path="/add" component={Add} />
            </Switch>
          </div>
        </Router>
      </div>
    </EmployeesContext.Provider>
  );
}

export default App;
