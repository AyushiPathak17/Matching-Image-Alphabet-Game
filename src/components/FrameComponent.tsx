import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  sTART?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propLeft?: CSSProperties["left"];

  /** Action props */
  onGroupContainerClick?: () => void;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  sTART,
  propBackgroundColor,
  propBackgroundColor1,
  propLeft,
  onGroupContainerClick,
}) => {
  const frameButtonStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const sTARTStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.cogWrapper}>
        <div className={styles.cog}>
          <img
            className={styles.cogIcon}
            loading="lazy"
            alt=""
            src="/cog.svg"
          />
        </div>
      </div>
      <div className={styles.starParent}>
        <div className={styles.star}>
          <img
            className={styles.starIcon}
            loading="lazy"
            alt=""
            src="/star.svg"
          />
        </div>
        <div className={styles.materialsymbolsmenuParent}>
          <img
            className={styles.materialsymbolsmenuIcon}
            alt=""
            src="/materialsymbolsmenu.svg"
          />
          <div className={styles.logout} />
          <div className={styles.hiWelcomeBackNurshafeeqa} />
        </div>
      </div>
      <div className={styles.frameGroup} onClick={onGroupContainerClick}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <button className={styles.rectangleGroup} style={frameButtonStyle}>
            <div className={styles.frameItem} style={rectangleDivStyle} />
            <div className={styles.start} style={sTARTStyle}>
              {sTART}
            </div>
            <div className={styles.vectorParent}>
              <img
                className={styles.frameInner}
                alt=""
                src="/rectangle-15.svg"
              />
              <img className={styles.ellipseIcon} alt="" src="/ellipse-3.svg" />
            </div>
          </button>
        </div>
        <div className={styles.polygonParent}>
          <img
            className={styles.polygonIcon}
            loading="lazy"
            alt=""
            src="/polygon-1.svg"
          />
          <div className={styles.ellipseDiv} />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
