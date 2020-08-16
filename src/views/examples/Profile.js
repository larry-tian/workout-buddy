import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import io from "socket.io-client";
import Peer from "simple-peer";
import styled from "styled-components";
import {
  Col,
  Card,
  Button,
  CardBody
} from "reactstrap";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
`;

const Video = styled.video`
  width: 50%;
  height: 50%;
`;

function App() {
  const [yourID, setYourID] = useState("");
  const [users, setUsers] = useState({});
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);

  const userVideo = useRef();
  const partnerVideo = useRef();
  const socket = useRef();

  useEffect(() => {
    socket.current = io.connect("/");
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
      setStream(stream);
      if (userVideo.current) {
        userVideo.current.srcObject = stream;
      }
    })

    socket.current.on("yourID", (id) => {
      setYourID(id);
    })
    socket.current.on("allUsers", (users) => {
      setUsers(users);
    })

    socket.current.on("hey", (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setCallerSignal(data.signal);
    })
  }, []);

  function callPeer(id) {
    const peer = new Peer({
      initiator: true, //if this person is initiator or not
      trickle: false,
      config: {

        iceServers: [
            {
                urls: "stun:numb.viagenie.ca",
                username: "sultan1640@gmail.com",
                credential: "98376683"
            },
            {
                urls: "turn:numb.viagenie.ca",
                username: "sultan1640@gmail.com",
                credential: "98376683"
            }
        ]
    },
      stream: stream,
    });

    peer.on("signal", data => {
      socket.current.emit("callUser", { userToCall: id, signalData: data, from: yourID })
    })

    peer.on("stream", stream => {
      if (partnerVideo.current) {
        partnerVideo.current.srcObject = stream;
      }
    });

    socket.current.on("callAccepted", signal => {
      setCallAccepted(true);
      peer.signal(signal); //send signal to the call receiver?
    })

  }

  function acceptCall() {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", data => {
      socket.current.emit("acceptCall", { signal: data, to: caller })
    })

    peer.on("stream", stream => {
      partnerVideo.current.srcObject = stream;
    });

    peer.signal(callerSignal);
  }

  let UserVideo;
  if (stream) {
    UserVideo = (
      <Video className="m-auto" playsInline muted ref={userVideo} autoPlay />
    );
  }

  let PartnerVideo;
  if (callAccepted) {
    PartnerVideo = (
      <Video playsInline ref={partnerVideo} autoPlay />
    );
  }

  let incomingCall;
  if (receivingCall) {
    incomingCall = (
      <div>
        <h1>{caller} is calling you</h1>
        <button onClick={acceptCall}>Accept</button>
      </div>
    )
  }
  return (
    <Container>
        <div className="header bg-gradient-info pb-2 pt-5 pt-8">
            <div className="header-body">
              {/* Card stats */}
            </div>
       </div>
      <Row>
        <Col xl="7">
          <Row className="mt-3 ml-2 mb-2">
            <h1>Your personal workout room</h1>
          </Row>
          <Row>
            {UserVideo}
            {PartnerVideo}
          </Row>
          <Row>
            <Video className="m-3" playsInline muted ref={userVideo} autoPlay />
            <Video className="m-3" playsInline muted ref={userVideo} autoPlay />
          </Row>
          <Row>
            {Object.keys(users).map(key => {
              if (key === yourID) {
                return null;
              }
              return (
                <button onClick={() => callPeer(key)}>Call {key}</button>
              );
            })}
          </Row>
          <Row>
            {incomingCall}
          </Row>
          <Row>
            <Col>
              <p className="text-centered">Waiting for the other people to join...</p>
            </Col>
            <Col>
              <Button color="info">Disconnect</Button>
              <Button color="danger">Mute</Button>
            </Col>
          </Row>
        </Col>
        <Col xl="5">
            <Card className="mt-2">
              <CardBody style={{maxWidth: `100vw`}}>
                <Row className="mt-3 ml-2 mb-2">
                  <p>Today's workout instructions</p>
                </Row>
                <Row>
                <iframe className="ml-5 mb-4" width="560" height="315" src="https://www.youtube.com/embed/GLy2rYHwUqY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Row>


              </CardBody>
            </Card>
            <Card className = "mt-2">
              <Row className="mt-3 ml-4 mb-2">
                <h2>Remaining Time:</h2>
                <p className="ml-3">24 minutes</p>
              </Row>
            </Card>
        </Col>
      </Row>

    </Container>
  );
}

export default App;
