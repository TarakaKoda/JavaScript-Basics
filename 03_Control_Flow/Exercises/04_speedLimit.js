// speed limit = 70
// every extra 5km/h => 1 extra point
// if points > 12 license suspended

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint)
    return 'ok';

    else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points >= 12) 
        return 'license suspended'; 
        else 
        return 'points' + ' ' +  points;
    }
}

console.log(checkSpeed(130))