console.log('hi!');
function sleepIn(weekday, vacation){
  return !weekday || vacation;
}
function monkeyTrouble(aSmile, bSmile){
  return aSmile == bSmile;
}
function sumDouble(a, b){
  if( a != b){
    return a + b;
  }
  return (a + b)*2;
  
}

function frontBack(str) {
  if (str.length <= 1) {
    return str;
  }
    let chars = str.split('');
    [chars[0], chars[chars.length - 1]] = [chars[chars.length - 1], chars[0]];
  
  return chars.join('');
}

function intMax(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

function arrayCount9(nums) {
  let count = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 9) {
      count++;
    }
  }
  
  return count;
}

function array667(nums) {
  let count = 0;
  
  for (let i = 0; i < nums.length - 1; i++) {
    if ((nums[i] === 6 && (nums[i + 1] === 6 || nums[i + 1] === 7))) {
      count++;
    }
  }
  
  return count;
}

function squirrelPlay(temperature, isSummer) {
  if (isSummer) {
    return temperature >= 60 && temperature <= 100;
  } else {
    return temperature >= 60 && temperature <= 90;
  }
}

function withoutDoubles(die1, die2, noDoubles){
  if (noDoubles && die1 === die2) {
    die1 = (die1 === 6) ? 1 : die1 + 1;
  }
  return die1 + die2;
}

function greenTicket(a, b, c){
  if (a === b && b === c) {
    return 20;
  } else if (a === b || a === c || b === c) {
    return 10;
  } else {
    return 0;
  }
}

function blackjack(a, b){
  if (a > 21 && b > 21) {
    return 0; // Both values are over 21.
  } else if (a > 21) {
    return b; // Only 'b' is under 21.
  } else if (b > 21) {
    return a; // Only 'a' is under 21.
  } else {
    // Both values are under 21; return the one closer to 21.
    return Math.max(a, b);
  }
}

function makeChocolate(small, big, goal) {
  const maxBigBars = Math.floor(goal / 5);
  const bigBarsUsed = Math.min(big, maxBigBars);
  const remainingGoal = goal - (bigBarsUsed * 5);
  if (small >= remainingGoal) {
    return remainingGoal;
  }
  return -1;
}

