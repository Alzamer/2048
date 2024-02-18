import styles from './style.module.css'
import getRandomPoint from '../util/getRandomPoint'

function Description({ setGridState } : { setGridState: React.Dispatch<React.SetStateAction<Array<Array<number>>>>}) {
  const handleClick = () => {
    const temp = JSON.parse(JSON.stringify([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]));

    const first = getRandomPoint()
    let second = {x: 0, y: 0};
    
    do {
      second = getRandomPoint()
    } while (second.x === first.x && second.y === first.y);

    temp[first.x][first.y] = 2;
    temp[second.x][second.y] = 2;

    setGridState(temp);
  }

  return (
    <>
      <div className={styles.container}>
      <p className={styles.text}>
        Hello! This is a clone of a popular 2048 game, that I made using TypeScript and React. You can see the source code <a className={styles.link} href="https://github.com/Alzamer/2048" target="_blank">there</a>.
      </p>
      </div>
      <p className={styles.text}>Score: </p>
      <div className={styles.button} onClick={handleClick}>New Game</div>
    </>
)}

export default Description