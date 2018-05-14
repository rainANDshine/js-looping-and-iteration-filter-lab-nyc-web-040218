// Code your solution in this file
function findMatching(array, string) {
  return array.filter(function(driver) {return driver.toLowerCase() === string.toLowerCase();})
}

function fuzzyMatch(array, string) {
  newArr = [];

  for(const driver of array) {
    if (driver.startsWith(string)) {
        newArr.push(driver);
    }
  }

  return newArr;
}

function matchName(drivers, string) {
  return drivers.filter(function(driver) {return driver.name === string;})
}
