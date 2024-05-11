import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GroupComponent from "../components/GroupComponent";
import FrameComponent from "../components/FrameComponent";
import styles from "./IntroScreen.module.css";

const IntroScreen: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/intro-screen");
  }, [navigate]);

  return (
    <div className={styles.introScreen}>
      <div className={styles.introScreenInner}>
        <div className={styles.wrapperGroup149Parent}>
          <div className={styles.wrapperGroup149}>
            <img
              className={styles.wrapperGroup149Child}
              loading="lazy"
              alt=""
              src="/group-149.svg"
            />
          </div>
          <div className={styles.heading1}>Welcome Kiddo !</div>
        </div>
      </div>
      <main className={styles.image5Parent}>
        <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
        <div className={styles.moreInfo} />
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <GroupComponent />
      </main>
      <FrameComponent
        sTART="START"
        onGroupContainerClick={onGroupContainerClick}
      />
    </div>
  );
};

export default IntroScreen;
