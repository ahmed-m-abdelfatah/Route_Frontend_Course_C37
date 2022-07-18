// program_01
// Write a Write a program that allow to user enter number then print it Example Input: 5 Output: 5  that allow to user enter number then print it
// Example Input: 5 Output: 5

function printNumber() {
  var num = window.prompt('Give Me Your Number');
  console.log('program_01: ' + num);
}
// printNumber();

// ===========================================================================================
// program_02
// Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no
// Example1 Input: 12 Output Yes
// Example 2 Input: 9 Output No

function checkModOfThree() {
  var num = window.prompt('Give Me Your Number');
  if (num % 3 === 0 || num % 4 === 0) {
    console.log('program_02: yes');
  } else {
    console.log('program_02: no');
  }
}
// checkModOfThree();

// ===========================================================================================
// program_03
// Write a program that allows the user to insert 2 integers then print the max
// Example1 Input: 3 5 Output: 5
// Example 2 Input: 10 7 Output: 10

function getMaxNumber() {
  var num1 = window.prompt('Give Me Your Number');
  var num2 = window.prompt('Give Me Your Number');

  if (num1 > num2) {
    console.log('program_03: max num is your first number ' + num1);
  } else if (num2 > num1) {
    console.log('program_03: max num is your second number ' + num2);
  } else {
    console.log('program_03: your two numbers equals each other');
  }
}
// getMaxNumber();

// ===========================================================================================
// program_04
// Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
// Example 1 Input: -5 Output negative
// Example2 Input: 10  Output positive

function checkPositiveOrNegative() {
  var num = window.prompt('Give Me Your Number');
  if (num > 0) {
    console.log('program_04: positive');
  } else {
    if (num == 0) {
      console.log('program_04: Zero');
    } else {
      console.log('program_04: negative');
    }
  }
}
// checkPositiveOrNegative();

// ===========================================================================================
// program_05
// Write a program that take 3 integers from user then print the max element and the min element.
// Example 1
// Input:7,8,5
// Output:
// max element = 8
// min element = 5
// Example2
// Input: 3,6,9 Outputs:
// Max element = 9
// Min element = 3

function getMaxAndMinNumbers() {
  var num1 = window.prompt('Give Me Your Number');
  var num2 = window.prompt('Give Me Your Number');
  var num3 = window.prompt('Give Me Your Number');

  if (num1 > num2 && num1 > num3) {
    console.log('program_05: max element = ' + num1);
  } else if (num2 > num1 && num2 > num3) {
    console.log('program_05: max element = ' + num2);
  } else {
    console.log('program_05: max element = ' + num3);
  }

  if (num1 < num2 && num1 < num3) {
    console.log('program_05: min element = ' + num1);
  } else if (num2 < num1 && num2 < num3) {
    console.log('program_05: min element = ' + num2);
  } else {
    console.log('program_05: min element = ' + num3);
  }
}
// getMaxAndMinNumbers();

// ===========================================================================================
// program_06
// Write a program that allows the user to insert integer number then check If a number is oven or odd
// Example 1
// Input: 8
// Output: even
// Example 2
// Input: 7
// Output: odd

function checkEvenOrOdd() {
  var num = window.prompt('Give Me Your Number');

  if (num % 2 == 0) {
    console.log('program_06: even');
  } else {
    console.log('program_06: odd');
  }
}
// checkEvenOrOdd();

// ===========================================================================================
// program_07
// Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
// Example1
// Input: O
// Output: vowel
// Example 2
// Input: b
// Output:
// consonant

function checkVowelOrConsonant() {
  var char = window.prompt('Give Me Your One Character');

  if (
    char === 'a' ||
    char === 'e' ||
    char === 'i' ||
    char === 'o' ||
    char === 'u' ||
    char === 'A' ||
    char === 'E' ||
    char === 'I' ||
    char === 'O' ||
    char === 'U'
  ) {
    console.log('program_07: vowel');
  } else {
    console.log('program_07: consonant');
  }
}
// checkVowelOrConsonant();

// ===========================================================================================
// program_08
// Write a program that allows user to insert integer then print all numbers between 1 to that’s number
// Example Input 5
// Output 1, 2, 3, 4, 5

function getAllPositiveNumbersTellGivenNumber() {
  var num = window.prompt('Give Me Your Number');
  var str = '';

  for (let i = 1; i <= num; i++) {
    if (i == num) {
      str += i;
    } else {
      str += i + ', ';
    }
  }

  console.log('program_08: ' + str);
}
// getAllPositiveNumbersTellGivenNumber();

// ===========================================================================================
// program_09
// Write a program that allows user to insert integer then print a multiplication table up to 12.
// Example Input: 5 Outputs:
// 5 10 15 20 25 30 35 40 45 50 55 60

function multiplicationTable() {
  var num = window.prompt('Give Me Your Number');
  var str = '';

  for (let i = 1; i < 13; i++) {
    str += num * i + ' ';
  }

  console.log('program_09: ' + str);
}
// multiplicationTable();

// ===========================================================================================
// program_10
// Write a program that allows to user to insert number then print all even numbers between 1 to this number
// Example:
// Input: 15
// Output: 2 4 6 8 10 12 14

function getAllEvenTellGivenNumber() {
  var num = window.prompt('Give Me Your Number');
  var str = '';

  for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
      str += i + ' ';
    }
  }

  console.log('program_10: ' + str);
}
// getAllEvenTellGivenNumber();

// ===========================================================================================
// program_11
// Write a program that take two integers then print the power Example:
// Input: 4 3
// Output: 64 Hint how to calculate 4^3 = 4 * 4 * 4 = 64

function MyMathPow() {
  var base = window.prompt('Give Me Your Base Number');
  var pow = window.prompt('Give Me Your Power Number');
  var result = 1;

  // Hard Solution
  // for (let i = 0; i < pow; i++) {
  //   result *= base;
  // }

  // Easy Solution
  result = base ** pow;

  console.log('program_11: ' + result);
}
// MyMathPow();

// ===========================================================================================
// TODO there is some error in this question in the pdf
// program_12
// Write a program to enter marks of five subjects and calculate total, average and percentage.
// Example
// Input: - Enter Marks of five subjects:
// 95
// 76
// 85
// 90
// 89
// Output:-.Total marks = 435
// Average Marks = 87
// Percentage = 87

function fiveSubjectsCalculator() {
  var sub1 = window.prompt('Enter Marks of 1st subjects');
  var sub2 = window.prompt('Enter Marks of 2nd subjects');
  var sub3 = window.prompt('Enter Marks of 3rd subjects');
  var sub4 = window.prompt('Enter Marks of 4th subjects');
  var sub5 = window.prompt('Enter Marks of 5th subjects');

  // var total = Number(sub1) + Number(sub2) + Number(sub3) + Number(sub4) + Number(sub5);
  // var total = +sub1 + +sub2 + +sub3 + +sub4 + +sub5;
  var total = sub1 * 1 + sub2 * 1 + sub3 * 1 + sub4 * 1 + sub5 * 1;
  var average = total / 5;
  var percentage = (total / 500) * 100;

  console.log('program_12:');
  console.log(sub1);
  console.log(sub2);
  console.log(sub3);
  console.log(sub4);
  console.log(sub5);
  console.log('Total marks   = ' + total);
  console.log('Average Marks = ' + average);
  console.log('Percentage    = ' + percentage);
}
// fiveSubjectsCalculator();

// ===========================================================================================
// program_13
// Write a program to input month number and print number of days in that month.
// Example:
// Input: - Month Number: 1
// Output:-. Days in Month: 31

function getNumberOfDaysInMonth() {
  var month = window.prompt('Enter Month Number (1-12)');

  if (month == 1) {
    console.log('program_13: 31 days');
  } else if (month == 2) {
    console.log('program_13: 28 or 29 days');
  } else if (month == 3) {
    console.log('program_13: 31 days');
  } else if (month == 4) {
    console.log('program_13: 30 days');
  } else if (month == 5) {
    console.log('program_13: 31 days');
  } else if (month == 6) {
    console.log('program_13: 30 days');
  } else if (month == 7) {
    console.log('program_13: 31 days');
  } else if (month == 8) {
    console.log('program_13: 31 days');
  } else if (month == 9) {
    console.log('program_13: 30 days');
  } else if (month == 10) {
    console.log('program_13: 31 days');
  } else if (month == 11) {
    console.log('program_13: 30 days');
  } else if (month == 12) {
    console.log('program_13: 31 days');
  } else {
    console.log('program_13: Invalid input! Please enter month number between (1-12).');
  }
}
// getNumberOfDaysInMonth();

// ===========================================================================================
// program_14
// Write a program to input marks of five subjects
// Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade
// Percentage >= 90%: Grad A
// Percentage >= 80%: Grad B
// Percentage >= 70%: Grad C
// Percentage >= 60%: Grad D
// Percentage >= 40%: Grad E
// Percentage < 40%: Grad F

function fiveSubjectsGradeCalculator() {
  var sub1 = window.prompt('Enter Marks of 1st subjects (0 to 100)');
  var sub2 = window.prompt('Enter Marks of 2nd subjects (0 to 100)');
  var sub3 = window.prompt('Enter Marks of 3rd subjects (0 to 100)');
  var sub4 = window.prompt('Enter Marks of 4th subjects (0 to 100)');
  var sub5 = window.prompt('Enter Marks of 5th subjects (0 to 100)');

  var total = sub1 * 1 + sub2 * 1 + sub3 * 1 + sub4 * 1 + sub5 * 1;
  // var percentage = (total / 500) * 100;
  var percentage = total / 5;

  // console.log({ percentage });
  console.log('program_14: percentage = ' + percentage);

  if (percentage >= 90) {
    console.log('Grade A');
  } else if (percentage >= 80) {
    console.log('Grade B');
  } else if (percentage >= 70) {
    console.log('Grade C');
  } else if (percentage >= 60) {
    console.log('Grade D');
  } else if (percentage >= 40) {
    console.log('Grade E');
  } else {
    console.log('Grade F');
  }
}
// fiveSubjectsGradeCalculator();

// ******************************** Using Switch Case ****************************************

// ===========================================================================================
// program_15
// Write a program to print total number of days in month
function getNumberOfDaysInMonthUsingSwitch() {
  var month = window.prompt('Enter Month Number (1-12)') * 1;

  switch (month) {
    case 1:
      console.log('program_15: 31 days');
      break;
    case 2:
      console.log('program_15: 28 or 29 days');
      break;
    case 3:
      console.log('program_15: 31 days');
      break;
    case 4:
      console.log('program_15: 30 days');
      break;
    case 5:
      console.log('program_15: 31 days');
      break;
    case 6:
      console.log('program_15: 30 days');
      break;
    case 7:
      console.log('program_15: 31 days');
      break;
    case 8:
      console.log('program_15: 31 days');
      break;
    case 9:
      console.log('program_15: 30 days');
      break;
    case 10:
      console.log('program_15: 31 days');
      break;
    case 11:
      console.log('program_15: 30 days');
      break;
    case 12:
      console.log('program_15: 31 days');
      break;
    default:
      console.log('program_15: Invalid input! Please enter month number between (1-12).');
      break;
  }
}
// getNumberOfDaysInMonthUsingSwitch();

// ===========================================================================================
// program_16
// Write a program to check whether an alphabet is vowel or consonant

function checkVowelOrConsonantUsingSwitch() {
  var char = window.prompt('Give Me Your One Character');

  switch (char) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
      console.log('program_16: vowel');
      break;

    default:
      console.log('program_16: consonant');
      break;
  }
}
// checkVowelOrConsonantUsingSwitch();

// ===========================================================================================
// program_17
// Write a program to find maximum between two numbers
function getMaxNumberUsingSwitch() {
  var num1 = window.prompt('Give Me Your Number');
  var num2 = window.prompt('Give Me Your Number');

  switch (true) {
    case num1 > num2:
      console.log('program_17: max num is your first number ' + num1);
      break;
    case num2 > num1:
      console.log('program_17: max num is your second number ' + num2);
      break;
    default:
      console.log('program_17: your two numbers equals each other');
      break;
  }
}
// getMaxNumberUsingSwitch();

// ===========================================================================================
// program_18
// Write a program to check whether a number is even or odd
function checkEvenOrOddUsingSwitch() {
  var num = window.prompt('Give Me Your Number');

  switch (true) {
    case num % 2 == 0:
      console.log('program_18: even');
      break;
    default:
      console.log('program_18: odd');
      break;
  }
}
// checkEvenOrOddUsingSwitch();

// ===========================================================================================
// program_19
// Write a program to check whether a number is positive or negative or zero

function checkPositiveOrNegativeUsingSwitch() {
  var num = window.prompt('Give Me Your Number');

  switch (true) {
    case num > 0:
      console.log('program_19: +ve');
      break;
    case num < 0:
      console.log('program_19: -ve');
      break;
    default:
      console.log('program_19: Zero');
      break;
  }
}
// checkPositiveOrNegativeUsingSwitch();

// ===========================================================================================
// program_20
// Write a program to create Simple Calculator

function simpleCalculatorUsingSwitch() {
  var num1 = window.prompt('Give Me Your 1st Number') * 1;
  var num2 = window.prompt('Give Me Your 2st Number') * 1;
  var operation = window.prompt('Operation +, -, *, /');
  var answer = 0;

  switch (operation) {
    case '+':
      answer = num1 + num2;
      console.log('program_20: Answer = ' + answer);
      break;

    case '-':
      answer = num1 - num2;
      console.log('program_20: Answer = ' + answer);
      break;

    case '*':
      answer = num1 * num2;
      console.log('program_20: Answer = ' + answer);
      break;

    case '/':
      answer = num1 / num2;
      console.log('program_20: Answer = ' + answer);
      break;

    default:
      console.log('program_20: Please enter valid data');
      break;
  }
}
// simpleCalculatorUsingSwitch();
