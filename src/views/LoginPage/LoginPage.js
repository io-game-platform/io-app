import React, {Component} from 'react'
import GoogleLogin from 'react-google-login'
import "./LoginPage.scss";
import AppLogo from "../../app-logo.png";
import Input from "../../components/Input/Input";
import {Checkbox, FormControlLabel, withStyles} from "@material-ui/core";

const CustomCheckbox = withStyles({
    root: {
        color: '#595dff',
        '&$checked': {
            color: '#595dff'
        }
    }
})((props) => <Checkbox color="default" {...props}/>);

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: true,
            animation: "",
            isDeveloper: false,
            gitHubUsername: "",
            gitSSHKey: ""
        }
    }


    responseGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj);
  }
  render(){
    return (
      <div className="login-page">
          <div className="login-content-left">
              <h1 className="page-title">Welcome to</h1>
              <h2 data-heading="io.io" className="page-title">io.io</h2>
              <img src={AppLogo} alt="io.io logo"/>
          </div>
          <div className={`login-content-right ${this.state.animation}`}>
              <h1 className="page-title login-title">{this.state.login ? "Log In" : "Sign Up"}</h1>
              <h4 className="login-subtitle">{this.state.login ? "Welcome back!" : "It only takes a moment"}</h4>
              {!this.state.login && <FormControlLabel
                  className="dev-checkbox"
                  control={<CustomCheckbox onChange={(e) => {
                      this.setState({
                          isDeveloper: e.target.checked,
                          gitHubUsername: "",
                          gitSSHKey: ""
                      });
                  }}/>}
                  label="I am a developer"/>
              }
              {!this.state.login && this.state.isDeveloper && <Input
                  className="login-input"
                  placeholder="GitHub Username"
                  onChange={(e) => {
                      this.setState({
                          gitHubUsername: e.target.value
                      });
                  }}
              />}
              {!this.state.login && this.state.isDeveloper && <Input
                  className="login-input"
                  placeholder="Git SSH Key"
                  onChange={(e) => {
                      this.setState({
                          gitSSHKey: e.target.value
                      });
                  }}
              />}
              <GoogleLogin
                  className="google-login-button"
                  clientId="587257358752-d8jqg08f75oraevg5vq70f1mpig7olfv.apps.googleusercontent.com"
                  buttonText={`${this.state.login ? "Log In" : "Sign Up"} with Google`}
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle}
                  cookiePolicy={'single_host_origin'}
              />
              <p
                  className="link-button"
                  onClick={() => {
                      this.setState({
                          animation: "fade-out"
                      });
                      setTimeout(() => {
                          this.setState({
                              login: !this.state.login,
                              animation: "fade-in"
                          });
                      }, 600);
                  }}
              >
                  {this.state.login ? "Need an account? Sign Up" : "Already a member? Log In"}
              </p>
          </div>
      </div>
    )
  }
}

export default LoginPage;