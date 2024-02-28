import addRandomPoint from "./addRandomPoint";

export default function useMoveUp(state : any) {
  let changed = false;
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

  if(changed)
    addRandomPoint(state.gridState);
  state.setGridState([...state.gridState]);
}