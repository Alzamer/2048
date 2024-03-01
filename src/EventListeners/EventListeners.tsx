import { useEffect, useContext } from "react";
import useMoveLeft from "../util/moveLeft";
import useMoveRight from "../util/moveRight";
import useMoveDown from "../util/moveDown";
import useMoveUp from "../util/moveUp";
import StateContext from "../util/stateContext";

function EventListeners({ children } : { children: Array<React.ReactElement> }) {
  const state = useContext(StateContext);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' || event.key === 'a') {
        useMoveLeft(state);
      } else if (event.key === 'ArrowRight' || event.key === 'd') {
        useMoveRight(state);
      } else if (event.key === 'ArrowUp' || event.key === 'w') {
        useMoveUp(state);
      } else if (event.key === 'ArrowDown' || event.key === 's') {
        useMoveDown(state);
      } else {
        return;
      }

      let gameWin = false;
      let gameOver = true;

      for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
          if(state?.gridState[i][j] === 2048)
            gameWin = true;
        }
      }

      if(gameWin)
        state?.setWin(true);
      state?.setGridState([...state?.gridState]);
    
      loop:
      for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
          if(state?.gridState[i][j] === 0){
            gameOver = false;
            break loop;
          }

          if(i === 0 && state?.gridState[i + 1][j] === state?.gridState[i][j]){
            gameOver = false;
            break loop;
          } else if(i === 3 && state?.gridState[i - 1][j] === state?.gridState[i][j]){
            gameOver = false;
            break loop;
          } else if(i != 0 && i != 3 && (state?.gridState[i - 1][j] === state?.gridState[i][j] || state?.gridState[i + 1][j] === state?.gridState[i][j])){
            gameOver = false;
            break loop;
          }
          
          if(j === 0 && state?.gridState[i][j + 1] === state?.gridState[i][j]){
            gameOver = false;
            break loop;
          } else if(j === 3 && state?.gridState[i][j - 1] === state?.gridState[i][j]){
            gameOver = false;
            break loop;
          } else if(j != 0 && j != 3 && (state?.gridState[i][j - 1] === state?.gridState[i][j] || state?.gridState[i][j + 1] === state?.gridState[i][j])) {
            gameOver = false;
            break loop;
          }
        }
      }

      if(gameOver)
        state?.setGameOver(true);
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [state?.gridState, state?.setGridState])

  return <>
    {
      children
    }
  </>;
}
    
export default EventListeners