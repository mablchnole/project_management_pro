var empName = require('./nameModule');
var skillName = require('./skillsetModule');
var skillLevel = require('./pointsModule');
var pointsArray = [];

var createEmp = function(){
  var empProfile = {
    'empName': empName,
    'skillName': skillName,
    'skillLevel': skillLevel
  };
  console.log(empProfile);
  pointsArray.push(empProfile.skillLevel);
  console.log(pointsArray);
  return empProfile;

};

module.exports = createEmp;
//module.exports = pointsArray;
