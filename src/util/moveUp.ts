import addRandomPoint from "./addRandomPoint";

export default function useMoveUp(state : any) {
  let changed = false;
  const moveUp = () => {
    for (let i = 0; i < 4; i++) {
      for (let j = 1; j < 4; j++) {
        if(state.gridState[j][i] === 0)
          continue;
        let x = j;
        while(x > 0 && state.gridState[x - 1][i] === 0){
          state.gridState[x - 1][i] = state.gridState[x][i];
          state.gridState[x][i] = 0;
          changed = true;
          x--;
        }
      }
    }
  }

  const merge = () => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        if(state.gridState[j + 1][i] === state.gridState[j][i]){
          state.gridState[j][i] *= 2;
          state.gridState[j + 1][i] = 0;
        }
      }
    }
  }

  moveUp();
  merge();
  moveUp();

  if(changed)
    addRandomPoint(state.gridState);
  state.setGridState([...state.gridState]);
}