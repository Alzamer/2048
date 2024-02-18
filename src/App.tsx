import Grid from './Grid'
import Description from './Description'
import './App.css'
import { useState } from 'react'

function App() {
  const [gridState, setGridState] = useState<Array<Array<number>>>([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]);

  return (
    <div className="container">
      <Grid grid={gridState} setGridState={setGridState}/>
      <Description setGridState={setGridState}/>
    </div>
  )
}

export default App