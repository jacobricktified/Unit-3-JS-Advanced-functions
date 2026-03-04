// Code your solution in this file!
//a function that returns the first two drivers from an array of drivers passed in as an argument
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
} 
//a function that returns the last two drivers from an array of drivers passed in as an argument
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}   
/** selectingDrivers — This is an array containing two elements: the two functions that we previously defined (returnFirstTwoDrivers() and returnLastTwoDrivers()).*/
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
/** createFareMultiplier() — This is a higher-order function that takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly. For example, if createFareMultiplier() receives 4 as an argument, it will return a function that takes in a fare as an argument and quadruples the fare. */
const createFareMultiplier = function(multiplier) { 
    return function(fare) {
        return fare * multiplier;
    }
}
/** fareDoubler() — This is a function created by invoking createFareMultiplier() with an argument of 2. */
const fareDoubler = createFareMultiplier(2);
/** fareTripler() — This is a function created by invoking createFareMultiplier() with an argument of 3. */
const fareTripler = createFareMultiplier(3);
/** selectDifferentDrivers() — This function takes in two arguments, an array of drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers. */
const selectDifferentDrivers = function(drivers, returnDrivers) {
    return returnDrivers(drivers);
}


