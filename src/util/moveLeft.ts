import addRandomPoint from "./addRandomPoint";

export default function useMoveLeft(state : any) {
  let changed = false;
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

  if(changed)
    addRandomPoint(state.gridState);
  state.setGridState([...state.gridState]);
}