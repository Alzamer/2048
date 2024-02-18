import Grid from './Grid'
import Description from './Description'
import './App.css'
import { useState } from 'react'
import EventListeners from './EventListeners/EventListeners'

function App() {
  const [gridState, setGridState] = useState<Array<Array<number>>>([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]);

  return (
    <div className="container">
      <EventListeners>
        <Grid grid={gridState} setGridState={setGridState}/>
        <Description setGridState={setGridState}/>
      </EventListeners>
    </div>
  )
}

export default App