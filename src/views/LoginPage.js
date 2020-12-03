import React, {Component} from 'react'
import GoogleLogin from 'react-google-login'

class LoginPage extends Component {

  responseGoogle=(response)=>{
    console.log(response.email);
    var account = response.email;
    var mysql = require('mysql');
    var con = mysql.createConnection({
      host: "localhost", //lines 11 to 14 need to be changed I do not know the db info
      user: "admin", //lines 11 to 14 need to be changed I do not know the db info
      password: "admin",//lines 11 to 14 need to be changed I do not know the db info
      database: "test"//lines 11 to 14 need to be changed I do not know the db info
    });
    mysql.query("SELECT username FROM user WHERE username = '"+ account +"'", function(err, result, field){
      if(result.length === 0){
        //add a new user because they do not exist in the db
        var sql = "INSERT INTO user (username,email,role,date_created,git_ssh_key,git_account) VALUES (account, NULL , player, 'now()', NULL, NULL)";
        mysql.query(sql, function(err,result){
        if(err) throw err;
        console.log("user account created. finishing login.");
        }    
        )}
        location.href = '/GameCatalog.js';
    })};
    
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