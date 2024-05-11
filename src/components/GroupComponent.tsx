import { FunctionComponent } from "react";
import styles from "./GroupComponent.module.css";

const GroupComponent: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.dqSenseParent}>
        <img className={styles.dqSenseIcon} alt="" src="/dq-sense.svg" />
        <div className={styles.wrapperLeftParent}>
          <div className={styles.wrapperLeft}>
            <img className={styles.leftIcon} alt="" src="/left.svg" />
          </div>
          <img className={styles.rightIcon} alt="" src="/right@2x.png" />
          <img className={styles.unionIcon} alt="" src="/union.svg" />
          <div className={styles.faceParent}>
            <img className={styles.faceIcon} alt="" src="/face.svg" />
            <div className={styles.intersectParent}>
              <img
                className={styles.intersectIcon}
                alt=""
                src="/intersect.svg"
              />
              <div className={styles.wrapperBlushes}>
                <img className={styles.blushesIcon} alt="" src="/blushes.svg" />
              </div>
            </div>
            <div className={styles.wrapperShade}>
              <img className={styles.shadeIcon} alt="" src="/shade.svg" />
            </div>
            <div className={styles.unionParent}>
              <img className={styles.unionIcon1} alt="" src="/union-1.svg" />
              <img className={styles.leftIcon1} alt="" src="/left-1@2x.png" />
              <img className={styles.rightIcon1} alt="" src="/right-1.svg" />
              <img className={styles.noseIcon} alt="" src="/nose.svg" />
            </div>
          </div>
        </div>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
      </div>
      <img className={styles.ellipseIcon} alt="" src="/ellipse-313.svg" />
      <div className={styles.vectorParent}>
        <img className={styles.frameChild1} alt="" src="/ellipse-315.svg" />
        <div className={styles.vectorGroup}>
          <img className={styles.vectorIcon} alt="" src="/dq-sense.svg" />
          <div className={styles.wrapperLeftGroup}>
            <div className={styles.wrapperLeft1}>
              <img className={styles.leftIcon2} alt="" src="/left.svg" />
            </div>
            <img
              className={styles.rightIcon2}
              loading="lazy"
              alt=""
              src="/right@2x.png"
            />
            <img className={styles.unionIcon2} alt="" src="/union.svg" />
            <div className={styles.blushes}>
              <img className={styles.faceIcon1} alt="" src="/face.svg" />
              <div className={styles.intersectGroup}>
                <img
                  className={styles.intersectIcon1}
                  alt=""
                  src="/intersect.svg"
                />
                <div className={styles.wrapperBlushes1}>
                  <img
                    className={styles.blushesIcon1}
                    alt=""
                    src="/blushes.svg"
                  />
                </div>
              </div>
              <div className={styles.wrapperShade1}>
                <img className={styles.shadeIcon1} alt="" src="/shade.svg" />
              </div>
              <div className={styles.unionGroup}>
                <img className={styles.unionIcon3} alt="" src="/union-1.svg" />
                <img
                  className={styles.leftIcon3}
                  loading="lazy"
                  alt=""
                  src="/left-1@2x.png"
                />
                <img
                  className={styles.rightIcon3}
                  loading="lazy"
                  alt=""
                  src="/right-1.svg"
                />
                <img
                  className={styles.noseIcon1}
                  loading="lazy"
                  alt=""
                  src="/nose.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.ellipseDiv} />
          <div className={styles.frameChild2} />
          <div className={styles.frameChild3} />
        </div>
        <img className={styles.frameChild4} alt="" src="/ellipse-313.svg" />
      </div>
    </div>
  );
};

export default GroupComponent;
