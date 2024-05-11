import { FunctionComponent, useCallback } from "react";
import FrameComponent from "../components/FrameComponent8";
import { useNavigate } from "react-router-dom";
import styles from "./ActivityScreen5.module.css";

const ActivityScreen5: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/activity-screen4");
  }, [navigate]);

  return (
    <div className={styles.activityScreen}>
      <div className={styles.cardContainer}>
        <div className={styles.heartComponent}>
          <div className={styles.cardParent}>
            <div className={styles.card}>
              <div className={styles.background} />
              <div className={styles.middleHeartParent}>
                <img
                  className={styles.middleHeartIcon}
                  alt=""
                  src="/card.svg"
                />
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
          <div className={styles.cardGroup}>
            <div className={styles.card2}>
              <div className={styles.background2} />
              <div className={styles.threeCardRow}>
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
            <div className={styles.card4}>
              <div className={styles.background4} />
              <div className={styles.frameContainer}>
                <img className={styles.frameIcon3} alt="" src="/card.svg" />
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
      <FrameComponent />
      <main className={styles.image5Parent}>
        <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/group-156.svg"
          onClick={onGroupClick}
        />
        <img className={styles.frameItem} alt="" src="/group-148@2x.png" />
        <img className={styles.frameInner} alt="" src="/group-154@2x.png" />
      </main>
    </div>
  );
};

export default ActivityScreen5;
