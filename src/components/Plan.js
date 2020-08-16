import React from "react";
import "./Plan.module.css";
import Yoga from "../assets/img/theme/yogajpg.jpg";
import Plank from "../assets/img/theme/plank.jpeg";
import Waist from "../assets/img/theme/waistjpg.jpg";
import Rock from "../assets/img/theme/rock.jpg";

import { Card, CardBody, CardTitle, Container, Row, Col, Button } from "reactstrap";
class Plan extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedDate: false,
      selectedWorkout: false
    };
  }

  enterDate = () => {
    this.setState((currentState) => {
      currentState.selectedDate = true;
      return currentState;
    })
  }

  enterWorkout = () => {
    this.setState((currentState) => {
      currentState.selectedWorkout = true;
      return currentState;
    })
  }
  render() {
    const days = ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"];
    const workouts = [
      {title: "Waist Slimming" , type: "Beginner" , duration: "30 min", img: Waist},
      {title: "Yoga" , type: "Advanced" , duration: "20 min", img: Yoga},
      {title: "Planks", type: "Group workout", duration: "1 min", img: Plank},
      {title: "Mountain Climing", type: "Group workout", duration: "2 min", img: Rock},
    ]


    let selectedWork;
    // This will display what user has selected
    if (this.state.selectedDate === false) {
      selectedWork = <p></p>
    } else if (this.state.selectedDate === true && this.state.selectedWorkout === false) {
        selectedWork = 
        <p>Please select a workout</p>
    } else if (this.state.selectedDate === false && this.state.selectedWorkout === true) {
        selectedWork = 
        <p>Please select a date</p>
    } else {
        selectedWork =
        <p>Your plan has been updated!</p>
    }
    return (
      <Container fluid>
        <Row className="mt-5 mb-3"><h1>This Week's Plan</h1></Row>
        {selectedWork}
        <Row className="mb-3">
          {days.map(day => (
            <Col><Button className="mb-3" onClick={this.enterDate}>{day}</Button></Col>
          ))}
        </Row>
        <Row className="mh-100">
          {workouts.map(workout => {
            return (
            <Col key={workout.title}>
              <Card className="h-px"
                style={{
                  backgroundSize: `cover`,
                  backgroundRepeat: `no-repeat`,
                  backgroundPosition: `center`,
                  backgroundImage: `url(${workout.img})`}}>
                <CardTitle className="text-left m-3 mb-2 mt-2"
                  style={{
                    color: `white`,
                    fontSize: `1.5em`,
                    fontFamily: `Nunito`
                  }}
                >
                  {workout.title}
                </CardTitle>
                <CardBody
                  style={{
                    color: `white`,
                    fontSize: `1em`,
                    fontFamily: `Nunito`
                  }}
                >
                  <p>{workout.type}</p>
                  <p>{workout.duration}</p>
                  <Button className="m-5" onClick={this.enterWorkout}>Start</Button>
                </CardBody>
              </Card>
            </Col>
          )})}
        </Row>
      </Container>
    )
  }
}

export default Plan;