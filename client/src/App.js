import React, { Component } from "react";
import Header from "./Header/index";

import { GlobalResetStyle } from "./style";

// import store from "./store";
// import { Provider } from "react-redux";
// import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <GlobalResetStyle />
        <Header />
      </>
    );
  }
}

export default App;
