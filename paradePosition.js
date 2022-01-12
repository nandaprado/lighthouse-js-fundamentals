const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

const finalPosition = function (moves) {
  let grid = [0, 0];
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'north') {
      grid[1] = grid[1] + 1;
    } else if (moves[i] === 'south') {
      grid[1] = grid[1] - 1;
    } else if (moves[i] === 'east') {
      grid[0] = grid[0] + 1;
    } else if (moves[i] === 'west') {
      grid[0] = grid[0] - 1;
    }
  }
  return grid; // <- Missing from your code
};

finalPosition(moves); // Returns: [-1, 4]
