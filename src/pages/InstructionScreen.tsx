import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import styles from "./InstructionScreen.module.css";

const InstructionScreen: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/intro-screen1");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/activity-screen");
  }, [navigate]);

  return (
    <div className={styles.instructionScreen}>
      <main className={styles.fRAME}>
        <section className={styles.image5Parent}>
          <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
          <div className={styles.navbarButton}>
            <div className={styles.navbarButtonChild} />
            <div className={styles.misrAppliedKnowledgeEnterpr} />
            <div className={styles.makers} />
          </div>
        </section>
        <img
          className={styles.fRAMEChild}
          loading="lazy"
          alt=""
          src="/group-156.svg"
          onClick={onGroupClick}
        />
        <img className={styles.fRAMEItem} alt="" src="/group-148@2x.png" />
        <img className={styles.fRAMEInner} alt="" src="/group-154@2x.png" />
        <img
          className={styles.withOurFlexibleProductionC}
          alt=""
          src="/with-our-flexible-production-capacity-and-high-tec.svg"
        />
      </main>
      <FrameComponent4 />
      <FrameComponent3 />
      <div className={styles.frameParent}>
        <FrameComponent2 />
        <div className={styles.frameWrapper}>
          <div
            className={styles.frameContainer}
            onClick={onGroupContainerClick}
          >
            <div className={styles.partnersParent}>
              <img
                className={styles.partnersIcon}
                loading="lazy"
                alt=""
                src="/polygon-1.svg"
              />
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <button className={styles.rectangleGroup}>
                  <div className={styles.frameItem} />
                  <div className={styles.play}>PLAY</div>
                  <div className={styles.vectorParent}>
                    <img
                      className={styles.frameInner}
                      alt=""
                      src="/rectangle-15.svg"
                    />
                    <img
                      className={styles.ellipseIcon}
                      alt=""
                      src="/ellipse-3.svg"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionScreen;
