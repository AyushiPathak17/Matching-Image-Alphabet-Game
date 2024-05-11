import { FunctionComponent } from "react";
import styles from "./FrameComponent21.module.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameWrapper}>
        <div className={styles.cardParent}>
          <div className={styles.card}>
            <div className={styles.background} />
            <div className={styles.readParent}>
              <img className={styles.readIcon} alt="" src="/card.svg" />
              <div className={styles.heart}>
                <img className={styles.heartIcon} alt="" src="/heart.svg" />
              </div>
            </div>
          </div>
          <div className={styles.cardGroup}>
            <div className={styles.card1}>
              <div className={styles.background1} />
              <div className={styles.categoryParent}>
                <img className={styles.categoryIcon} alt="" src="/card.svg" />
                <div className={styles.heart1}>
                  <img className={styles.heartIcon1} alt="" src="/heart.svg" />
                </div>
              </div>
            </div>
            <div className={styles.card2}>
              <div className={styles.background2} />
              <div className={styles.guestExperienceParent}>
                <img
                  className={styles.guestExperienceIcon}
                  alt=""
                  src="/card.svg"
                />
                <div className={styles.heart2}>
                  <img className={styles.heartIcon2} alt="" src="/heart.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameGroup}>
              <div className={styles.wrapperCardParent}>
                <div className={styles.wrapperCard}>
                  <img className={styles.cardIcon} alt="" src="/card2@2x.png" />
                </div>
                <div className={styles.frameDiv}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/group-660.svg"
                  />
                  <div className={styles.frameWrapper1}>
                    <div className={styles.aParent}>
                      <div className={styles.a}>A</div>
                      <img
                        className={styles.vector219Stroke}
                        loading="lazy"
                        alt=""
                        src="/vector-219-stroke.svg"
                      />
                      <img
                        className={styles.vector219Stroke1}
                        alt=""
                        src="/vector-219-stroke-1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.card3}>
                <div className={styles.background3} />
                <div className={styles.frameParent1}>
                  <img className={styles.frameIcon} alt="" src="/card.svg" />
                  <div className={styles.heart3}>
                    <img
                      className={styles.heartIcon3}
                      alt=""
                      src="/heart-1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.card4}>
                <div className={styles.background4} />
                <div className={styles.frameParent2}>
                  <img className={styles.frameIcon1} alt="" src="/card.svg" />
                  <div className={styles.heart4}>
                    <img
                      className={styles.heartIcon4}
                      alt=""
                      src="/heart-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ellipseParent}>
        <div className={styles.frameItem} />
        <div className={styles.flexLivingInsights} />
        <div className={styles.frameInner} />
      </div>
    </div>
  );
};

export default FrameComponent2;
