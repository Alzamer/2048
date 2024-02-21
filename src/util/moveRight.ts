import addRandomPoint from "./addRandomPoint";

export default function moveRight(grid: Array<Array<number>>, setGridState: React.Dispatch<React.SetStateAction<Array<Array<number>>>>){
    for(let i = 0; i < 4; i++){
      for(let j = 0; j < 3; j++){
        if(grid[i][j] === 0)
          continue;
        else if(grid[i][j + 1] === 0){
          grid[i][j + 1] = grid[i][j];
          grid[i][j] = 0;
        }
        else if(grid[i][j + 1] === grid[i][j]){
          grid[i][j + 1] *= 2;
          grid[i][j] = 0;
        }
      }
    }

    addRandomPoint(grid);
    setGridState([...grid]);
  }