var fName = document.getElementById('f-name');
var lName = document.getElementById('l-name');
var age = document.getElementById('age');

function getData() {
  var person = {
    fName: fName.value,
    lName: lName.value,
    age: age.value,
    logName: function () {
      return person.fName + ' ' + person.lName;
    },
  };

  console.log('Full Name: ' + person.logName());
  console.log('Age: ' + person.age);
}
