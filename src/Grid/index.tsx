import styles from './style.module.css'
import Cell from '../Cell'
import Tile from '../Tile'
import { useEffect } from 'react'
import getRandomPoint from '../util/getRandomPoint'

function Grid({ grid, setGridState } : { grid: any, setGridState: any}) {
  useEffect(() => {
    const temp = JSON.parse(JSON.stringify(grid));

    const first = getRandomPoint()
    let second = {x: 0, y: 0};
    
    do {
      second = {x: Math.floor(Math.random() * 4), y: Math.floor(Math.random() * 4)}
    } while (second.x === first.x && second.y === first.y);

    temp[first.x][first.y] = 2;
    temp[second.x][second.y] = 2;

    setGridState(temp);
  }, [])

  return (
    <div className={styles.container}>
      {
        grid.map(_ => _.map((value : number) => value === 0 ? 
          <Cell></Cell> :
          <Cell>
          <Tile>
            {value}
          </Tile>
        </Cell>))
      }
    </div>
  )
}
  
export default Grid