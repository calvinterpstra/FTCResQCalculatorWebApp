import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper'

var MyStepper = React.createClass({

  getInitialState: function () {
    return {
      stepIndex: 0,
    };
  },

  handleNext: function () {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
    });
  },

  handlePrev: function () {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  },

  render() {
    const {stepIndex} = this.state;

    return (
      <div>
        <Paper style={{height: 100, width: 220, margin: 20, textAlign: 'center', display: 'inline-block'}} zDepth={1}>
          <p>{stepIndex}</p>
          <div>
            <RaisedButton 
              label="-"
              secondary={true}
              disabled={stepIndex === 0}
              onTouchTap={this.handlePrev}
              style={{ marginRight: 12 }}
              />
            <RaisedButton
              label={'+'}
              primary={true}
              disabled={stepIndex === 16}
              onTouchTap={this.handleNext}
              />
          </div>
        </Paper>
      </div >
    );
  }
});

export default MyStepper;
