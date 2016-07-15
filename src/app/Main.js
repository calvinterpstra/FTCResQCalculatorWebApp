import React, {Component} from 'react';
import * as Colors from 'material-ui/styles/colors';
import * as ColorManipulator from 'material-ui/utils/colorManipulator';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainAppBar from './MainAppBar';
import MainTabs from './MainTabs';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: Colors.amber500,
    primary2Color: Colors.amber700,
    primary3Color: Colors.grey400,
    accent1Color: Colors.grey400,
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
    pickerHeaderColor: Colors.cyan500,
    clockCircleColor: ColorManipulator.fade(Colors.darkBlack, 0.07),
    shadowColor: Colors.fullBlack,
  }
});

var Main = React.createClass({
  getInitialState: function () {
    return {
      open: false
    };
  },

  handleRequestClose() {
    this.setState({
      open: false
    });
  },

  handleTouchTap() {
    this.setState({
      open: true
    });
  },

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <MainAppBar/>
          <MainTabs/>
        </div>
      </MuiThemeProvider>
    );
  }
});

export default Main;
