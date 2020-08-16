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
import React from 'react'; 
import firebase from 'firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// reactstrap components
import {
  Card,
  CardHeader,
  Col
} from "reactstrap";

class Login extends React.Component {
    constructor(props){
      super(props)
      this.state = {
          user: null
      };
    }

  // Configure Firebase UI (inside the component, public class field)
  uiConfig = {
      signInOptions: [
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      // for external sign-in methods, use popup instead of redirect
      signInFlow: "popup"
  };

  enterUser = (user) => {
      this.setState((currentState) => {
        currentState.user = user.replace(/[^a-zA-Z0-9]/g, "");
        return currentState;
      })
  }

  componentDidMount() {

      this.authUnSubFunction = firebase.auth().onAuthStateChanged((firebaseUser) => {
          if (firebaseUser) {         // If exists, then we logged in
              this.setState({ user: firebaseUser });
              this.enterUser(this.state.user.email)
          } else {
              this.setState({ user: null })
          }
      })
  }

  componentWillUnmount() {
      this.authUnSubFunction(); // stop listening for auth changes
  }

  handleSignOut = () => {
      this.setState({ errorMessage:null }); //clear old error

      firebase.auth().signOut()
      .catch((err) => {
          this.setState({errorMessage: err.message})
      })
      this.enterUser("");
  }

  handleChange = (event) => {
      let field = event.target.name;  //which input
      let value = event.target.value; //what value

      let changes = {}; //object to hold changes
      changes[field] = value;
      this.setState(changes);
  }
  render() {
    let content = null;
    if(!this.state.user) { //signed out
        content = (
            <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
        )
    } else {
        content = (
            <div>
                <section>
                    <div className="alert alert-success">
                        <h3 className="ml-3">Logged in successfully </h3>
                    </div>

                    <button className="btn btn-warning" onClick={this.handleSignOut}>
                        Sign Out
                    </button>

                </section>
            </div>
        )
    }
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="btn-wrapper text-center">

                    <h2 className="scheduleTitleTop">Log In</h2>
                    <section>
                        {/* only included if first clause is true */}
                        {this.state.errorMessage &&
                            <p className="alert alert-danger">{this.state.errorMessage}</p>
                        }
                
                        {/* show content based on user login state */}
                        {content}
                    </section>
              </div>
            </CardHeader>
          </Card>
        </Col>
      </>
    );
  }
}

export default Login;
