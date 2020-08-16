/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

// Firebase
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/analytics';

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBrbhlGi66o5ngxGI0gQYdX0OKGMKc6Qvc",
    authDomain: "workout-buddy-fa7c9.firebaseapp.com",
    databaseURL: "https://workout-buddy-fa7c9.firebaseio.com",
    projectId: "workout-buddy-fa7c9",
    storageBucket: "workout-buddy-fa7c9.appspot.com",
    messagingSenderId: "597544238607",
    appId: "1:597544238607:web:2c464524646aca27636d7a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
      <Redirect from="/" to="/admin/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
