import { FunctionComponent, useCallback } from "react";
import FrameComponent2 from "../components/FrameComponent22";
import { useNavigate } from "react-router-dom";
import styles from "./FinalRewardsScreen.module.css";

const FinalRewardsScreen: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/activity-screen8");
  }, [navigate]);

  return (
    <div className={styles.finalRewardsScreen}>
      <div className={styles.finalRewardsScreenChild} />
      <div className={styles.frameParent}>
        <div className={styles.image5Parent}>
          <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
          <div className={styles.ellipseParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameItem} />
            <div className={styles.frameInner} />
          </div>
          <FrameComponent2 />
        </div>
        <img
          className={styles.groupIcon}
          loading="lazy"
          alt=""
          src="/group-156.svg"
          onClick={onGroupClick}
        />
        <img className={styles.frameChild1} alt="" src="/group-148@2x.png" />
        <img className={styles.frameChild2} alt="" src="/group-156-1@2x.png" />
        <img className={styles.frameChild3} alt="" src="/group-156-1@2x.png" />
        <img
          className={styles.frameChild4}
          loading="lazy"
          alt=""
          src="/group-156-2@2x.png"
        />
        <img className={styles.frameChild5} alt="" src="/group-1561@2x.png" />
      </div>
    </div>
  );
};

export default FinalRewardsScreen;
