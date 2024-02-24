import addRandomPoint from "./addRandomPoint";

export default function useMoveRight(state : any) {
  let changed = false;
  
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      if (state.gridState[i][j] === 0)
        continue;
      else if (state.gridState[i][j + 1] === 0) {
        state.gridState[i][j + 1] = state.gridState[i][j];
        state.gridState[i][j] = 0;
        changed = true;
      }
      else if (state.gridState[i][j + 1] === state.gridState[i][j]) {
        state.setScore(state.score + 2 * state.gridState[i][j]);
        state.gridState[i][j + 1] *= 2;
        state.gridState[i][j] = 0;
      }
    }
  }

  if(changed)
    addRandomPoint(state.gridState);
  state.setGridState([...state.gridState]);
}