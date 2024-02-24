import styles from './style.module.css'

function Tile({ children } : { children : number}) {
  const colors = {
    '2': '#776E65',
    '4': '#776E65',
    '8': '#F2B179',
    '16': 'F59563',
    '32': '#F67C5F',
    '64': '#F65E3B',
    '128': '#EDCF72',
    '256': '#EDCC61',
    '512': '#EDC850',
    '1024': '#EDC53F',
    '2028': '#EDC22E',
  }

  return (
    <div className={styles.container} style={{ background: colors[`${children}`] }}>
      {
        children
      }
    </div>
)}

export default Tile