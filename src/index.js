import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux'
import { Provider } from "react-redux";
import reducer  from "./store/index";
import App from "./App";
import * as serviceWorker from './serviceWorker';
import promiseMiddleware from "redux-promise"
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
const client = new ApolloClient({
    uri: "http://localhost:3001/graphql"
});
let store = createStore(reducer,applyMiddleware(promiseMiddleware))
console.log(store.getState())

ReactDOM.render( <Provider store={ store }> <ApolloProvider client={client}> <App /> </ApolloProvider> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
