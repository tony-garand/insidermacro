import React, { Component } from "react";
import AppRouter from './router/appRouter';
import { Provider } from "react-redux";
import store from "./store";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}
export default App;
