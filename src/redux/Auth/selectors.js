export const getUser = state => {
  return state.user.user;
};

export const stateIsLoggedIn = state => {
  return state.user.isLoggedIn;
};

export const selectIsLRefreshing = state => {
  return state.user.isRefreshing;
};
