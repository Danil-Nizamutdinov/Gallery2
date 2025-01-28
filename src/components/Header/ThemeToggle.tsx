import React, { useEffect, useState } from 'react';
import LightIcon from 'src/assets/img/light_icon.svg?react';
import DarkIcon from 'src/assets/img/dark_icon.svg?react';
import styles from './header.module.scss';
import getInitialTheme from '../Helper/getInitialTheme';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<string>(getInitialTheme());

  const buttonClass =
    theme === 'theme2' ? styles.button_light : styles.button_dark;

  const IconComponent = theme === 'theme1' ? LightIcon : DarkIcon;

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === 'theme1' ? 'theme2' : 'theme1';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    const backgroundColor = `var(--background-color-${theme})`;
    const fontColor = `var(--font-color-${theme})`;
    const backgroundColorInput = `var(--background-color-input-${theme})`;
    const inputBorderColor = `var(--input-border-color-${theme})`;
    const fontColorYear = `var(--font-color-year-${theme})`;
    const inputPlaceholder = `var(--input-placeholder-${theme})`;
    const paintingTitle = `var(--painting-title-${theme})`;
    const backgroundPagination = `var(--background-pagination-${theme})`;

    document.body.style.setProperty('--background-color', backgroundColor);
    document.body.style.setProperty('--font-color', fontColor);
    document.body.style.setProperty(
      '--background-color-input',
      backgroundColorInput
    );
    document.body.style.setProperty('--input-border-color', inputBorderColor);
    document.body.style.setProperty('--font-color-year', fontColorYear);
    document.body.style.setProperty('--input-placeholder', inputPlaceholder);
    document.body.style.setProperty('--painting-title', paintingTitle);
    document.body.style.setProperty(
      '--background-pagination',
      backgroundPagination
    );
  }, [theme]);

  return (
    <button type="button" onClick={toggleTheme} className={buttonClass}>
      <IconComponent className={theme === 'theme1' ? styles.light_icon : ''} />
    </button>
  );
};

export default ThemeToggle;
