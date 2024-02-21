import addRandomPoint from "./addRandomPoint";

export default function moveLeft(grid: Array<Array<number>>, setGridState: React.Dispatch<React.SetStateAction<Array<Array<number>>>>) {
  let changed = false;

  for (let i = 0; i < 4; i++) {
    for (let j = 3; j >= 1; j--) {
      if (grid[i][j] === 0)
        continue;
      else if (grid[i][j - 1] === 0) {
        grid[i][j - 1] = grid[i][j];
        grid[i][j] = 0;
        changed = true;
      }
      else if (grid[i][j - 1] === grid[i][j]) {
        grid[i][j - 1] *= 2;
        grid[i][j] = 0;
      }
    }
  }

  if(changed)
    addRandomPoint(grid);
  setGridState([...grid]);
}