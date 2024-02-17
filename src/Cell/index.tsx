import styles from './styles.module.css'

function Cell({ children } : { children?: any}) {
  return (
    <div className={styles.container}>
      {
        children
      }
    </div>
  )
}
  
export default Cell