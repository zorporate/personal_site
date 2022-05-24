import React from "react";
import styles from "./Edge.module.css";

const Edge = (_props) => {
  return (
    <div>
      <div
        id="t"
        style={{ fontSize: "75%" }}
        className={`${styles.body} ${styles.neterror}`}
      >
        <div id={styles.mainFrameError} className={styles.interstitialWrapper}>
          <div id={styles.mainContent}>
            <div className={`${styles.icon} ${styles.iconThinking}`}></div>
            <div id={styles.mainMessage}>
              <h1 className={styles.edgeTitle}>
                <span className={styles.edgeTitle}>
                  Hmmm… can't reach this page
                </span>
              </h1>
              <p className={styles.edgeFont}>
                Check if there is a typo in{" "}
                <span>
                  dfsakfljalkfdsjaf.com
                </span>
                .
              </p>
              <div id={styles.errorInformationPopupContainer}>
                <div id={styles.errorInformationPopup}>
                  <div>
                    <div>
                      <div id={styles.suggestionsList}>
                        <p></p>
                        <ul className={styles.edgeList}>
                          <li className={`${styles.edgeFont} ${styles.edgeItem}`}>
                            Search the web for{" "}
                            <a className={styles.edgeLink} href="https://www.bing.com/search?form=ANLKDR&amp;q=dfsakfljalkfdsjaf">
                              dfsakfljalkfdsjaf
                            </a>
                          </li>
                          <li className={`${styles.edgeFont} ${styles.edgeItem}`} >
                            If spelling is correct,{" "}
                            <a className={styles.edgeLink} href="./">
                              try running Windows Network Diagnostics.
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className={`${styles.errorCode} ${styles.chromeFont}`}>
                        DNS_PROBE_FINISHED_NXDOMAIN
                      </div>
                      <p ></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Edge;
