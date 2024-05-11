import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent8.module.css";

const FrameComponent: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCardContainerClick = useCallback(() => {
    navigate("/activity-screen6");
  }, [navigate]);

  return (
    <div className={styles.imageContainerParent}>
      <div className={styles.imageContainer}>
        <div className={styles.cardWithHeartParent}>
          <div className={styles.cardWithHeart}>
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
                      src="/heart.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card1} onClick={onCardContainerClick}>
              <div className={styles.background1} />
              <div className={styles.threeCardStack}>
                <img
                  className={styles.middleHeartComponents}
                  alt=""
                  src="/card.svg"
                />
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
            <div className={styles.card2}>
              <div className={styles.background2} />
              <div className={styles.frameGroup}>
                <img className={styles.frameIcon1} alt="" src="/card.svg" />
                <div className={styles.heart2}>
                  <img
                    className={styles.heartIcon2}
                    loading="lazy"
                    alt=""
                    src="/heart.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.emptyContainer}>
            <div className={styles.cardStack}>
              <div className={styles.card3}>
                <div className={styles.background3} />
                <div className={styles.threeCardSequenceParent}>
                  <img
                    className={styles.threeCardSequence}
                    alt=""
                    src="/frame-3.svg"
                  />
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
              <div className={styles.card4}>
                <div className={styles.background4} />
                <div className={styles.frameContainer}>
                  <img className={styles.frameIcon2} alt="" src="/card.svg" />
                  <div className={styles.heart4}>
                    <img
                      className={styles.heartIcon4}
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
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
      </div>
    </div>
  );
};

export default FrameComponent;
