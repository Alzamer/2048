import { useEffect, useContext } from "react";
import moveLeft from "../util/moveLeft";
import StateContext from "../util/stateContext";

function EventListeners({ children } : { children: Array<React.ReactElement> }) {
  const state = useContext(StateContext);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' || event.key === 'a') {
        moveLeft(state?.gridState!!, state?.setGridState!);
      } else if (event.key === 'ArrowRight' || event.key === 'd') {
        console.log('Kliknięto strzałkę w prawo lub klawisz d');
      }  else if (event.key === 'ArrowUp' || event.key === 'w') {
        console.log('Kliknięto strzałkę w górę lub klawisz w');
      }  else if (event.key === 'ArrowDown' || event.key === 's') {
        console.log('Kliknięto strzałkę w dół lub klawisz s');
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