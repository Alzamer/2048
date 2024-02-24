import addRandomPoint from "./addRandomPoint";

export default function useMoveUp(state : any) {
  let changed = false;

  for (let i = 0; i < 4; i++) {
    for (let j = 3; j > 0; j--) {
      if (state.gridState[j][i] === 0)
        continue;
      else if (state.gridState[j - 1][i] === 0) {
        state.gridState[j - 1][i] = state.gridState[j][i];
        state.gridState[j][i] = 0;
        changed = true;
      }
      else if (state.gridState[j][i] == state.gridState[j - 1][i]) {
        state.setScore(state.score + 2 * state.gridState[j][i]);
        state.gridState[j - 1][i] *= 2;
        state.gridState[j][i] = 0;
      }
    }
  }

  if(changed)
    addRandomPoint(state.gridState);
  state.setGridState([...state.gridState]);
}