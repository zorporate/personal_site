import React from "react";
import styles from "./Safari.module.css";

const Safari = (props) => {
    return (
        <div>
            {/* <head>
                <title>Failed to open page</title>
            </head> */}
            <div className={styles.body}>
                <div className={styles.contentContainer}>
                    <div className={styles.errorContainer}>
                        <div className={styles.textContainer}>
                            <p className={styles.errorTitle}>You Are Not Connected to the Internet</p>
                        </div>
                        <div className={styles.textContainer}>
                            <p className={styles.errorMessage}>This page can’t be displayed because your computer is currently offline.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Safari;