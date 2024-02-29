import Grid from './Grid'
import Description from './Description'
import './App.css'
import { useState, useEffect } from 'react'
import EventListeners from './EventListeners/EventListeners'
import StateContext from './util/stateContext'
import addRandomPoint from './util/addRandomPoint'

function App() {
  const [gridState, setGridState] = useState<Array<Array<number>>>([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);

  useEffect(() => {
    addRandomPoint(gridState);
    addRandomPoint(gridState);

    setGridState([...gridState]);
  }, [])

  return (
    <div className="container">
      <StateContext.Provider value={{ gridState, setGridState, score, setScore, gameOver, setGameOver, win, setWin }}>
        <EventListeners>
          <Grid/>
          <Description/>
        </EventListeners>
      </StateContext.Provider>
    </div>
  )
}

export default App