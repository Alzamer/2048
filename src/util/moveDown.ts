import addRandomPoint from "./addRandomPoint";

export default function useMoveDown(state : any) {
  let changed = false;
  const moveDown = () => {
    for (let i = 0; i < 4; i++) {
      for (let j = 2; j >= 0; j--) {
        if(state.gridState[j][i] === 0)
          continue;
        let x = j;
        while(x < 3 && state.gridState[x + 1][i] === 0){
          state.gridState[x + 1][i] = state.gridState[x][i];
          state.gridState[x][i] = 0;
          changed = true;
          x++;
        }
      }
    }
  }

  const merge = () => {
    for (let i = 0; i < 4; i++) {
      for (let j = 3; j > 0; j--) {
        if(state.gridState[j - 1][i] === state.gridState[j][i]){
          state.gridState[j][i] *= 2;
          state.gridState[j - 1][i] = 0;
        }
      }
    }
  }

  moveDown();
  merge();
  moveDown();

  if(changed)
    addRandomPoint(state.gridState);
  state.setGridState([...state.gridState]);
}