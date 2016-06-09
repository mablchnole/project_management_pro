var name1 = ['Johnny','Ziggy', 'Franz', 'Betty', 'Graham' ];
var name2 = ['Cash', 'Stardust', 'Ferdinand', 'White', 'Crackers'];

var numGen = function (min, max){



return Math.floor(Math.random() * (1 + max - min) + min);

};
var firstName = name1[numGen(0,(name1.length-1))];
var lastName = name2[numGen(0,(name2.length-1))];
//console.log(firstName +' ' + lastName);
var empName = firstName + ' ' + lastName;
module.exports = empName;
