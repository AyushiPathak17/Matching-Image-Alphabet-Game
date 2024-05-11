import { FunctionComponent } from "react";
import styles from "./CardContainer1.module.css";

const CardContainer1: FunctionComponent = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.heartContainerParent}>
        <div className={styles.heartContainer}>
          <div className={styles.cardParent}>
            <div className={styles.card}>
              <div className={styles.background} />
              <div className={styles.heartPairParent}>
                <img className={styles.heartPairIcon} alt="" src="/card.svg" />
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
            <div className={styles.card1}>
              <div className={styles.background1} />
              <div className={styles.frameParent}>
                <img className={styles.frameIcon} alt="" src="/card.svg" />
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
        </div>
        <div className={styles.dualCards}>
          <div className={styles.card2}>
            <div className={styles.background2} />
            <div className={styles.imageHolder}>
              <img className={styles.frameIcon1} alt="" src="/frame-2.svg" />
              <div className={styles.frameGroup}>
                <img
                  className={styles.frameChild}
                  loading="lazy"
                  alt=""
                  src="/group-666.svg"
                />
                <div className={styles.o}>O</div>
              </div>
            </div>
          </div>
          <div className={styles.cardWrapper}>
            <div className={styles.card3}>
              <div className={styles.background3} />
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
          <div className={styles.cardFrame}>
            <div className={styles.card4}>
              <div className={styles.background4} />
              <div className={styles.frameDiv}>
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
      </div>
    </div>
  );
};

export default CardContainer1;
