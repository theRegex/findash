import PropTypes from "prop-types";
import React, { Component } from "react";

class Clock extends Component {
  state = {
    clock: new Date(Date.now())
  }

  componentDidUpdate = (prevProps) => {
    if(!prevProps.active && this.props.active) {
      this.interval = setInterval(() => {
        this.setState({clock: new Date(Date.now())});
      }, 1000);
    } else if(prevProps.active && !this.props.active) {
      clearInterval(this.interval);
    }
  }

  render() {
    return(
      <React.Fragment>
        {this.state.clock.toLocaleTimeString()}
      </React.Fragment>
    );
  }
};

Clock.propTypes = {
  active: PropTypes.bool
};

export default Clock;
