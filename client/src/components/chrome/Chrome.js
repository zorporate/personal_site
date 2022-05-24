import React from "react";
import styles from "./Chrome.module.css";

const Chrome = (props) => {
  return (
    <div>
      <div
        id="t"
        className={`${styles.body} ${styles.neterror}`}
        style={{ fontFamily: "Segoe UI", fontSize: "75%" }}
      >
        <div id={styles.mainFrameError} className={styles.interstitialWrapper}>
          <div id={styles.mainContent}>
            <div className={`${styles.icon} ${styles.iconGeneric}`}></div>
            <div id={styles.mainMessage}>
              <h1>
                <span className={styles.chromeTitle}>
                  This site can’t be reached
                </span>
              </h1>
              <p className={styles.chromeFont}>
                Check if there is a typo in{" "}
                <span className={styles.chromeFont}>
                  afjdkalfnsanv.com
                </span>
                .
              </p>
              <div id={styles.errorInformationPopupContainer}>
                <div id={styles.errorInformationPopup}>
                  <div>
                    <div>
                      <div id={styles.suggestionsList}>
                        <p></p>
                        <ul className={styles.singleSuggestion}>
                          <li className={styles.chromeFont} >
                            If spelling is correct,{" "}
                            <a href="localhost:3000">
                              try running Windows Network Diagnostics
                            </a>
                            .
                          </li>
                        </ul>
                      </div>
                      <div className={`${styles.errorCode} ${styles.chromeFont}`}>
                        DNS_PROBE_FINISHED_NXDOMAIN
                      </div>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id={styles.cancelSavePageButton}
                className={styles.hidden}
                style={{ display: "none" }}
              ></div>
            </div>
          </div>
          <div id={styles.buttons} className={`${styles.navWrapper} ${styles.suggestedLeft} ${styles.chromeFont}`}>
            <div id={styles.controlButtons}>
              <button className={styles.button}>
                Reload
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chrome;
