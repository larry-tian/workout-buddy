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
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
  CardTitle
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1
} from "variables/charts.js";

// import firebase
import firebase from 'firebase/app';
import 'firebase/database';

import Plan from "components/Plan";
import Header from "components/Headers/Header.js";

class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeNav: 1,
      chartExample1Data: "data1",
      exercise: "",
      hostWorkout: false
      // userID: "Unknown",
      // firstName: "Unknown",
      // lastName: "Unknown",
      // age: "Unknown",
      // gender: "Unknown",
      // workoutCompletion: 0,
      // workoutStillNeed: 0,
      // lastWorkout: "Unknown"
    };
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }

  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
  };

  enterExercise = () => {
    this.setState((currentState) => {
      currentState.exercise = "Arms Workout";
      return currentState;
    })
  }

  enterHost = () => {
    this.setState((currentState) => {
      currentState.hostWorkout = true;
      return currentState;
    })
  }

  render() {
        let selectedExercise;
        // This will display what user has selected
        if (this.state.exercise === undefined | this.state.exercise=== "") {
            selectedExercise = <p></p>;
        } else {
            selectedExercise = 
            <p>You have selected <strong className="streaks">{this.state.exercise}</strong>!</p>
        }

        let selectedHost;
        // This will display what user has selected
        if (this.state.hostWorkout === false) {
            selectedHost = <p></p>;
        } else {
            selectedHost = 
            <p>Your meeting has been set up</p>;
        }
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row className=".mh-100">
            <Col xl="8">
              <Row className="align-items-center">
                <Col xl="8">
                  {selectedExercise}
                <Card className="shadow p-3 ">
                  <Row className="justify-content-center">
                    <Col><i className="fas fa-dumbbell fa-3x ml-4" /></Col>
                    <Col ><p>Arms Workout</p></Col>
                    <Col><p>Progress: 40%</p></Col>
                    <Col><Button onClick={this.enterExercise}>Continue</Button></Col>
                  </Row>
                </Card>
                </Col>
                <Col xl="4">
                  {selectedHost}
                  <Button className="ml-4" onClick={this.enterHost}>Host Workout</Button>
                </Col>
              </Row>
              <Row>
                <Plan/>
              </Row>
            </Col>
            <Col className="mb-5 mb-xl-0" xl="4">
              <Card className="bg-gradient-default shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-light ls-1 mb-1">
                        Overview
                      </h6>
                      <h2 className="text-white mb-0">Workout Hours</h2>
                    </div>
                    <div className="col">
                      <Nav className="justify-content-end" pills>
                        <NavItem>
                          <NavLink
                            className={classnames("py-2 px-3", {
                              active: this.state.activeNav === 1
                            })}
                            href="#pablo"
                            onClick={e => this.toggleNavs(e, 1)}
                          >
                            <span className="d-none d-md-block">Change View</span>
                            <span className="d-md-none">M</span>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                        </NavItem>
                      </Nav>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  {/* Chart */}
                  <div className="chart">
                    <Line
                      data={chartExample1[this.state.chartExample1Data]}
                      options={chartExample1.options}
                      getDatasetAtEvent={e => console.log(e)}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Index;
