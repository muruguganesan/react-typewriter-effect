import styles from './module_css/chip.module.css';

const Chip = ({text="css animation", color="#5d41ce", backgroundColor="#d7d2fe"}) => {
  return (
    <div className={styles.chip_wrap} style={{"--color": color, "--background-color":backgroundColor}}><span className={styles.round} ></span><span className={styles.chip_text}>{text}</span></div>
  )
}

export default Chip