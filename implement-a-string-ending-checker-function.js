

function confirmEnding(str, target) {
  // 1. Determine the length of the target
  // 2. Extract that many characters from the end of str
  // 3. Compare the extracted part to the target
  
  return str.slice(-target.length) === target;
}


