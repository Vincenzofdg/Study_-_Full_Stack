export const CHANGE_THEME = 'CHANGE_THEME';

const changeTheme = (mode) => ({
  type: CHANGE_THEME,
  payload: mode,
});

export default changeTheme;
