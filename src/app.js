import { css } from "emotion";
import React, { Component } from "react";
import { hot } from "react-hot-loader";

class App extends Component {
  state = {
    clock: new Date(Date.now()).toLocaleString(),
    active: false
  }

  handleClick = () => {
    if(this.state.active) {
      clearInterval(this.interval);
      this.setState({active: false});
    } else {
      this.setState({active: true});
      this.interval = setInterval(() => {
        this.setState({clock: new Date(Date.now()).toLocaleString()});
      }, 1000);
    }
  }

  render() {
    return(
      <div className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
      `}>
        <h1 className={css` 
            color: #1144FF;
          `}>
          REACT APP STARTER</h1>
        <div>{this.state.clock}</div>
        <button onClick={this.handleClick}
          className={css`
            margin-top: 30px;
            height: 32px;
            width: 64px;
            background-color: ${(this.state.active ? "#FF2222" : "#22DD22")};
            border-radius: 3px;
            outline: none;
            font-size: 16px;
            color: white;

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
