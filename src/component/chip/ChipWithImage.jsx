import styles from './module_css/chip.module.css';

const ChipWithImage = ({text="css animation", color="#5d41ce", backgroundColor="#d7d2fe", imgLink=""}) => {
  return (
    <div className={styles.chip_wrap} style={{"--color": color, "--background-color":backgroundColor}}><img width={20} height={20} src={imgLink} alt="" /><span className={styles.chip_text}>{text}</span></div>
  )
}

export default ChipWithImage