import styles from './style.module.css'
import Cell from '../Cell'
import Tile from '../Tile'
import { useContext } from 'react'
import StateContext from '../util/stateContext'

function Grid() {
  const state = useContext(StateContext);

  return (
    <div className={styles.container}>
      {
        state?.gridState.map(row => row.map((value : number, i: number) => value === 0 ? 
          <Cell key={i}></Cell> :
          <Cell key={i}>
          <Tile>
            {value}
          </Tile>
        </Cell>))
      }
      <div className={state?.win ? styles.info : styles.hidden }>
        You win!
      </div>
      <div className={state?.gameOver ? styles.info : styles.hidden }>
        Game Over!
      </div>
    </div>
  )
}
  
export default Grid