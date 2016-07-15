import React from 'react';
import Slider from 'material-ui/Slider';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

var TeamsTab = React.createClass({

    render() {
        return (
            <div>
                <h2 style={styles.headline}> Teams </h2>
                <p>
                    This is an example tab.
                </p>
                <p>
                    You can put any sort of HTML or react component in here. It even keeps the component state!
                </p>
                <Slider name="slider0" defaultValue={0.5} />
            </div>
        );
    }
});

export default TeamsTab;