

function maskEmail(email) {
  // 1. Find the index of the '@' symbol
  const atIndex = email.indexOf("@");
  
  // 2. Separate the username part and the domain part
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);
  
  // 3. Get the first and last characters of the username
  const firstChar = username[0];
  const lastChar = username[username.length - 1];
  
  // 4. Calculate how many asterisks are needed
  // We subtract 2 because we are keeping the first and last characters
  const maskLength = username.length - 2;
  const mask = "*".repeat(maskLength);
  
  // 5. Combine everything back together
  return firstChar + mask + lastChar + domain;
}

// Declare the variable and call the function
const email = "apple.pie@example.com";
console.log(maskEmail(email));



