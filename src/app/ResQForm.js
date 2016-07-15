import React from 'react';
import CheckboxExampleSimple from './checkbox';
import MyStepper from './MyStepper';
import ScoreLabel from './ScoreLabel'

var ResQForm = React.createClass({
  getInitialState: function () {
        return {
            scores: {
                autonButtonScore1: 0,
                autonClimbersScore1: 0,
                autonMountainScore1: 0,
                teleopClimbersScore1: 0,
                highBucketScore1: 0,
                midBucketScore1: 0,
                lowBucketScore1: 0,
                floorGoalScore1: 0,
                lowZiplineClimberScore1: 0,
                midZiplineClimberScore1: 0,
                highZiplineClimberScore1: 0,
                allClearScore1: 0,
                endgameMountainScore1: 0,

                autonButtonScore2: 0,
                autonClimbersScore2: 0,
                autonMountainScore2: 0, 
                teleopClimbersScore2: 0,
                highBucketScore2: 0,
                midBucketScore2: 0,
                lowBucketScore2: 0,
                floorGoalScore2: 0,
                lowZiplineClimberScore2: 0,
                midZiplineClimberScore2: 0,
                highZiplineClimberScore2: 0,
                allClearScore2: 0,
                endgameMountainScore2: 0
            },
        };
    },

    handleScoreChange: function (score, scoreType) {
        switch (scoreType) {
            case "autonButtonScore1":
                var s = this.state.scores;
                s.autonButtonScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "autonClimbersScore1":
                var s = this.state.scores;
                s.autonClimbersScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "autonMountainScore1":
                var s = this.state.scores;
                s.autonMountainScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "teleopClimbersScore1":
                var s = this.state.scores;
                s.teleopClimbersScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "highBucketScore1":
                var s = this.state.scores;
                s.highBucketScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "midBucketScore1":
                var s = this.state.scores;
                s.midBucketScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "lowBucketScore1":
                var s = this.state.scores;
                s.lowBucketScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "floorGoalScore1":
                var s = this.state.scores;
                s.floorGoalScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "lowZiplineClimberScore1":
                var s = this.state.scores;
                s.lowZiplineClimberScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "midZiplineClimberScore1":
                var s = this.state.scores;
                s.midZiplineClimberScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "highZiplineClimberScore1":
                var s = this.state.scores;
                s.highZiplineClimberScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "allClearScore1":
                var s = this.state.scores;
                s.allClearScore1 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "endgameMountainScore1":
                var s = this.state.scores;
                s.endgameMountainScore1 = parseInt(score);
                this.setState({ scores: s });
                break;

            case "autonButtonScore2":
                var s = this.state.scores;
                s.autonButtonScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "autonClimbersScore2":
                var s = this.state.scores;
                s.autonClimbersScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "autonMountainScore2":
                var s = this.state.scores;
                s.autonMountainScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "teleopClimbersScore2":
                var s = this.state.scores;
                s.teleopClimbersScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "highBucketScore2":
                var s = this.state.scores;
                s.highBucketScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "midBucketScore2":
                var s = this.state.scores;
                s.midBucketScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "lowBucketScore2":
                var s = this.state.scores;
                s.lowBucketScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "floorGoalScore2":
                var s = this.state.scores;
                s.floorGoalScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "lowZiplineClimberScore2":
                var s = this.state.scores;
                s.lowZiplineClimberScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "midZiplineClimberScore2":
                var s = this.state.scores;
                s.midZiplineClimberScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "highZiplineClimberScore2":
                var s = this.state.scores;
                s.highZiplineClimberScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "allClearScore2":
                var s = this.state.scores;
                s.allClearScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            case "endgameMountainScore2":
                var s = this.state.scores;
                s.endgameMountainScore2 = parseInt(score);
                this.setState({ scores: s });
                break;
            default:
                break;
        }
    },

  render() {
    return (
        <div style={this.context.muiTheme}>
            <CheckboxExampleSimple/>
            <MyStepper/>
            <ScoreLabel scores = {this.state.scores}/>
        </div>
    );
  }
});

export default ResQForm;