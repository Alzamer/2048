import styles from './style.module.css'
import Cell from '../Cell'
import Tile from '../Tile'
import { useState, useEffect } from 'react'

function Grid() {
  const [gridState, setGridState] = useState<Array<Array<number>>>([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]);

  useEffect(() => {
    const temp = JSON.parse(JSON.stringify(gridState));

    const first = {x: Math.floor(Math.random() * 4), y: Math.floor(Math.random() * 4)}
    const second = {x: 0, y: 0};
    
    do {
      second.x = Math.floor(Math.random() * 4);
      second.y = Math.floor(Math.random() * 4);
    } while (second.x === first.x && second.y === first.y);

    temp[first.x][first.y] = 2;
    temp[second.x][second.y] = 2;

    setGridState(temp);
  }, [])

  return (
    <div className={styles.container}>
      {
        gridState.map(x => x.map(y => y == 0 ? <Cell></Cell> : <Cell><Tile/></Cell>))
      }
    </div>
  )
}
  
export default Grid