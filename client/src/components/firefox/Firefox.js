import React from "react";
import styles from "./Firefox.module.css";

const Firefox = (_props) => {
  return (
    <div className={styles.background}>
      <div dir="ltr" className={`${styles.body} `}>
        <div className={styles.container}>
          <div>
            <div className={styles.title}>
              <h1 className={styles.titleText}>
                Hmm. We’re having trouble finding that site.
              </h1>
            </div>
            <div id={styles.errorLongContent}>
              <div id={styles.errorShortDesc}>
                <p id={styles.errorShortDescText}>
                  We can’t connect to the server at www.fdafkjksafjds.com.
                </p>
              </div>
              <div id={styles.errorLongDesc}>
                <strong>
                  If that address is correct, here are three other things you
                  can try:
                </strong>
                <ul className={styles.ffUL}>
                  <li className={styles.ffLI}>Try again later.</li>
                  <li className={styles.ffLI}>Check your network connection.</li>
                  <li className={styles.ffLI}>
                    If you are connected but behind a firewall, check that
                    Firefox has permission to access the Web.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.buttonContainer}>
            <button className={`${styles.primary} ${styles.tryAgain} ${styles.ffButton}`}>Try Again</button>
          </div>

        </div>
      </div>
    </div>
  );
};
export default Firefox;
