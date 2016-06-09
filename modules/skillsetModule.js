

var skills = ['Front-End', 'Back-End', 'Logic'];

var skillSet = function (min, max){

   return Math.floor(Math.random() * (1 + max - min) + min);
};
var skillName = skills[skillSet(0,(skills.length-1))];

//console.log('skillset is: ' + skillName);

module.exports = skillName;
