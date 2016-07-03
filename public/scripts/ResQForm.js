
var FTCResQCalculatorForm = React.createClass({
    getInitialState: function () {
        return {
            scores: {
                autonButtonScore: 0,
                autonClimbersScore: 0,
                autonMountainScore: 0,
                teleopClimbersScore: 0,
                highBucketScore: 0,
                midBucketScore: 0,
                lowBucketScore: 0,
                floorGoalScore: 0,
                lowZiplineClimberScore: 0,
                midZiplineClimberScore: 0,
                highZiplineClimberScore: 0,
                allClearScore: 0,
                endgameMountainScore: 0
            },
        };
    },
    handleScoreChange: function (score, scoreType) {
        switch (scoreType) {
            case "autonButtonScore":
                var s = this.state.scores;
                s.autonButtonScore = parseInt(score);
                this.setState({ scores: s });
                break;
            case "autonClimbersScore":
                var s = this.state.scores;
                s.autonClimbersScore = parseInt(score);
                this.setState({ scores: s });
                break;
            case "autonMountainScore":
                var s = this.state.scores;
                s.autonMountainScore = parseInt(score);
                this.setState({ scores: s });
                break;
            case "teleopClimbersScore":
                var s = this.state.scores;
                s.teleopClimbersScore = parseInt(score);
                this.setState({ scores: s });
                break;
            case "highBucketScore":
                var s = this.state.scores;
                s.highBucketScore = parseInt(score);
                this.setState({ scores: s });
                break;
            case "midBucketScore":
                var s = this.state.scores;
                s.midBucketScore = parseInt(score);
                this.setState({ scores: s });
                break;
            case "lowBucketScore":
                var s = this.state.scores;
                s.lowBucketScore = parseInt(score);
                this.setState({ scores: s });
                break;
            case "floorGoalScore":
                var s = this.state.scores;
                s.floorGoalScore = parseInt(score);
                this.setState({ scores: s });
                break;
            case "lowZiplineClimberScore":
                var s = this.state.scores;
                s.lowZiplineClimberScore = parseInt(score);
                this.setState({ scores: s });
                break;
            case "midZiplineClimberScore":
                var s = this.state.scores;
                s.midZiplineClimberScore = parseInt(score);
                this.setState({ scores: s });
                break;
            case "highZiplineClimberScore":
                var s = this.state.scores;
                s.highZiplineClimberScore = parseInt(score);
                this.setState({ scores: s });
                break;
            case "allClearScore":
                var s = this.state.scores;
                s.allClearScore = parseInt(score);
                this.setState({ scores: s });
                break;
            case "endgameMountainScore":
                var s = this.state.scores;
                s.endgameMountainScore = parseInt(score);
                this.setState({ scores: s });
                break;
            default:
                break;
        }
    },
    render: function () {
        return (
            <div>
                <h1>FTC ResQ Calculator Form</h1>
                <ScoreLabel scores = {this.state.scores}/>
                <Autonomous scores = {this.state.scores} handleScoreChange = {this.handleScoreChange}/>
                <Teleop scores = {this.state.scores} handleScoreChange = {this.handleScoreChange}/>
                <Endgame scores = {this.state.scores} handleScoreChange = {this.handleScoreChange}/>
            </div>
        );
    }
});

class ScoreCalculator {
    constructor(scores) {
        this.scores = scores;
    }
    getZiplineClimbersScore(){
        var ziplineClimbersScore = this.scores.lowZiplineClimberScore + this.scores.midZiplineClimberScore
         + this.scores.highZiplineClimberScore;
         return ziplineClimbersScore;
    }
    getDebrisScore() {
        var debrisScore = this.scores.highBucketScore + this.scores.midBucketScore + this.scores.lowBucketScore
            + this.scores.floorGoalScore;
        return debrisScore;
    }
    getClimbersScore() {
        var climbersScore = 0;
        switch(this.scores.autonClimbersScore){
            case 0:
                climbersScore = this.scores.teleopClimbersScore
                break;
            case 10:
                if(this.scores.teleopClimbersScore == 0){
                    climbersScore = 20;
                }
                else {
                    climbersScore = 30;
                }
                break;
            case 20:
                climbersScore = 40;
                break;
            default:
                break;
        }
        return climbersScore;
    }
    getSum() {
        var totalScore = this.scores.autonButtonScore + this.getClimbersScore() + this.scores.autonMountainScore + this.getDebrisScore()
         + this.getZiplineClimbersScore() + this.scores.allClearScore + this.scores.endgameMountainScore;
        return totalScore;
    }
}

var ScoreLabel = React.createClass({
    getSum: function (scores) {
        var scoreCalculator = new ScoreCalculator(scores);
        return scoreCalculator.getSum();
    },
    render: function () {
        return (
            <div>
                <MyHeader> Total Score </MyHeader>
                <h3>{this.getSum(this.props.scores) }</h3>
            </div>
        );
    }
});

var MyHeader = React.createClass({
    render: function () {
        return (
            <h2>{this.props.children}</h2>
        );
    }
});

var Autonomous = React.createClass({
    render: function () {
        return (
            <div>
                <MyHeader> Autonomous </MyHeader>
                <ScoreAutonButton scores = {this.props.scores} handleScoreChange = {this.props.handleScoreChange}/>
                <ScoreAutonClimbers scores = {this.props.scores} handleScoreChange = {this.props.handleScoreChange}/>
                <ScoreAutonMountain scores = {this.props.scores} handleScoreChange = {this.props.handleScoreChange}/>
            </div>
        );
    }
});

var ScoreAutonButton = React.createClass({
    handleChange: function (event) {
        var isPressed = (event.target.checked);
        var score = 0;
        if (isPressed) {
            score = 20;
        }
        else {
            score = 0;
        };
        this.props.handleScoreChange(score, "autonButtonScore");
    },
    render: function () {
        return (
            <div>
                <h3>Button Pressed</h3>
                <form>
                    <input type="checkbox" name="isPressed" value="pressed" onChange={this.handleChange}
                    checked={this.props.scores.autonButtonScore == 20}/> Successful Button Press
                </form>
            </div>
        );
    }
});

var ScoreAutonClimbers = React.createClass({
    handleChange: function (event) {
        var score = (event.target.value)
        this.props.handleScoreChange(score, "autonClimbersScore");
    },
    render: function () {
        return (
            <div>
                <h3>Climbers Delivered</h3>
                <form>
                    <input type="radio" name="autonClimbersScore" value={0} onChange={this.handleChange}
                        checked={this.props.scores.autonClimbersScore == 0}/> None <br/>
                    <input type="radio" name="autonClimbersScore" value={10} onChange={this.handleChange}
                        checked={this.props.scores.autonClimbersScore == 20}/> One <br/>
                    <input type="radio" name="autonClimbersScore" value={20} onChange={this.handleChange}
                        checked={this.props.scores.autonClimbersScore == 40}/> Both <br/>
                </form>
            </div>
        );
    }
});

var ScoreAutonMountain = React.createClass({
    handleChange: function (event) {
        var score = (event.target.value)
        this.props.handleScoreChange(score, "autonMountainScore");
    },
    render: function () {
        return (
            <div>
                <h3>Autonomous Mountain Position</h3>
                <form>
                    <input type="radio" name="autonMountainScore" value={0} onChange={this.handleChange}
                        checked={this.props.scores.autonMountainScore == 0}/> None <br/>
                    <input type="radio" name="autonMountainScore" value={5} onChange={this.handleChange}
                        checked={this.props.scores.autonMountainScore == 5}/> Partial or Parking Zone <br/>
                    <input type="radio" name="autonMountainScore" value={10} onChange={this.handleChange}
                        checked={this.props.scores.autonMountainScore == 10}/> Low Zone <br/>
                    <input type="radio" name="autonMountainScore" value={20} onChange={this.handleChange}
                        checked={this.props.scores.autonMountainScore == 20}/> MidZone <br/>
                    <input type="radio" name="autonMountainScore" value={40} onChange={this.handleChange}
                        checked={this.props.scores.autonMountainScore == 40}/> High Zone <br/>
                </form>
            </div>
        );
    }
});

var Teleop = React.createClass({
    render: function () {
        return (
            <div>
                <MyHeader> Teleop </MyHeader>
                <ScoreTeleopClimbers scores = {this.props.scores} handleScoreChange = {this.props.handleScoreChange}/>
                <Debris scores = {this.props.scores} handleScoreChange = {this.props.handleScoreChange}/>    
                <ScoreZiplineClimbers scores = {this.props.scores} handleScoreChange = {this.props.handleScoreChange}/>
            </div>
        );
    }
});

var ScoreTeleopClimbers = React.createClass({
    handleChange: function (event) {
        var score = (event.target.value)
        this.props.handleScoreChange(score, "teleopClimbersScore");
    },
    render: function () {
        return (
            <div>
                <h3>Climbers Delivered</h3>
                <form>
                    <input type="radio" name="teleopClimbersScore" value={0} onChange={this.handleChange}
                        checked={this.props.scores.teleopClimbersScore == 0}/> None <br/>
                    <input type="radio" name="teleopClimbersScore" value={10} onChange={this.handleChange}
                        checked={this.props.scores.teleopClimbersScore == 10}/> One <br/>
                    <input type="radio" name="teleopClimbersScore" value={20} onChange={this.handleChange}
                        checked={this.props.scores.teleopClimbersScore == 20}/> Both <br/>
                </form>
            </div>
        );
    }
});

var Debris = React.createClass({
    render: function () {
        return (
            <div>
                <h3>Debris Scored</h3>
                <ScoreHighBucket scores = {this.props.scores} handleScoreChange = {this.props.handleScoreChange}/>
                <ScoreMidBucket scores = {this.props.scores} handleScoreChange = {this.props.handleScoreChange}/>
                <ScoreLowBucket scores = {this.props.scores} handleScoreChange = {this.props.handleScoreChange}/>
                <ScoreFloorGoal scores = {this.props.scores} handleScoreChange = {this.props.handleScoreChange}/>
            </div>
        );
    }
});

var ScoreHighBucket = React.createClass({
    handleChange: function (event) {
        var score = (event.target.value) * 15;
        this.props.handleScoreChange(score, "highBucketScore");
    },
    render: function () {
        return (
            <div>
                <form>
                    High Bucket:
                    <input type="number" name="high" min="0" max="16" value={(this.props.scores.highBucketScore)/15} onChange={this.handleChange}/>
                </form>
            </div>
        );
    }
});

var ScoreMidBucket = React.createClass({
    handleChange: function (event) {
        var score = (event.target.value) * 10;
        this.props.handleScoreChange(score, "midBucketScore");
    },
    render: function () {
        return (
            <div>
                <form>
                    Mid Bucket:
                    <input type="number" name="mid" min="0" max="16" value={(this.props.scores.midBucketScore)/10} onChange={this.handleChange}/>
                </form>
            </div>
        );
    }
});

var ScoreLowBucket = React.createClass({
    handleChange: function (event) {
        var score = (event.target.value) * 5;
        this.props.handleScoreChange(score, "lowBucketScore");
    },
    render: function () {
        return (
            <div>
                <form>
                    Low Bucket:
                    <input type="number" name="low" min="0" max="16" value={(this.props.scores.lowBucketScore)/5} onChange={this.handleChange}/>
                </form>
            </div>
        );
    }
});

var ScoreFloorGoal = React.createClass({
    handleChange: function (event) {
        var score = (event.target.value) * 1;
        this.props.handleScoreChange(score, "floorGoalScore");
    },
    render: function () {
        return (
            <div>
                <form>
                    Floor Goal:
                    <input type="number" name="floor" min="0" max="16" value={this.props.scores.floorGoalScore} onChange={this.handleChange}/>
                </form>
            </div>
        );
    }
});

var ScoreZiplineClimbers = React.createClass({
    handleChange: function (event) {
        var isPressed = (event.target.checked);
        switch(event.target.name){
            case "low":
                if(isPressed){
                    this.props.handleScoreChange(20, "lowZiplineClimberScore");
                }
                else {
                    this.props.handleScoreChange(0, "lowZiplineClimberScore");
                }
                break;
            case "mid":
                if(isPressed){
                    this.props.handleScoreChange(20, "midZiplineClimberScore");
                }
                else {
                    this.props.handleScoreChange(0, "midZiplineClimberScore");
                }
                break;
            case "high":
                if(isPressed){
                    this.props.handleScoreChange(20, "highZiplineClimberScore");
                }
                else {
                    this.props.handleScoreChange(0, "highZiplineClimberScore");
                }
                break;
            default:
                break;
        }
    },
    render: function () {
        return (
            <div>
                <h3>Zipline Climbers Triggered</h3>
                <form>
                    <input type="checkbox" name="low" value="pressed" onChange={this.handleChange}
                    checked={this.props.scores.lowZiplineClimberScore == 20}/> Low Zone Trigger <br/>
                    <input type="checkbox" name="mid" value="pressed" onChange={this.handleChange}
                    checked={this.props.scores.midZiplineClimberScore == 20}/> Mid Zone Trigger <br/>
                    <input type="checkbox" name="high" value="pressed" onChange={this.handleChange}
                    checked={this.props.scores.highZiplineClimberScore == 20}/> High Zone Trigger
                </form>
            </div>
        );
    }
});


var Endgame = React.createClass({
    render: function () {
        return (
            <div>
                <MyHeader> Endgame </MyHeader>
                <ScoreEngameMountain scores = {this.props.scores} handleScoreChange = {this.props.handleScoreChange}/>
                <ScoreAllClearSignal scores = {this.props.scores} handleScoreChange = {this.props.handleScoreChange}/>
            </div>
        );
    }
});

var ScoreAllClearSignal = React.createClass({
    handleChange: function (event) {
        var isSignaled = (event.target.checked);
        var score = 0;
        if (isSignaled) {
            score = 20;
        }
        else {
            score = 0;
        };
        this.props.handleScoreChange(score, "allClearScore");
    },
    render: function () {
        return (
            <div>
                <h3>All Clear Signal</h3>
                <form>
                    <input type="checkbox" name="isSignaled" value="signaled" onChange={this.handleChange}
                    checked={this.props.scores.allClearScore == 20}/> All Clear Signaled
                </form>
            </div>
        );
    }
});

var ScoreEngameMountain = React.createClass({
    handleChange: function (event) {
        var score = (event.target.value)
        this.props.handleScoreChange(score, "endgameMountainScore");
    },
    render: function () {
        return (
            <div>
                <h3>Endgame Mountain Position</h3>
                <form>
                    <input type="radio" name="endgameMountainScore" value={0} onChange={this.handleChange}
                        checked={this.props.scores.endgameMountainScore == 0}/> None <br/>
                    <input type="radio" name="endgameMountainScore" value={5} onChange={this.handleChange}
                        checked={this.props.scores.endgameMountainScore == 5}/> Partial <br/>
                    <input type="radio" name="endgameMountainScore" value={10} onChange={this.handleChange}
                        checked={this.props.scores.endgameMountainScore == 10}/> Low Zone <br/>
                    <input type="radio" name="endgameMountainScore" value={20} onChange={this.handleChange}
                        checked={this.props.scores.endgameMountainScore == 20}/> MidZone <br/>
                    <input type="radio" name="endgameMountainScore" value={40} onChange={this.handleChange}
                        checked={this.props.scores.endgameMountainScore == 40}/> High Zone <br/>
                    <input type="radio" name="endgameMountainScore" value={80} onChange={this.handleChange}
                        checked={this.props.scores.endgameMountainScore == 80}/> Hanging
                </form>
            </div>
        );
    }
});

ReactDOM.render(
    <FTCResQCalculatorForm/>,
    document.getElementById('content')
);