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
      <div className={state?.win ? styles.win : styles.winHidden }>
        You win!
      </div>
    </div>
  )
}
  
export default Grid