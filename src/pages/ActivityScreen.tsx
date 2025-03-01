import { FunctionComponent, useCallback } from "react";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent6 from "../components/FrameComponent6";
import { useNavigate } from "react-router-dom";
import styles from "./ActivityScreen.module.css";

const ActivityScreen: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/instruction-screen");
  }, [navigate]);

  return (
    <div className={styles.activityScreen}>
      <FrameComponent5 />
      <div className={styles.customShape} />
      <FrameComponent6 />
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
        <img className={styles.vectorIcon} alt="" src="/vector-224.svg" />
      </main>
      <div className={styles.ellipseParent}>
        <div className={styles.ellipseDiv} />
        <div className={styles.frameChild1} />
        <div className={styles.frameChild2} />
      </div>
    </div>
  );
};

export default ActivityScreen;
