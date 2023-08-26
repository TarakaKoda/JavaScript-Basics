function StopWatch() {
    let startTime, stopTime, isRunning, duration = 0;

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        },
        set: function(value) {
            return duration = value
        }
    });
    Object.defineProperty(this, 'startTime', {
        get: function() {
            return startTime;
        }
    });
    Object.defineProperty(this, 'stopTime', {
        get: function() {
            return stopTime;
        }
    });
    Object.defineProperty(this, 'isRunning', {
        get: function() {
            return isRunning;
        }
    });

}

StopWatch.prototype.start = function() {
    if (this.isRunning) {
        throw new Error('stopwatch is already running');
    }
    this.isRunning = true;

    this.startTime = new Date();
},

StopWatch.prototype.stop = function() {
    if (!this.isRunning) {
        throw new Error('stopwatch is already stopped');
    }

    this.isRunning = false;

    this.stopTime = new Date();

    const seconds = (this.stopTime.getTime() - this.startTime.getTime()) / 1000;
    this.duration += seconds;
},

StopWatch.prototype.rest = function() {
    this.stopTime = null;
    this.startTime = null;
    this.duration = 0;
    this.isRunning = false;
}

