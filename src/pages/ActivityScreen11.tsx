import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "../components/FrameComponent11";
import styles from "./ActivityScreen11.module.css";

const ActivityScreen11: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCardContainer1Click = useCallback(() => {
    navigate("/activity-screen3");
  }, [navigate]);

  const onGroupClick = useCallback(() => {
    navigate("/activity-screen1");
  }, [navigate]);

  return (
    <div className={styles.activityScreen}>
      <div className={styles.name} />
      <div className={styles.activityScreenInner}>
        <div className={styles.fRAMEParent}>
          <div className={styles.fRAME}>
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
          <div className={styles.card2}>
            <div className={styles.card3}>
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
            <div className={styles.card4}>
              <div className={styles.background3} />
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
            <div className={styles.card5}>
              <div className={styles.background4} />
              <div className={styles.frameParent1}>
                <img className={styles.frameIcon4} alt="" src="/card.svg" />
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
      <main className={styles.cardcontainerParent}>
        <section className={styles.cardcontainer}>
          <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
          <div className={styles.card6}>
            <div className={styles.background5} />
            <div className={styles.imageAreaParent}>
              <img className={styles.imageAreaIcon} alt="" src="/card.svg" />
              <div className={styles.heart5}>
                <img
                  className={styles.heartIcon5}
                  loading="lazy"
                  alt=""
                  src="/heart.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.card7} onClick={onCardContainer1Click}>
            <div className={styles.background6} />
            <div className={styles.frameParent2}>
              <img className={styles.frameIcon5} alt="" src="/card.svg" />
              <div className={styles.heart6}>
                <img
                  className={styles.heartIcon6}
                  loading="lazy"
                  alt=""
                  src="/heart-1.svg"
                />
              </div>
            </div>
          </div>
        </section>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/group-156.svg"
          onClick={onGroupClick}
        />
        <img className={styles.frameItem} alt="" src="/group-148@2x.png" />
        <img className={styles.frameInner} alt="" src="/group-154@2x.png" />
        <img
          className={styles.cardIcon}
          loading="lazy"
          alt=""
          src="/card@2x.png"
        />
        <img className={styles.vectorIcon} alt="" src="/vector-2241.svg" />
        <img className={styles.groupIcon} alt="" src="/group-1493@2x.png" />
      </main>
      <FrameComponent1 />
    </div>
  );
};

export default ActivityScreen11;
