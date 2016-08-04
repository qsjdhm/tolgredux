import React from "react";
import { connect } from "react-redux";
import { changeUserName, changePassword, loginSystem } from "../actions/login1";

class Login1 extends React.Component {

	usernameHandler ( evt ) {
		this.props.dispatch( changeUserName( evt.target.value ) );
	};

	passwordHandler ( evt ) {
		this.props.dispatch( changePassword( evt.target.value ) );
	};

	loginSystemHandler () {
		this.props.dispatch( loginSystem() );
	};

	render () {

		return (
			<div>
				<div>早上好，{ this.props.username }</div>
				<div>用户名：<input type="text" onChange={ this.usernameHandler.bind( this ) } /></div>
				<div>密码  ：<input type="text" onChange={ this.passwordHandler.bind( this ) } /></div>
				<div><input type="button" onClick={ this.loginSystemHandler.bind( this ) } /></div>
			</div>
		);
	};
};

function mapStateToProps ( state ) {

	return {
		username : state.login1.username
		//,
		//password : state.login1.password
	}
}

export default connect( mapStateToProps )( Login1 );