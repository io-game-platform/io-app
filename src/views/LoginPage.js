import React, {Component} from 'react'
import GoogleLogin from 'react-google-login'

class LoginPage extends Component {

  responseGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj);
  }
  render(){
    return (
      <div>
        <br></br>
        <GoogleLogin
          clientId="587257358752-d8jqg08f75oraevg5vq70f1mpig7olfv.apps.googleusercontent.com"
          buttonText="Sign In with Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    )
  }
}

export default LoginPage;