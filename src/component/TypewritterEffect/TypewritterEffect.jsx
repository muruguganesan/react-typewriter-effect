import { CircleCheck } from 'lucide-react';
import styles from './module_css/typewritter.module.css'
import Chip from '../chip/Chip';

const listItems = [
  {
    id: 1,
    text: "Character-by-character animation"
  },
  {
    id: 2,
    text: "Pure CSS Implementation"
  },
  {
    id: 3,
    text: "Animated blinking cursor"
  },
];


const TypewritterEffect = () => {
  return (
    <div className={styles.typewritter_wrapper}>
      <div className={styles.c}>
        <div className={styles.row}>
          <div className="col_2">
            <Chip />

            <h2 className={styles.heading_text}>Make text</h2>
            <h2 className={`${styles.heading_text} ${styles.btm}`}>Come alive.</h2>
            <p className={styles.para_text}>A simple yet powerful typewriter effect. Reveal text one character at a time using pure CSS animations.</p>
            <ul className={styles.feature_items}>
              {
                listItems.map((ele) => <li key={ele.id} className={styles.feature_item}><span className={styles.circle_check_wrap}><CircleCheck color="#6839fe" className={styles.circle_check} /></span><span className={styles.item_text}>{ele.text}</span></li>)
              }
            </ul>

          </div>
          <div className="col_2">

          </div>
        </div>
      </div>
    </div>
  )
}

export default TypewritterEffect