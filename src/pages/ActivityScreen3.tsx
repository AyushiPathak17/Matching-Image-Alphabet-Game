import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ActivityScreen3.module.css";

const ActivityScreen3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCardContainer1Click = useCallback(() => {
    navigate("/activity-screen5");
  }, [navigate]);

  const onGroupClick = useCallback(() => {
    navigate("/activity-screen3");
  }, [navigate]);

  return (
    <div className={styles.activityScreen}>
      <div className={styles.activityScreenInner}>
        <div className={styles.firstCardParent}>
          <div className={styles.firstCard}>
            <div className={styles.secondCard}>
              <div className={styles.card}>
                <div className={styles.background} />
                <div className={styles.fourthCard}>
                  <img
                    className={styles.fifthCardIcon}
                    alt=""
                    src="/card.svg"
                  />
                  <div className={styles.heart}>
                    <img
                      className={styles.heartIcon}
                      loading="lazy"
                      alt=""
                      src="/heart.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.card1}>
                <div className={styles.background1} />
                <div className={styles.frameParent}>
                  <img className={styles.frameIcon} alt="" src="/card.svg" />
                  <div className={styles.heart1}>
                    <img
                      className={styles.heartIcon1}
                      loading="lazy"
                      alt=""
                      src="/heart.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.eighthCard}>
            <div className={styles.ninthCard}>
              <div className={styles.tenthCard}>
                <div className={styles.card2}>
                  <div className={styles.background2} />
                  <div className={styles.twelfthCard}>
                    <img
                      className={styles.thirteenthCardIcon}
                      alt=""
                      src="/card.svg"
                    />
                    <div className={styles.heart2}>
                      <img
                        className={styles.heartIcon2}
                        alt=""
                        src="/heart.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.seventeenthCard}>
                  <div className={styles.card3}>
                    <div className={styles.background3} />
                    <div className={styles.nineteenthCard}>
                      <img
                        className={styles.twentiethCardIcon}
                        alt=""
                        src="/card.svg"
                      />
                      <div className={styles.heart3}>
                        <img
                          className={styles.heartIcon3}
                          loading="lazy"
                          alt=""
                          src="/heart.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.twentyThirdCard}>
              <div className={styles.twentyFourthCard}>
                <div className={styles.twentyFifthCard}>
                  <div className={styles.card4}>
                    <div className={styles.background4} />
                    <div className={styles.twentySeventhCard}>
                      <img
                        className={styles.twentyEighthCard}
                        alt=""
                        src="/card.svg"
                      />
                      <div className={styles.heart4}>
                        <img
                          className={styles.heartIcon4}
                          loading="lazy"
                          alt=""
                          src="/heart-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.card5}>
                    <div className={styles.background5} />
                    <div className={styles.frameGroup}>
                      <img
                        className={styles.frameIcon1}
                        alt=""
                        src="/card.svg"
                      />
                      <div className={styles.heart5}>
                        <img
                          className={styles.heartIcon5}
                          loading="lazy"
                          alt=""
                          src="/heart-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.card6}>
                    <div className={styles.background6} />
                    <div className={styles.frameContainer}>
                      <img
                        className={styles.frameIcon2}
                        alt=""
                        src="/card.svg"
                      />
                      <div className={styles.heart6}>
                        <img
                          className={styles.heartIcon6}
                          loading="lazy"
                          alt=""
                          src="/heart-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.heading1} onClick={onCardContainer1Click}> It’s a match !</div>
                </div>
              </div>
              <div className={styles.thirtySecondCard}>
                <div className={styles.thirtyThirdCard}>
                  <div className={styles.card7}>
                    <div className={styles.background7} />
                    <div className={styles.thirtyFifthCard}>
                      <img
                        className={styles.thirtySixthCard}
                        alt=""
                        src="/card.svg"
                      />
                      <div className={styles.heart7}>
                        <img
                          className={styles.heartIcon7}
                          loading="lazy"
                          alt=""
                          src="/heart.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.thirtyNinthCard}>
                    <div className={styles.fortiethCard}>
                      <div className={styles.card8}>
                        <div className={styles.background8} />
                        <div className={styles.fortySecondCard}>
                          <img
                            className={styles.fortyThirdCard}
                            alt=""
                            src="/card.svg"
                          />
                          <div className={styles.heart8}>
                            <img
                              className={styles.heartIcon8}
                              loading="lazy"
                              alt=""
                              src="/heart-1.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.card9}>
                        <div className={styles.background9} />
                        <div className={styles.frameDiv}>
                          <img
                            className={styles.frameIcon3}
                            alt=""
                            src="/card.svg"
                          />
                          <div className={styles.heart9}>
                            <img
                              className={styles.heartIcon9}
                              loading="lazy"
                              alt=""
                              src="/heart-1.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.fortySixthCard} />
      <div className={styles.fortySeventhCard}>
        <div className={styles.fortyEighthCard} />
        <div className={styles.fortyEighthCard1} />
        <div className={styles.fortyEighthCard2} />
      </div>
      <main className={styles.fortyninthCard}>
        <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
        <img
          className={styles.fortyninthCardChild}
          loading="lazy"
          alt=""
          src="/group-156.svg"
          onClick={onGroupClick}
        />
        <img
          className={styles.fortyninthCardItem}
          alt=""
          src="/group-148@2x.png"
        />
        <img
          className={styles.fortyninthCardInner}
          alt=""
          src="/group-662@2x.png"
        />
        <img className={styles.cardIcon} alt="" src="/card3@2x.png" />
        <div className={styles.frameParent1}>
          <img className={styles.frameChild} alt="" src="/group-154@2x.png" />
          <img className={styles.frameItem} alt="" src="/vector-225.svg" />
          <img
            className={styles.frameInner}
            loading="lazy"
            alt=""
            src="/vector-226.svg"
          />
        </div>
      </main>
    </div>
  );
};

export default ActivityScreen3;
