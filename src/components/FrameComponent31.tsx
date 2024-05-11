import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent31.module.css";

const FrameComponent3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/final-rewards-screen");
  }, [navigate]);

  return (
    <footer className={styles.frameParent}>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
      </div>
      <div className={styles.frameWrapper} onClick={onGroupContainerClick}>
        <div className={styles.polygonParent}>
          <img
            className={styles.polygonIcon}
            loading="lazy"
            alt=""
            src="/polygon-1.svg"
          />
          <div className={styles.rectangleParent}>
            <div className={styles.rectangleDiv} />
            <button className={styles.rectangleGroup}>
              <div className={styles.frameChild1} />
              <div className={styles.next}>NEXT</div>
              <div className={styles.pointer}>
                <img
                  className={styles.pointerChild}
                  alt=""
                  src="/rectangle-15.svg"
                />
                <img
                  className={styles.pointerItem}
                  alt=""
                  src="/ellipse-3.svg"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent3;
