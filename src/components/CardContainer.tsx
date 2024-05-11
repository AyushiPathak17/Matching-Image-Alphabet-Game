import { FunctionComponent } from "react";
import styles from "./CardContainer.module.css";

const CardContainer: FunctionComponent = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.roundContainersParent}>
        <div className={styles.roundContainers} />
        <div className={styles.roundContainers1} />
        <div className={styles.roundContainers2} />
      </div>
      <div className={styles.card}>
        <div className={styles.background} />
        <div className={styles.subCardsParent}>
          <img className={styles.subCardsIcon} alt="" src="/card.svg" />
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
      <div className={styles.emptyCard}>
        <div className={styles.wrapperCardParent}>
          <div className={styles.wrapperCard}>
            <img className={styles.cardIcon} alt="" src="/card5@2x.png" />
          </div>
          <img
            className={styles.orangeIcon}
            loading="lazy"
            alt=""
            src="/orange.svg"
          />
        </div>
      </div>
      <div className={styles.cardWrapper}>
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
      <div className={styles.cardFrame}>
        <div className={styles.card2}>
          <div className={styles.background2} />
          <div className={styles.cardTrio}>
            <img className={styles.frameIcon1} alt="" src="/card.svg" />
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
          <div className={styles.frameGroup}>
            <img className={styles.frameIcon2} alt="" src="/card.svg" />
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

export default CardContainer;
