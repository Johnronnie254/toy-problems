//Write a program that takes the speed of a car as input e.g 80.
// If the speed is less than 70, it should print “Ok”.
// Otherwise, for every 5 km/s above the speed limit (70), 
//it should give the driver one demerit point and print the total number of demerit points.

// For example, if the speed is 80, it should print: “Points: 2”.
// If the driver gets more than 12 points, the function should print: “License suspended”

let speed = 67;
function speedDetector(speed){
    let speedLimit = 70
     points = (speed/5) - (speedLimit/5);
    if (speed < 70){
    return "ok";
    } else if ( speed > 70 && points < 13){
    //for (let point = 0; point < 13; point ++)
        return "Points: " + points;
     }
    else (speed > 130)
    points > 13;
    return "License Suspended."
}
console.log(speedDetector (speed));
  