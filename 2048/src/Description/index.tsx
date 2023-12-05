import styles from './style.module.css'

function Description() {
  return (
    <p className={styles.text}>
      Hello! This is a clone of a popular 2048 game, which I made with TypeScript and React. You can view the source code <a href="https://github.com/Alzamer/2048">there</a>.
    </p>
  )
}

export default Description