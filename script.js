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

