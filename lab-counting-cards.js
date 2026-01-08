

let count = 0;

function cardCounter(card) {
  // 1. Update the global count based on the card value
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
    // 7, 8, 9 result in no change, so we don't need cases for them
  }

  // 2. Determine the action (Bet or Hold)
  let action = count > 0 ? "Bet" : "Hold";

  // 3. Return the count and action separated by a space
  return count + " " + action;
}



