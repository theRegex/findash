import Clock from "./clock";
import ClockBtn from "./clockBtn";
import React, { Component } from "react";
import { css } from "@emotion/core";
import { hot } from "react-hot-loader";

class App extends Component {
  state = {
    active: false
  }

  handleClick = () => {
    this.setState({active: !this.state.active});
  }

  render() {
    return(
      <div css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: Roboto, "Helvetica Neue", sans-serif;
        font-weight: 300;
      `}>
        <h1 css={css`
            color: #11CCCC;
            font-weight: 300;
            background-color: #111111;
            padding: 6px 18px;
            border-radius: 3px;
          `}>
          REACT APP STARTER</h1>
        <Clock active={this.state.active}/>
        <ClockBtn active={this.state.active} onClick={this.handleClick}/>
      </div>
    );
  }
}

export default hot(module)(App);
