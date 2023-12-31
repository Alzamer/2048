import styles from './style.module.css'

function Description() {
  return (
    <>
      <div className={styles.container}>
      <p className={styles.text}>
        Hello! This is a clone of a popular 2048 game, which I made with TypeScript and React. You can view the source code <a href="https://github.com/Alzamer/2048" target="_blank">there</a>.
      </p>
      </div>
      <p className={styles.text}>Score: </p>
      <button>New Game</button>
    </>
)}

export default Description