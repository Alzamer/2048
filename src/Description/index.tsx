import styles from './style.module.css'

function Description() {
  return (
    <>
      <div className={styles.container}>
      <p className={styles.text}>
        Hello! This is a clone of a popular 2048 game, that I made using TypeScript and React. You can see the source code <a className={styles.link} href="https://github.com/Alzamer/2048" target="_blank">there</a>.
      </p>
      </div>
      <p className={styles.text}>Score: </p>
      <div className={styles.button}>New Game</div>
    </>
)}

export default Description