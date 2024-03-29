import styles from './style.module.css'
const colors = {
  '2': '#EEE4DA',
  '4': '#EDE0C8',
  '8': '#F2B179',
  '16': '#F59563',
  '32': '#F67C5F',
  '64': '#F65E3B',
  '128': '#EDCF72',
  '256': '#EDCC61',
  '512': '#EDC850',
  '1024': '#EDC53F',
  '2048': '#EDC22E',
}

function Tile({ children } : { children : any }) {
  
  return (
    <div className={styles.container} style={{ background: colors[`${children}`] }}>
      <b>
        {
          children
        }
      </b>
    </div>
)}

export default Tile