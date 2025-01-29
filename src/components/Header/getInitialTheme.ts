const getInitialTheme = (): string => {
  return localStorage.getItem('theme') ?? 'theme1';
};

export default getInitialTheme;
