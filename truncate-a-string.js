

function truncateString(str, num) {
  // Check if the string length is greater than the limit num
  if (str.length > num) {
    // Slice the string from the start (index 0) to index num
    // Then add the three dots at the end
    return str.slice(0, num) + "...";
  } else {
    // If it's shorter than or equal to num, return it as is
    return str;
  }
}


