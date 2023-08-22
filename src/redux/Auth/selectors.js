export const getUser = state => {
  return state.user.user;
};

export const stateIsLoggedIn = state => {
  console.log(state);
  return state.user.isLoggenIn;
};
