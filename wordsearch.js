// TRANSPOSE FUNCTION
const transpose = function(matrix) {
  let copy = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // skip undefined values to preserve sparse array
      if (matrix[i][j] === undefined) continue;
      // create row if it doesn't exist yet
      if (copy[j] === undefined) copy[j] = [];
      // swap the x and y coords for the copy
      copy[j][i] = matrix[i][j];
    }
  }
  return copy;
};
// WORDSEARCH FUNCTION
const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  const verticalJoin = transpose(letters).map((ls) => ls.join(""));

  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;
