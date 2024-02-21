import addRandomPoint from "./addRandomPoint";

export default function moveUp(grid: Array<Array<number>>, setGridState: React.Dispatch<React.SetStateAction<Array<Array<number>>>>){
    for(let i = 0; i < 4; i++){
      for(let j = 3; j > 0; j--){
        if(grid[j][i] === 0)
          continue;
        else if(grid[j - 1][i] === 0){
          grid[j - 1][i] = grid[j][i];
          grid[j][i] = 0;
        }
        else if(grid[j][i] == grid[j - 1][i]){
          grid[j - 1][i] *= 2;
          grid[j][i] = 0;
        }
      }
    }

    addRandomPoint(grid);
    setGridState([...grid]);
  }