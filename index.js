// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    return Math.abs(street - 42)
}

function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(start, destination) {
    return (Math.abs(start-destination)) * 264
}

function calculatesFarePrice(start, destination) {
    let distanceTravelled = distanceTravelledInFeet(start,destination)

    if (distanceTravelled<=400) {
        return 0
    } else if (distanceTravelled<=2000) {
        return (distanceTravelled - 400) * 0.02 
    } else if (distanceTravelled<=2500) {
        return 25
    } else {
        return "cannot travel that far"
    }
}


/* calculatesFarePrice: Given the same starting and ending block as 
the previous test (hint hint), return the fare for the customer. 
The first four hundred feet are free. For a distance between 400 and 2000 feet, 
the price is 2 cents per foot (not including 400, which are free!). 
Then Scuber charges a flat fare of $25 for a distance over 2000 feet 
and under 2500 feet. Finally, Scuber does not allow any rides over 2500 feet — 
the function returns 'cannot travel that far' if a ride over 2500 feet is requested.

*/