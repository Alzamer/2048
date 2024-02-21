import { useEffect, useContext } from "react";
import moveLeft from "../util/moveLeft";
import moveRight from "../util/moveRight";
import moveDown from "../util/moveDown";
import moveUp from "../util/moveUp";
import StateContext from "../util/stateContext";

function EventListeners({ children } : { children: Array<React.ReactElement> }) {
  const state = useContext(StateContext);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' || event.key === 'a') {
        moveLeft(state?.gridState!, state?.setGridState!);
      } else if (event.key === 'ArrowRight' || event.key === 'd') {
        moveRight(state?.gridState!, state?.setGridState!);
      } else if (event.key === 'ArrowUp' || event.key === 'w') {
        moveUp(state?.gridState!, state?.setGridState!);
      } else if (event.key === 'ArrowDown' || event.key === 's') {
        moveDown(state?.gridState!, state?.setGridState!);
      }
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