import styles from './styles.module.css'

function Cell({ children } : { children?: React.ReactElement}) {
  return (
    <div className={styles.container}>
      {
        children
      }
    </div>
  )
}
  
export default Cell