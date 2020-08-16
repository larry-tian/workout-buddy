import React from "react";

import { Card, CardBody, CardTitle, Container, Row, Col, Button } from "reactstrap";
class Plan extends React.Component {
  render() {
    const days = ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"];
    const workouts = [
      {title: "Waist Slimming" , type: "Beginner" , duration: "30 min"},
      {title: "Yoga" , type: "Advanced" , duration: "20 min"},
      {title: "Planks", type: "Group workout", duration: "1 min"},
      {title: "Mountain Climing", type: "Group workout", duration: "2 min"},
    ]
    return (
      <Container fluid>
        <Row className="mt-5 mb-3"><h1>This Week's Plan</h1></Row>
        <Row className="mb-3">
          {days.map(day => (
            <Col><Button className="mb-3">{day}</Button></Col>
          ))}
        </Row>
        <Row className="mh-100">
          {workouts.map(workout => (
            <Col key={workout.title}>
              <Card className="h-px">
                <CardTitle className="text-left m-3 mb-2 mt-2">
                  {workout.title}
                </CardTitle>
                <CardBody>
                  <p>{workout.type}</p>
                  <p>{workout.duration}</p>
                  <Button className="m-5">Start</Button>
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