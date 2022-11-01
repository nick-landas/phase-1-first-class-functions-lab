// Code your solution in this file!
const drivers = (['Antonia', 'Nuru','Amari','Mo'])

const returnFirstTwoDrivers = drivers => drivers.slice(0,2)

const returnLastTwoDrivers = drivers => drivers.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare){
    return function fareMultiplier(){
      return fare * 5;
    }
  }
  
  const fareDoubler = function(fareMultiplier){
    return fareMultiplier * 2;
  
  }
  
  const fareTripler = function(fareMultiplier){
    return fareMultiplier * 3;
  
  }
  
  
  function selectDifferentDrivers(drivers, selected){
    
    if(selected === returnFirstTwoDrivers) {
      return returnFirstTwoDrivers(drivers);
    }
    else 
      return returnLastTwoDrivers(drivers);
}

  