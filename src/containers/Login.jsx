import React from 'react'
import { connect } from 'react-redux'
import {inputUsername, inputPassword} from '../actions/login'

class Login extends React.Component{
  usernameHandler(evt){
    this.props.dispatch(changeUsername(evt.target.value))
  }
  passwordHandler(evt){
    this.props.dispatch(inputPassword(evt.target.value))
  }
  render(){
    return (
      <div>
        <div>早上好，{this.props.username}</div>
        <div>用户名：<input onChange={this.usernameHandler.bind(this)}/></div>
        <div>密　码：<input type="papssword" onChange={this.passwordHandler.bind(this)}/></div>
        <button>登录</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    username: state.login1.username,
    password: state.login1.password
  }
}
export default connect(mapStateToProps)(Login);
