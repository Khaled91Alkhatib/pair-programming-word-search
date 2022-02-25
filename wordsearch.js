const transpose = function(matrix) {
  // Put your solution here
  let arr = [];
  //This loop creates the amount of arrays  equal to the total number of "x" values, from the original array
  for (let k = 0; k < matrix[0].length; k++) {
    arr.push([]);
  }
  //Loop through the "y" values - outer array
  for (let y = 0; y < matrix.length; y++) {
    //Loop through the "x" values - inner array values
    for (let x = 0; x < matrix[y].length; x++) {
      //inverts the "x" and "y" values
      arr[x][y] = matrix[y][x];
    }
  }
  return arr;
};

let reverse = function(word) {
  return word.split("").reverse().join("");
};

const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  }
  const horizontalJoin = letters.map(ls => ls.join(''));
  const backwardsHorizontal = [];
  for (x of horizontalJoin) {
    backwardsHorizontal.push(reverse(x));
  }
  const verticalArray = transpose(letters);
  const verticalJoin = verticalArray.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  for (l of backwardsHorizontal) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;