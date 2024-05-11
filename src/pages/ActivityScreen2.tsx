import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent2 from "../components/FrameComponent21";
import styles from "./ActivityScreen2.module.css";

const ActivityScreen2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
    navigate("/activity-screen4");
  }, [navigate]);

  const onGroupClick = useCallback(() => {
    navigate("/activity-screen2");
  }, [navigate]);

  return (
    <div className={styles.activityScreen}>
      <div className={styles.image} onClick={onImageClick} />
      <div className={styles.activityScreenInner}>
        <div className={styles.frameParent}>
          <div className={styles.cardParent}>
            <div className={styles.card}>
              <div className={styles.background} />
              <div className={styles.frameGroup}>
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
            <div className={styles.card1}>
              <div className={styles.background1} />
              <div className={styles.minReadParent}>
                <img className={styles.minReadIcon} alt="" src="/card.svg" />
                <div className={styles.heart1}>
                  <img className={styles.heartIcon1} alt="" src="/heart.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardGroup}>
            <div className={styles.card2}>
              <div className={styles.background2} />
              <div className={styles.frameContainer}>
                <img className={styles.frameIcon1} alt="" src="/card.svg" />
                <div className={styles.heart2}>
                  <img
                    className={styles.heartIcon2}
                    alt=""
                    src="/heart-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.card3}>
              <div className={styles.background3} />
              <div className={styles.frameDiv}>
                <img className={styles.frameIcon2} alt="" src="/frame-3.svg" />
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
              <div className={styles.frameParent1}>
                <img className={styles.frameIcon3} alt="" src="/card.svg" />
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
      <FrameComponent2 />
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
        <img className={styles.cardIcon} alt="" src="/card1@2x.png" />
      </main>
    </div>
  );
};

export default ActivityScreen2;
