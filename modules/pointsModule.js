var skillPoints = function (min, max){

   return Math.floor(Math.random() * (1 + max - min) + min);
};
var skillLevel = skillPoints(1,9);

//console.log('skillPoints: ' + skillLevel);

module.exports = skillLevel;
