import { CircleCheck } from 'lucide-react';
import styles from './module_css/typewritter.module.css'
import Chip from '../chip/Chip';
import { useState } from 'react';
import ChipWithImage from '../chip/ChipWithImage';
import html from '/html.png';
import css from '/css.png';


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

  const [text, setText] = useState("");
  const [typewritterText, setTypewritterText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTypewritterText(text);
  };
  return (
    <div className={styles.typewritter_wrapper}>
      <div className={styles.c}>
        <div className={styles.row}>
          <div className={`col_2 ${styles.left_sec}`}>
            <Chip />

            <h2 className={styles.heading_text}>Make text</h2>
            <h2 className={`${styles.heading_text} ${styles.btm}`}>Come alive.</h2>
            <p className={styles.para_text}>A simple yet powerful typewriter effect. Reveal text one character at a time using pure CSS animations.</p>
            <form className={styles.form_wrapper} onSubmit={handleSubmit}>
              <label htmlFor='input' className={styles.label}>Enter Text to continue !!! </label>
              <textarea id="input" onChange={handleChange} value={text} rows={5} className={styles.textarea} maxLength={65} spellCheck={false} />
              <p className={styles.text_area_tip}>(Only 65 Characters allowed)</p>

              <div className={styles.btn_wrap}>
                <button className={styles.button}  >Submit</button>

              </div>

            </form>



          </div>
          <div className={`col_2 ${styles.type_wrap}`}>
            <div className={styles.typewritter_wrap}>
              <div className={styles.typewritter_wrap_tit}>OUTPUT PREVIEW</div>
              <div key={typewritterText} className={styles.typewritter}>{typewritterText}</div>
              {/* <div className={styles.typewritter}>hi how are you</div> */}
            </div>

          </div>


        </div>
        <ul className={styles.feature_items}>
          {
            listItems.map((ele) => <li key={ele.id} className={styles.feature_item}><span className={styles.circle_check_wrap}><CircleCheck color="#6839fe" className={styles.circle_check} /></span><span className={styles.item_text}>{ele.text}</span></li>)
          }
        </ul>
        <div className={styles.tech_wrap}><span>BUILD WITH:</span><ChipWithImage imgLink={html} text="HTML5" /><ChipWithImage imgLink={css} text="CSS3" /></div>

      </div>

    </div>
  )
}

export default TypewritterEffect