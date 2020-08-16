import React from "react";

import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
class Plan extends React.Component {
  render() {
    const days = ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"];
    const workouts = [
      {title: "Waist Slimming" , type: "Beginner" , duration: "30 min"},
      {title: "Yoga" , type: "Advanced" , duration: "20 min"},
      {title: "Planks", type: "Group workout", duration: "1 min"},
    ]
    return (
      <Container fluid>
        <Row><h2>This Week's Plan</h2></Row>
        <Row>
          {days.map(day => (
            <Col><Button>{day}</Button></Col>
          ))}
        </Row>
        <Row>
          {workouts.map(workout => (
            <Col key={workout.title}>
              <Card>
                <CardTitle>
                  {workout.title}
                </CardTitle>
                <CardBody>
                  {workout.type}
                  {workout.duration}
                  <Button>Start</Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    )
  }
}

export default Plan;