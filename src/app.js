import { css } from "emotion";
import React, { Component } from "react";
import { hot } from "react-hot-loader";

class App extends Component {
  state = {
    clock: new Date(Date.now()),
    active: false
  }

  handleClick = () => {
    if(this.state.active) {
      clearInterval(this.interval);
      this.setState({active: false});
    } else {
      this.setState({active: true});
      this.interval = setInterval(() => {
        this.setState({clock: new Date(Date.now())});
      }, 1000);
    }
  }

  render() {
    return(
      <div className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: Roboto, "Helvetica Neue", sans-serif;
        font-weight: 300;
      `}>
        <h1 className={css`
            color: #11CCCC;
            font-weight: 300;
            background-color: #111111;
            padding: 6px 18px;
            border-radius: 3px;
          `}>
          REACT APP STARTER</h1>
        <div>{this.state.clock.toLocaleTimeString()}</div>
        <button onClick={this.handleClick}
          className={css`
            margin-top: 30px;
            height: 32px;
            width: 64px;
            background-color: ${(this.state.active ? "#11CCCC" : "#111111")};
            border-radius: 3px;
            outline: none;
            font-size: 16px;
            color: ${(this.state.active ? "#111111" : "#11CCCC")};

            &:hover {
              cursor: pointer;
            }
          `}>
          {(this.state.active ? "Stop" : "Start")}
        </button>
      </div>
    );
  }
}

export default hot(module)(App);
