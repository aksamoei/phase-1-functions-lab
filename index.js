// Code your solution in this file!
function distanceFromHqInBlocks(yourStreet) {
    let distance = yourStreet - 42;
    let absoluteDistance;
    if (distance < 0){
        absoluteDistance = distance * -1;
    }
    else {
        absoluteDistance = distance;
    }
    return absoluteDistance;
}

function distanceFromHqInFeet(yourLocation) {
    return distanceFromHqInBlocks(yourLocation) * 264;
}

function distanceTravelledInFeet(startPoint, endPoint) {
    let myDistance = endPoint - startPoint;
    let myAbsoluteDistance;
    if (myDistance < 0) {
        myAbsoluteDistance = myDistance * -1;
    }
    else{
        myAbsoluteDistance = myDistance;
    }
    return myAbsoluteDistance * 264;
}

function calculatesFarePrice(start, destination) {
    let feetDistance = distanceTravelledInFeet(start, destination);
    let fare;
    if (feetDistance < 400) {
        fare = 0;
    }
    else if (feetDistance <= 2000){
        fare = (feetDistance - 400) * 0.02;
    }
    else if (feetDistance <= 2500){
        fare = 25;
    }
    else{
        fare = "cannot travel that far";
    }
    return fare;
}

