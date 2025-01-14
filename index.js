// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
function findMatching(drivers,name){
    return drivers.filter(driver =>driver.toLowerCase()===name.toLowerCase());
}
 findMatching(drivers,'Bobby');

 function fuzzyMatch(drivers, letters){
    return drivers.filter(driver=>driver.startsWith(letters));

 }
 fuzzyMatch(drivers, 'Sa')

 const drivers1 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
 function matchName(driversArray, name){
      return driversArray.filter(driver =>driver.name===name);
 }

 matchName(drivers1,'Bobby');