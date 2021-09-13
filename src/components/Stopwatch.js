import React, { Component } from 'react';

class Stopwatch extends Component {

    state = {
        stopwatchOn: false,
        stopwatchStart: 0,
        stopwatchTime: 0
    };

    startStopwatch = () => {
        this.setState({
            stopwatchOn: true,
            stopwatchTime: this.startStopwatch.stopwatchTime,
            stopwatchStart: Date.now() - this.state.stopwatchTime
        });
        this.stopwatch = setInterval(() => {
            this.setState({
                stopwatchTime: Date.now() - this.state.stopwatchStart
            });
        }, 10);
    }

    stopStopwatch = () => {
        this.setState({stopwatchOn: false});
        clearInterval(this.stopwatch);
    }

    resetStopwatch = () => {
        this.setState({
            stopwatchStart: 0,
            stopwatchTime: 0
        });
    }

    render() {
        const { stopwatchTime } = this.state;
        let centiseconds = ("0" + (Math.floor(stopwatchTime / 10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(stopwatchTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(stopwatchTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(stopwatchTime / 3600000)).slice(-2);
        return (
            <div className="stopwatch">
                <div>
                  {hours} : {minutes} : {seconds} : {centiseconds}
                </div>
                {this.state.stopwatchOn === false && this.state.stopwatchTime === 0 && (
                  <button onClick={this.startStopwatch}>Start</button>
                )}
                {this.state.stopwatchOn === true && (
                  <button onClick={this.stopStopwatch}>Stop</button>
                )}
                {this.state.stopwatchOn === false && this.state.stopwatchTime > 0 && (
                  <button onClick={this.startStopwatch}>Resume</button>
                )}
                {this.state.stopwatchOn === false && this.state.stopwatchTime > 0 && (
                  <button onClick={this.resetStopwatch}>Reset</button>
                )}
            </div>
        )
    }
}

export default Stopwatch
