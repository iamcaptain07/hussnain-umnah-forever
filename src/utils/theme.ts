export const lightTheme = {
  background: '#ffffff',
  color: '#000000',
  buttonBackground: '#f0f0f0',
  buttonColor: '#000000',
  borderColor: '#cccccc',
};

export const darkTheme = {
  background: '#1a1a1a',
  color: '#ffffff',
  buttonBackground: '#333333',
  buttonColor: '#ffffff',
  borderColor: '#444444',
};

export const themeSettings = {
  light: lightTheme,
  dark: darkTheme,
};

export const getCurrentTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme ? JSON.parse(savedTheme) : themeSettings.light;
};

export const toggleTheme = () => {
  const currentTheme = getCurrentTheme();
  const newTheme = currentTheme === themeSettings.light ? themeSettings.dark : themeSettings.light;
  localStorage.setItem('theme', JSON.stringify(newTheme));
  return newTheme;
};