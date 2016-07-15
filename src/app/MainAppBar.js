import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar'

var MainAppBar = React.createClass({

    render() {
        return (
            <div style={this.context.muiTheme}>
                <AppBar
                    title="FTC ResQ Scouter"
                    />
            </div>
        );
    }
});

export default MainAppBar;