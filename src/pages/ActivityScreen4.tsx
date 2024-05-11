import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent3 from "../components/FrameComponent31";
import styles from "./ActivityScreen4.module.css";

const ActivityScreen4: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/activity-screen7");
  }, [navigate]);

  return (
    <div className={styles.activityScreen}>
      <div className={styles.cardContainer} />
      <div className={styles.activityScreenInner}>
        <div className={styles.frameParent}>
          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <div className={styles.cardParent}>
                <div className={styles.card1}>
                  <div className={styles.background} />
                  <div className={styles.heartIcon}>
                    <img
                      className={styles.heartPairIcon}
                      alt=""
                      src="/card.svg"
                    />
                    <div className={styles.heart}>
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
                  <div className={styles.background1} />
                  <div className={styles.frameGroup}>
                    <img className={styles.frameIcon} alt="" src="/card.svg" />
                    <div className={styles.heart1}>
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
              <div className={styles.cardGroup}>
                <div className={styles.card3}>
                  <div className={styles.background2} />
                  <div className={styles.frameContainer}>
                    <img className={styles.frameIcon1} alt="" src="/card.svg" />
                    <div className={styles.heart2}>
                      <img
                        className={styles.heartIcon3}
                        loading="lazy"
                        alt=""
                        src="/heart.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.card4}>
                  <div className={styles.background3} />
                  <div className={styles.frameDiv}>
                    <img className={styles.frameIcon2} alt="" src="/card.svg" />
                    <div className={styles.heart3}>
                      <img
                        className={styles.heartIcon4}
                        alt=""
                        src="/heart.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.imageContainerParent}>
            <div className={styles.imageContainer}>
              <div className={styles.cardParent1}>
                <div className={styles.card5}>
                  <div className={styles.background4} />
                  <div className={styles.customCard}>
                    <img className={styles.frameIcon3} alt="" src="/card.svg" />
                    <div className={styles.heart4}>
                      <img
                        className={styles.heartIcon5}
                        loading="lazy"
                        alt=""
                        src="/heart-1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.card6}>
                  <div className={styles.background5} />
                  <div className={styles.frameParent1}>
                    <img className={styles.frameIcon4} alt="" src="/card.svg" />
                    <div className={styles.heart5}>
                      <img
                        className={styles.heartIcon6}
                        loading="lazy"
                        alt=""
                        src="/heart-1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.heading1}>It’s a match !</div>
              </div>
            </div>
            <div className={styles.cardsAreaWrapper}>
              <div className={styles.cardsArea}>
                <div className={styles.card7}>
                  <div className={styles.background6} />
                  <div className={styles.frameParent2}>
                    <img className={styles.frameIcon5} alt="" src="/card.svg" />
                    <div className={styles.heart6}>
                      <img
                        className={styles.heartIcon7}
                        loading="lazy"
                        alt=""
                        src="/heart-1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.card8}>
                  <div className={styles.background7} />
                  <div className={styles.frameParent3}>
                    <img className={styles.frameIcon6} alt="" src="/card.svg" />
                    <div className={styles.heart7}>
                      <img
                        className={styles.heartIcon8}
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
      </div>
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
        <div className={styles.frameParent4}>
          <img className={styles.frameInner} alt="" src="/group-156-1@2x.png" />
          <div className={styles.vectorParent}>
            <img className={styles.vectorIcon} alt="" src="/vector-2251.svg" />
            <img
              className={styles.ellipseIcon}
              loading="lazy"
              alt=""
              src="/ellipse-3151.svg"
            />
          </div>
          <img
            className={styles.frameChild1}
            loading="lazy"
            alt=""
            src="/vector-2261.svg"
          />
        </div>
        <img className={styles.cardIcon} alt="" src="/card4@2x.png" />
        <img className={styles.cardIcon1} alt="" src="/card-11@2x.png" />
      </main>
      <FrameComponent3 />
    </div>
  );
};

export default ActivityScreen4;
