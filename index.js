const returnFirstTwoDrivers = function anonymousFunction(){
    return ['Antonia', 'Nuru'];
}

const returnLastTwoDrivers = function anonymousFunction(){
    return ['Amari', 'Mo'];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(aNumber){
    return function(fare){
        return fare * aNumber;
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (arrayOfDrivers, driversToReturn) {
    return driversToReturn(arrayOfDrivers);
  };