
var FTCResQCalculatorForm = React.createClass({
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
    getZiplineClimbersScore1(){
        var ziplineClimbersScore = this.scores.lowZiplineClimberScore1 + this.scores.midZiplineClimberScore1
         + this.scores.highZiplineClimberScore1;
         return ziplineClimbersScore;
    }
    getDebrisScore1() {
        var debrisScore = this.scores.highBucketScore1 + this.scores.midBucketScore1 + this.scores.lowBucketScore1
            + this.scores.floorGoalScore1;
        return debrisScore;
    }
    getClimbersScore1() {
        var climbersScore = 0;
        switch(this.scores.autonClimbersScore1){
            case 0:
                climbersScore = this.scores.teleopClimbersScore1
                break;
            case 10:
                if(this.scores.teleopClimbersScore1 == 0){
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
    getSum1() {
        var totalScore = this.scores.autonButtonScore1 + this.getClimbersScore() + this.scores.autonMountainScore1 + this.getDebrisScore()
         + this.getZiplineClimbersScore() + this.scores.allClearScore1 + this.scores.endgameMountainScore1;
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
        this.props.handleScoreChange(score, "autonButtonScore1");
    },
    render: function () {
        return (
            <div>
                <h3>Button Pressed</h3>
                <form>
                    <input type="checkbox" name="isPressed" value="pressed" onChange={this.handleChange}
                    checked={this.props.scores.autonButtonScore1 == 20}/> Successful Button Press
                </form>
            </div>
        );
    }
});

var ScoreAutonClimbers = React.createClass({
    handleChange: function (event) {
        var score = (event.target.value)
        this.props.handleScoreChange(score, "autonClimbersScore1");
    },
    render: function () {
        return (
            <div>
                <h3>Climbers Delivered</h3>
                <form>
                    <input type="radio" name="autonClimbersScore1" value={0} onChange={this.handleChange}
                        checked={this.props.scores.autonClimbersScore1 == 0}/> None <br/>
                    <input type="radio" name="autonClimbersScore1" value={10} onChange={this.handleChange}
                        checked={this.props.scores.autonClimbersScore1 == 20}/> One <br/>
                    <input type="radio" name="autonClimbersScore1" value={20} onChange={this.handleChange}
                        checked={this.props.scores.autonClimbersScore1 == 40}/> Both <br/>
                </form>
            </div>
        );
    }
});

var ScoreAutonMountain = React.createClass({
    handleChange: function (event) {
        var score = (event.target.value)
        this.props.handleScoreChange(score, "autonMountainScore1");
    },
    render: function () {
        return (
            <div>
                <h3>Autonomous Mountain Position</h3>
                <form>
                    <input type="radio" name="autonMountainScore1" value={0} onChange={this.handleChange}
                        checked={this.props.scores.autonMountainScore1 == 0}/> None <br/>
                    <input type="radio" name="autonMountainScore1" value={5} onChange={this.handleChange}
                        checked={this.props.scores.autonMountainScore1 == 5}/> Partial or Parking Zone <br/>
                    <input type="radio" name="autonMountainScore1" value={10} onChange={this.handleChange}
                        checked={this.props.scores.autonMountainScore1 == 10}/> Low Zone <br/>
                    <input type="radio" name="autonMountainScore1" value={20} onChange={this.handleChange}
                        checked={this.props.scores.autonMountainScore1 == 20}/> MidZone <br/>
                    <input type="radio" name="autonMountainScore1" value={40} onChange={this.handleChange}
                        checked={this.props.scores.autonMountainScore1 == 40}/> High Zone <br/>
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
        this.props.handleScoreChange(score, "teleopClimbersScore1");
    },
    render: function () {
        return (
            <div>
                <h3>Climbers Delivered</h3>
                <form>
                    <input type="radio" name="teleopClimbersScore1" value={0} onChange={this.handleChange}
                        checked={this.props.scores.teleopClimbersScore1 == 0}/> None <br/>
                    <input type="radio" name="teleopClimbersScore1" value={10} onChange={this.handleChange}
                        checked={this.props.scores.teleopClimbersScore1 == 10}/> One <br/>
                    <input type="radio" name="teleopClimbersScore1" value={20} onChange={this.handleChange}
                        checked={this.props.scores.teleopClimbersScore1 == 20}/> Both <br/>
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
        this.props.handleScoreChange(score, "highBucketScore1");
    },
    render: function () {
        return (
            <div>
                <form>
                    High Bucket:
                    <input type="number" name="high" min="0" max="16" value={(this.props.scores.highBucketScore1)/15} onChange={this.handleChange}/>
                </form>
            </div>
        );
    }
});

var ScoreMidBucket = React.createClass({
    handleChange: function (event) {
        var score = (event.target.value) * 10;
        this.props.handleScoreChange(score, "midBucketScore1");
    },
    render: function () {
        return (
            <div>
                <form>
                    Mid Bucket:
                    <input type="number" name="mid" min="0" max="16" value={(this.props.scores.midBucketScore1)/10} onChange={this.handleChange}/>
                </form>
            </div>
        );
    }
});

var ScoreLowBucket = React.createClass({
    handleChange: function (event) {
        var score = (event.target.value) * 5;
        this.props.handleScoreChange(score, "lowBucketScore1");
    },
    render: function () {
        return (
            <div>
                <form>
                    Low Bucket:
                    <input type="number" name="low" min="0" max="16" value={(this.props.scores.lowBucketScore1)/5} onChange={this.handleChange}/>
                </form>
            </div>
        );
    }
});

var ScoreFloorGoal = React.createClass({
    handleChange: function (event) {
        var score = (event.target.value) * 1;
        this.props.handleScoreChange(score, "floorGoalScore1");
    },
    render: function () {
        return (
            <div>
                <form>
                    Floor Goal:
                    <input type="number" name="floor" min="0" max="16" value={this.props.scores.floorGoalScore1} onChange={this.handleChange}/>
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
                    this.props.handleScoreChange(20, "lowZiplineClimberScore1");
                }
                else {
                    this.props.handleScoreChange(0, "lowZiplineClimberScore1");
                }
                break;
            case "mid":
                if(isPressed){
                    this.props.handleScoreChange(20, "midZiplineClimberScore1");
                }
                else {
                    this.props.handleScoreChange(0, "midZiplineClimberScore1");
                }
                break;
            case "high":
                if(isPressed){
                    this.props.handleScoreChange(20, "highZiplineClimberScore1");
                }
                else {
                    this.props.handleScoreChange(0, "highZiplineClimberScore1");
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
                    checked={this.props.scores.lowZiplineClimberScore1 == 20}/> Low Zone Trigger <br/>
                    <input type="checkbox" name="mid" value="pressed" onChange={this.handleChange}
                    checked={this.props.scores.midZiplineClimberScore1 == 20}/> Mid Zone Trigger <br/>
                    <input type="checkbox" name="high" value="pressed" onChange={this.handleChange}
                    checked={this.props.scores.highZiplineClimberScore1 == 20}/> High Zone Trigger
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
        this.props.handleScoreChange(score, "allClearScore1");
    },
    render: function () {
        return (
            <div>
                <h3>All Clear Signal</h3>
                <form>
                    <input type="checkbox" name="isSignaled" value="signaled" onChange={this.handleChange}
                    checked={this.props.scores.allClearScore1 == 20}/> All Clear Signaled
                </form>
            </div>
        );
    }
});

var ScoreEngameMountain = React.createClass({
    handleChange: function (event) {
        var score = (event.target.value)
        this.props.handleScoreChange(score, "endgameMountainScore1");
    },
    render: function () {
        return (
            <div>
                <h3>Endgame Mountain Position</h3>
                <form>
                    <input type="radio" name="endgameMountainScore1" value={0} onChange={this.handleChange}
                        checked={this.props.scores.endgameMountainScore1 == 0}/> None <br/>
                    <input type="radio" name="endgameMountainScore1" value={5} onChange={this.handleChange}
                        checked={this.props.scores.endgameMountainScore1 == 5}/> Partial <br/>
                    <input type="radio" name="endgameMountainScore1" value={10} onChange={this.handleChange}
                        checked={this.props.scores.endgameMountainScore1 == 10}/> Low Zone <br/>
                    <input type="radio" name="endgameMountainScore1" value={20} onChange={this.handleChange}
                        checked={this.props.scores.endgameMountainScore1 == 20}/> MidZone <br/>
                    <input type="radio" name="endgameMountainScore1" value={40} onChange={this.handleChange}
                        checked={this.props.scores.endgameMountainScore1 == 40}/> High Zone <br/>
                    <input type="radio" name="endgameMountainScore1" value={80} onChange={this.handleChange}
                        checked={this.props.scores.endgameMountainScore1 == 80}/> Hanging
                </form>
            </div>
        );
    }
});

ReactDOM.render(
    <FTCResQCalculatorForm/>,
    document.getElementById('content')
);