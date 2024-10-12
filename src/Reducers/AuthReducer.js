function AuthReducer(stateAuth, actionAuth) {
  switch (actionAuth.type) {
    case "USER_LOGGED_IN":
      return {
        ...stateAuth,
        loggedIn: !stateAuth.loggedIn,
      };
    case "GUEST_USER_LOGGED_IN":
      return {
        ...stateAuth,
        loggedIn: !stateAuth.loggedIn,
      };
    case "USER_LOGOUT":
      return {
        ...stateAuth,
        loggedIn: !stateAuth.loggedIn,
      };
    case "SIGN_IN":
      return {
        ...stateAuth,
        users: [...stateAuth.users, actionAuth.payload],
      };
    default:
      return stateAuth;
  }
}

export { AuthReducer };
