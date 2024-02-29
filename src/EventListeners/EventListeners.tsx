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
      }

      let gameWin = false;

      for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
          if(state?.gridState[i][j] === 2048)
            gameWin = true;
        }
      }

      if(gameWin)
        state?.setWin(true);
      state?.setGridState([...state?.gridState]);
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