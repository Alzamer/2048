import styles from './style.module.css'
import StateContext from '../util/stateContext'
import addRandomPoint from '../util/addRandomPoint';
import { useContext } from 'react';

function Description() {
  const state = useContext(StateContext);

  const handleClick = () => {
    const temp = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    addRandomPoint(temp);
    addRandomPoint(temp);
    state?.setGridState(temp);
    state?.setScore(0);
  }

  return (
    <>
      <div className={styles.container}>
      <p className={styles.text}>
        Hello! This is a clone of a popular 2048 game, that I made using TypeScript and React. You can see the source code <a className={styles.link} href="https://github.com/Alzamer/2048" target="_blank">there</a>.
      </p>
      </div>
      <p className={styles.text}>Score: { state?.score }</p>
      <div className={styles.button} onClick={handleClick}>New Game</div>
    </>
)}

export default Description