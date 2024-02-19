import Grid from './Grid'
import Description from './Description'
import './App.css'
import { useState, useEffect } from 'react'
import getRandomPoint from './util/getRandomPoint'
import EventListeners from './EventListeners/EventListeners'
import StateContext from './util/stateContext'

function App() {
  const [gridState, setGridState] = useState<Array<Array<number>>>([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]);

  useEffect(() => {
    const first = getRandomPoint()
    let second = {x: 0, y: 0};
    
    do {
      second = {x: Math.floor(Math.random() * 4), y: Math.floor(Math.random() * 4)}
    } while (second.x === first.x && second.y === first.y);

    gridState[first.x][first.y] = 2;
    gridState[second.x][second.y] = 2;

    setGridState([...gridState]);
  }, [])

  return (
    <div className="container">
      <StateContext.Provider value={{ gridState, setGridState}}>
        <EventListeners>
          <Grid/>
          <Description/>
        </EventListeners>
      </StateContext.Provider>
    </div>
  )
}

export default App