import styles from './style.module.css'

function Tile({ children } : { children : number}) {
  return (
    <div className={styles.container}>
      {
        children
      }
    </div>
)}

export default Tile