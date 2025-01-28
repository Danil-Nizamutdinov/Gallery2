import React, { useState } from 'react';
import SearchIcon from 'src/assets/img/search_icon.svg?react';
import styles from './search.module.scss';

interface SearchProps {
  title: string;
  setTitle: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ title, setTitle }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [abbreviatedTitle, setAbbreviatedTitle] = useState<string>('');

  const handleOnFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);

    const newAbbreviatedTitle: string =
      title.length >= 25 ? title.slice(0, 25).concat('...') : title;

    setAbbreviatedTitle(newAbbreviatedTitle);
  };

  const clearTitle = () => {
    setTitle('');
    setAbbreviatedTitle('');
  };

  return (
    <div className={styles.search}>
      <div className={styles.input_box}>
        <input
          type="text"
          value={isFocused ? title : abbreviatedTitle}
          className={styles.input}
          placeholder="Painting title"
          onChange={(e) => setTitle(e.target.value)}
          onFocus={handleOnFocus}
          onBlur={handleBlur}
        />
        <button type="button" onClick={clearTitle} className={styles.button}>
          <span />
        </button>
        <SearchIcon className={styles.search_icon} />
      </div>
    </div>
  );
};

export default Search;
