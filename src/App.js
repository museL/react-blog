import React from 'react';

import Login from './components/loginCompront';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import NormalLoginForm from "./components/NormalLoginForm"
import "./css/css.css"
import { getSessionStore } from '../src/js/utils'
function App() {
	console.log("121");
	return (
		<div className="App">
		<Router>
			<Switch>
				<NormalLoginForm/>
				<Router path="/login" render={() => {
					const isLogin = this.props.token;
					console.log(isLogin)
					return isLogin ? <Redirect to="/index" /> :<NormalLoginForm/>
				}} />
			</Switch>
		</Router>
		</div>
	);
}

const mapStateToProps = (state, owns) => ({
	token: state.token||getSessionStore("token"),
	...owns
})

export default connect(
	mapStateToProps
)(App)
