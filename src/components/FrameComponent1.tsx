import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.yes}>{`YES `}</div>
      <div className={styles.vectorParent}>
        <img className={styles.frameItem} alt="" src="/rectangle-15.svg" />
        <img
          className={styles.frameInner}
          loading="lazy"
          alt=""
          src="/ellipse-3.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent1;
