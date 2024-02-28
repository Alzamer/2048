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