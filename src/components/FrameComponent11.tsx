import { FunctionComponent } from "react";
import styles from "./FrameComponent11.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.tableParent}>
        <div className={styles.table} />
        <div className={styles.header} />
        <div className={styles.col} />
      </div>
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <div className={styles.background} />
          <div className={styles.cardstack}>
            <img className={styles.frameIcon} alt="" src="/card.svg" />
            <div className={styles.heart}>
              <img
                className={styles.heartIcon}
                loading="lazy"
                alt=""
                src="/heart.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.card1}>
          <div className={styles.background1} />
          <div className={styles.frameGroup}>
            <img className={styles.frameIcon1} alt="" src="/card.svg" />
            <div className={styles.heart1}>
              <img
                className={styles.heartIcon1}
                loading="lazy"
                alt=""
                src="/heart.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.heading1LifeSkillsWrapper}>
        <div className={styles.heading1}>Now select second card.</div>
      </div>
      <div className={styles.cardFrame}>
        <div className={styles.card2}>
          <div className={styles.background2} />
          <div className={styles.frameContainer}>
            <img className={styles.frameIcon2} alt="" src="/card.svg" />
            <div className={styles.heart2}>
              <img
                className={styles.heartIcon2}
                loading="lazy"
                alt=""
                src="/heart-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.card3}>
          <div className={styles.background3} />
          <div className={styles.frameParent1}>
            <img className={styles.frameIcon3} alt="" src="/card.svg" />
            <div className={styles.heart3}>
              <img
                className={styles.heartIcon3}
                loading="lazy"
                alt=""
                src="/heart-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
