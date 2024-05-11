import { FunctionComponent } from "react";
import styles from "./FrameComponent4.module.css";

const FrameComponent4: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <div className={styles.background} />
          <div className={styles.cardParent}>
            <img className={styles.cardIcon} alt="" src="/card.svg" />
            <div className={styles.heart}>
              <img className={styles.heartIcon} alt="" src="/heart.svg" />
            </div>
          </div>
          <img className={styles.cardIcon1} alt="" src="/card1@2x.png" />
        </div>
      </div>
      <div className={styles.headinglifeskillsParent}>
        <div className={styles.headinglifeskills}>
          <div className={styles.frameParent}>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.frameGroup}>
                <div className={styles.parent}>
                  <div className={styles.div}>01</div>
                  <div className={styles.frameInner} />
                </div>
                <div className={styles.ellipseDiv} />
              </div>
            </div>
            <div className={styles.heading1LifeSkillsWrapper}>
              <h2 className={styles.heading1}>Select a pink card.</h2>
            </div>
          </div>
        </div>
        <div className={styles.heading11}>It has images.</div>
      </div>
    </div>
  );
};

export default FrameComponent4;
