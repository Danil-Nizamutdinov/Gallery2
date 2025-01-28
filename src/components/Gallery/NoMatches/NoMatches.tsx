import React from 'react';
import styles from './noMatches.module.scss';

const NoMatches: React.FC = () => {
  return (
    <div className={styles.no_matches}>
      <p className={styles.title}>
        No matches for <span>Lorem</span>
      </p>
      <p className={styles.subtitle}>
        Please try again with a different spelling or keywords.
      </p>
    </div>
  );
};

export default NoMatches;
