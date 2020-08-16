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
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Card,
  CardBody,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Icons extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
            </div>
          </Container>
        </div>
        {/* Page content */}
        <Container className=" mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
            <h2 className="scheduleTitleTop">Select a buddy to get their workout room ID!</h2>

              <Card className="shadow">

                <CardBody>
                <Col xl="6">
                    </Col>
                    <Col xl="6">
                      <Form className="navbar-search navbar-search-light form-inline ml-4 mt-3 d-none d-md-flex ml-lg-auto">
                        <FormGroup className="mb-0">
                          <InputGroup className="input-group-alternative">
                            <Input placeholder="Search" type="text" />
                          </InputGroup>
                        </FormGroup>
                      </Form>
                    </Col>
                  <Row className=" icon-examples">

                    <Col xl="12">
                      <h2 className="mb-2 mt-2">Workout buddies you might know:</h2>
                    </Col>

                    <Col lg="3" md="6">
                      <CopyToClipboard
                        text={"circle-08"}
                        onCopy={() =>
                          this.setState({ copiedText: "circle-08" })
                        }
                      >
                        <button
                          className=" btn-icon-clipboard"
                          data-clipboard-text="circle-08"
                          id="tooltip63796078"
                          type="button"
                        >
                          <div>
                            <i className=" ni ni-circle-08" />
                            <span>John Smith</span>
                          </div>
                        </button>
                      </CopyToClipboard>
                      <UncontrolledTooltip
                        delay={0}
                        trigger="hover focus"
                        target="tooltip63796078"
                      >
                        {this.state.copiedText === "circle-08"
                          ? "You already selected your workout buddy!"
                          : "Select this workout buddy"}
                      </UncontrolledTooltip>
                    </Col>

                    <Col lg="3" md="6">
                      <CopyToClipboard
                        text={"circle-08"}
                        onCopy={() =>
                          this.setState({ copiedText: "circle-08" })
                        }
                      >
                        <button
                          className=" btn-icon-clipboard"
                          data-clipboard-text="circle-08"
                          id="tooltip63796078"
                          type="button"
                        >
                          <div>
                            <i className=" ni ni-circle-08" />
                            <span>Alice Shadow</span>
                          </div>
                        </button>
                      </CopyToClipboard>
                      <UncontrolledTooltip
                        delay={0}
                        trigger="hover focus"
                        target="tooltip63796078"
                      >
                        {this.state.copiedText === "circle-08"
                          ? "You already selected your workout buddy!"
                          : "Select this workout buddy"}
                      </UncontrolledTooltip>
                    </Col>

                    <Col lg="3" md="6">
                      <CopyToClipboard
                        text={"circle-08"}
                        onCopy={() =>
                          this.setState({ copiedText: "circle-08" })
                        }
                      >
                        <button
                          className=" btn-icon-clipboard"
                          data-clipboard-text="circle-08"
                          id="tooltip63796078"
                          type="button"
                        >
                          <div>
                            <i className=" ni ni-circle-08" />
                            <span>Chris Dong</span>
                          </div>
                        </button>
                      </CopyToClipboard>
                      <UncontrolledTooltip
                        delay={0}
                        trigger="hover focus"
                        target="tooltip63796078"
                      >
                        {this.state.copiedText === "circle-08"
                          ? "You already selected your workout buddy!"
                          : "Select this workout buddy"}
                      </UncontrolledTooltip>
                    </Col>

                    <Col lg="3" md="6">
                      <CopyToClipboard
                        text={"circle-08"}
                        onCopy={() =>
                          this.setState({ copiedText: "circle-08" })
                        }
                      >
                        <button
                          className=" btn-icon-clipboard"
                          data-clipboard-text="circle-08"
                          id="tooltip63796078"
                          type="button"
                        >
                          <div>
                            <i className=" ni ni-circle-08" />
                            <span>Zachery Huber</span>
                          </div>
                        </button>
                      </CopyToClipboard>
                      <UncontrolledTooltip
                        delay={0}
                        trigger="hover focus"
                        target="tooltip63796078"
                      >
                        {this.state.copiedText === "circle-08"
                          ? "You already selected your workout buddy!"
                          : "Select this workout buddy"}
                      </UncontrolledTooltip>
                    </Col>

                    <Col lg="3" md="6">
                      <CopyToClipboard
                        text={"circle-08"}
                        onCopy={() =>
                          this.setState({ copiedText: "circle-08" })
                        }
                      >
                        <button
                          className=" btn-icon-clipboard"
                          data-clipboard-text="circle-08"
                          id="tooltip63796078"
                          type="button"
                        >
                          <div>
                            <i className=" ni ni-circle-08" />
                            <span>Brent Kemp</span>
                          </div>
                        </button>
                      </CopyToClipboard>
                      <UncontrolledTooltip
                        delay={0}
                        trigger="hover focus"
                        target="tooltip63796078"
                      >
                        {this.state.copiedText === "circle-08"
                          ? "You already selected your workout buddy!"
                          : "Select this workout buddy"}
                      </UncontrolledTooltip>
                    </Col>

                    <Col lg="3" md="6">
                      <CopyToClipboard
                        text={"circle-08"}
                        onCopy={() =>
                          this.setState({ copiedText: "circle-08" })
                        }
                      >
                        <button
                          className=" btn-icon-clipboard"
                          data-clipboard-text="circle-08"
                          id="tooltip63796078"
                          type="button"
                        >
                          <div>
                            <i className=" ni ni-circle-08" />
                            <span>Hayden Ayers</span>
                          </div>
                        </button>
                      </CopyToClipboard>
                      <UncontrolledTooltip
                        delay={0}
                        trigger="hover focus"
                        target="tooltip63796078"
                      >
                        {this.state.copiedText === "circle-08"
                          ? "You already selected your workout buddy!"
                          : "Select this workout buddy"}
                      </UncontrolledTooltip>
                    </Col>

                    <Col lg="3" md="6">
                      <CopyToClipboard
                        text={"circle-08"}
                        onCopy={() =>
                          this.setState({ copiedText: "circle-08" })
                        }
                      >
                        <button
                          className=" btn-icon-clipboard"
                          data-clipboard-text="circle-08"
                          id="tooltip63796078"
                          type="button"
                        >
                          <div>
                            <i className=" ni ni-circle-08" />
                            <span>Momina Chadwick</span>
                          </div>
                        </button>
                      </CopyToClipboard>
                      <UncontrolledTooltip
                        delay={0}
                        trigger="hover focus"
                        target="tooltip63796078"
                      >
                        {this.state.copiedText === "circle-08"
                          ? "You already selected your workout buddy!"
                          : "Select this workout buddy"}
                      </UncontrolledTooltip>
                    </Col>

                    <Col lg="3" md="6">
                      <CopyToClipboard
                        text={"circle-08"}
                        onCopy={() =>
                          this.setState({ copiedText: "circle-08" })
                        }
                      >
                        <button
                          className=" btn-icon-clipboard"
                          data-clipboard-text="circle-08"
                          id="tooltip63796078"
                          type="button"
                        >
                          <div>
                            <i className=" ni ni-circle-08" />
                            <span>Abdur Tapia</span>
                          </div>
                        </button>
                      </CopyToClipboard>
                      <UncontrolledTooltip
                        delay={0}
                        trigger="hover focus"
                        target="tooltip63796078"
                      >
                        {this.state.copiedText === "circle-08"
                          ? "You already selected your workout buddy!"
                          : "Select this workout buddy"}
                      </UncontrolledTooltip>
                    </Col>

                    <Col xl="12">
                      <h2 className="mb-2 mt-2">Workout buddies near you:</h2>
                    </Col>

                    <Col lg="3" md="6">
                      <CopyToClipboard
                        text={"circle-08"}
                        onCopy={() =>
                          this.setState({ copiedText: "circle-08" })
                        }
                      >
                        <button
                          className=" btn-icon-clipboard"
                          data-clipboard-text="circle-08"
                          id="tooltip63796078"
                          type="button"
                        >
                          <div>
                            <i className=" ni ni-circle-08" />
                            <span>Arisha Stevens</span>
                          </div>
                        </button>
                      </CopyToClipboard>
                      <UncontrolledTooltip
                        delay={0}
                        trigger="hover focus"
                        target="tooltip63796078"
                      >
                        {this.state.copiedText === "circle-08"
                          ? "You already selected your workout buddy!"
                          : "Select this workout buddy"}
                      </UncontrolledTooltip>
                    </Col>

                    <Col lg="3" md="6">
                      <CopyToClipboard
                        text={"circle-08"}
                        onCopy={() =>
                          this.setState({ copiedText: "circle-08" })
                        }
                      >
                        <button
                          className=" btn-icon-clipboard"
                          data-clipboard-text="circle-08"
                          id="tooltip63796078"
                          type="button"
                        >
                          <div>
                            <i className=" ni ni-circle-08" />
                            <span>Shirley Xia</span>
                          </div>
                        </button>
                      </CopyToClipboard>
                      <UncontrolledTooltip
                        delay={0}
                        trigger="hover focus"
                        target="tooltip63796078"
                      >
                        {this.state.copiedText === "circle-08"
                          ? "You already selected your workout buddy!"
                          : "Select this workout buddy"}
                      </UncontrolledTooltip>
                    </Col>

                    <Col lg="3" md="6">
                      <CopyToClipboard
                        text={"circle-08"}
                        onCopy={() =>
                          this.setState({ copiedText: "circle-08" })
                        }
                      >
                        <button
                          className=" btn-icon-clipboard"
                          data-clipboard-text="circle-08"
                          id="tooltip63796078"
                          type="button"
                        >
                          <div>
                            <i className=" ni ni-circle-08" />
                            <span>Nathan Rich</span>
                          </div>
                        </button>
                      </CopyToClipboard>
                      <UncontrolledTooltip
                        delay={0}
                        trigger="hover focus"
                        target="tooltip63796078"
                      >
                        {this.state.copiedText === "circle-08"
                          ? "You already selected your workout buddy!"
                          : "Select this workout buddy"}
                      </UncontrolledTooltip>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Icons;
