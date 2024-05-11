import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CardContainer1 from "../components/CardContainer1";
import FrameComponent1 from "../components/FrameComponent12";
import styles from "./ActivityScreen21.module.css";

const ActivityScreen21: FunctionComponent = () => {
  const navigate = useNavigate();

  const onActivityScreenContainer8Click = useCallback(() => {
    navigate("/activity-screen8");
  }, [navigate]);

  const onGroupClick = useCallback(() => {
    navigate("/activity-screen6");
  }, [navigate]);

  return (
    <div
      className={styles.activityScreen}
      onClick={onActivityScreenContainer8Click}
    >
      <CardContainer1 />
      <FrameComponent1 />
      <main className={styles.imageContainer}>
        <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
        <div className={styles.wrapperCard}>
          <img
            className={styles.cardIcon}
            loading="lazy"
            alt=""
            src="/card4@2x.png"
          />
        </div>
        <img
          className={styles.imageContainerChild}
          loading="lazy"
          alt=""
          src="/group-156.svg"
          onClick={onGroupClick}
        />
        <img
          className={styles.imageContainerItem}
          alt=""
          src="/group-148@2x.png"
        />
        <img
          className={styles.imageContainerInner}
          alt=""
          src="/group-154@2x.png"
        />
      </main>
    </div>
  );
};

export default ActivityScreen21;
