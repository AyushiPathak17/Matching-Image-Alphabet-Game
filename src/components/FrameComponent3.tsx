import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

const FrameComponent3: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <div className={styles.background} />
          <div className={styles.frameParent}>
            <img className={styles.frameIcon} alt="" src="/card.svg" />
            <div className={styles.heart}>
              <img
                className={styles.heartIcon}
                loading="lazy"
                alt=""
                src="/heart-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.colorCoderParent}>
        <div className={styles.colorCoder}>
          <div className={styles.colorCoderInner}>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.frameGroup}>
                <div className={styles.parent}>
                  <div className={styles.div}>02</div>
                  <div className={styles.frameInner} />
                </div>
                <div className={styles.ellipseDiv} />
              </div>
            </div>
          </div>
          <h2 className={styles.heading1}>Select a blue card.</h2>
        </div>
        <div className={styles.heading1LifeSkillsWrapper}>
          <div className={styles.heading11}>It has alphabets.</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
