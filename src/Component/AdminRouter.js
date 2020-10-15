/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Input from "./Auth/input_Text";
import MainPage from "./Auth/MainPage"




export default function AdminRouter(props) {
  return (
    <Router>
      <div>
        <div>
          <Route
            path="/"
            exact
            strict
            component={Input}
            history={props.history}
          />
          <Route
            path="/MainPage"
            exact
            strict
            component={MainPage}
            history={props.history}
          />

        </div>
      </div>
    </Router>
  );
}
