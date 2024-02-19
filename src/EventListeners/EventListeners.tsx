import { useEffect } from "react";

function EventListeners({ children } : { children: Array<React.ReactElement>}) {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' || event.key === 'a') {
        console.log('Kliknięto strzałkę w lewo lub klawisz a');
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
  }, [])

  return <>
    {
      children
    }
  </>;
}
    
export default EventListeners