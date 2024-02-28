import addRandomPoint from "./addRandomPoint";

export default function useMoveLeft(state : any) {
  let changed = false;
  const moveRight = () => {
    for (let i = 0; i < 4; i++) {
      for (let j = 1; j < 4; j++) {
        if(state.gridState[i][j] === 0)
          continue;
        let x = j;
        while(x > 0 && state.gridState[i][x - 1] === 0){
          state.gridState[i][x - 1] = state.gridState[i][x];
          state.gridState[i][x] = 0;
          changed = true;
          x--;
        }
      }
    }
  }

  const merge = () => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        if(state.gridState[i][j] === state.gridState[i][j + 1]){
          state.gridState[i][j] *= 2;
          state.gridState[i][j + 1] = 0;
        }
      }
    }
  }

  moveRight();
  merge();
  moveRight();

  if(changed)
    addRandomPoint(state.gridState);
  state.setGridState([...state.gridState]);
}