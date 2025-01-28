import React from 'react';
import { IPainting } from 'src/types/main';
import styles from './painting.module.scss';

interface PaintingProps {
  painting: IPainting;
}

const baseUrl = 'https://test-front.framework.team/';

const Painting: React.FC<PaintingProps> = ({ painting }) => {
  return (
    <div className={styles.painting_box}>
      <img
        src={baseUrl + painting.imageUrl}
        alt="painting"
        className={styles.painting}
      />
      <div className={styles.painting_info_box}>
        <div className={styles.painting_info}>
          <h2 className={styles.painting_title}>{painting.name}</h2>
          <span className={styles.painting_subtitle}>{painting.created}</span>
        </div>
        <div className={styles.painting_info2}>
          <h2 className={styles.painting_title}>{painting.author?.name}</h2>
          <span className={styles.painting_subtitle}>
            {painting.location?.location}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Painting;
