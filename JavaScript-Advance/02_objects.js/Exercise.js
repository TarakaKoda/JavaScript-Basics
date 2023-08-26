function Stopwatch() {
    let initialTime, finalTime, isRunning, duration = 0;


    this.start = function() {
        if (isRunning) {
            throw new Error('Stopwatch is already started');
        }

        isRunning = true;

        initialTime = new Date();

    };
    
    this.stop = function() {
        if (!isRunning) {
            throw new Error('stopwatch is already stopped');
        }

        isRunning = false;

        finalTime = new Date();

        const seconds = (finalTime.getTime() - initialTime.getTime()) / 1000;

        duration += seconds;

    };

    this.reset = function() {
        initialTime = null;
        finalTime = null;
        isRunning = false;
        duration = 0;
    }

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }
    });
}

const sw = new Stopwatch();
