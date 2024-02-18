import { useEffect } from "react";

function EventListeners({ children } : { children: Array<React.ReactElement>}) {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' || event.key === 'a') {
        console.log('Kliknięto strzałkę w lewo lub klawisz a');
      } else if (event.key === 'ArrowRight' || event.key === 'd') {
        console.log('Kliknięto strzałkę w prawo lub klawisz d');
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