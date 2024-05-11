import { FunctionComponent } from "react";
import styles from "./FrameComponent22.module.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <div className={styles.cardParent}>
      <div className={styles.card}>
        <div className={styles.background} />
        <div className={styles.frameParent}>
          <img className={styles.frameIcon} alt="" src="/card.svg" />
          <div className={styles.heart}>
            <img className={styles.heartIcon} alt="" src="/heart.svg" />
          </div>
        </div>
      </div>
      <img className={styles.frameChild} alt="" src="/group-146@2x.png" />
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.groupDiv}>
              <div className={styles.vectorParent}>
                <img className={styles.frameItem} alt="" src="/vector-1.svg" />
                <div className={styles.leftParent}>
                  <img className={styles.leftIcon} alt="" src="/left1.svg" />
                  <img
                    className={styles.rightIcon}
                    loading="lazy"
                    alt=""
                    src="/right1@2x.png"
                  />
                  <img
                    className={styles.unionIcon}
                    loading="lazy"
                    alt=""
                    src="/union.svg"
                  />
                  <div className={styles.faceComponents}>
                    <img className={styles.faceIcon} alt="" src="/face1.svg" />
                    <div className={styles.sHADEPoint}>
                      <img
                        className={styles.intersectIcon}
                        alt=""
                        src="/intersect1.svg"
                      />
                      <div className={styles.wrapperBlushes}>
                        <img
                          className={styles.blushesIcon}
                          alt=""
                          src="/blushes1.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.wrapperShade}>
                      <img
                        className={styles.shadeIcon}
                        alt=""
                        src="/shade1.svg"
                      />
                    </div>
                    <div className={styles.unionParent}>
                      <img
                        className={styles.unionIcon1}
                        alt=""
                        src="/union-11.svg"
                      />
                      <img
                        className={styles.eyesIcon}
                        loading="lazy"
                        alt=""
                        src="/eyes.svg"
                      />
                      <img
                        className={styles.eyesIcon1}
                        loading="lazy"
                        alt=""
                        src="/eyes-1.svg"
                      />
                      <img
                        className={styles.noseIcon}
                        loading="lazy"
                        alt=""
                        src="/nose.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.frameInner} />
                <div className={styles.ellipseDiv} />
              </div>
              <img
                className={styles.ellipseIcon}
                alt=""
                src="/ellipse-3131.svg"
              />
            </div>
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group-663.svg"
            />
          </div>
          <img className={styles.frameChild1} alt="" src="/group-160@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
