/* Populated by react-webpack-redux:action */

import { cac } from "../utils";

export const CHANGE_USERNAME = "CHANGE_USERNAME";
export const CHANGE_PASSWORD = "CHANGE_PASSWORD";


export const changeUserName = cac( CHANGE_USERNAME, "value" );
export const changePassword = cac( CHANGE_PASSWORD, "value" );


export function loginSystem () {

	return ( dispatch, getState ) => {
		console.info( getState().login1.username );
		console.info( getState().login1.password );
	}
};
