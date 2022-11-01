import React from 'react';
import styles from './BracketText.module.css';
function BracketText() {
  return (
    <div className={styles.content}>
      <div className={styles.content__container}>
        <ul className={styles.content__container__list}>
          <li className={styles.content__container__list__item}>WEB</li>
          <li className={styles.content__container__list__item}>Android</li>
          <li className={styles.content__container__list__item}>macOS</li>
          <li className={styles.content__container__list__item}>iOS</li>
        </ul>
      </div>
    </div>
  );
}

export default BracketText;
