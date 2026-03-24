function AuthReducer(stateAuth, actionAuth) {
  switch (actionAuth.type) {
    case "USER_LOGGED_IN":
      return {
        ...stateAuth,
        loggedIn: actionAuth.payload?.loggedIn ?? true,
        currentUser: actionAuth.payload?.currentUser ?? stateAuth.currentUser,
      };
    case "GUEST_USER_LOGGED_IN":
      return {
        ...stateAuth,
        loggedIn: actionAuth.payload?.loggedIn ?? true,
        currentUser: actionAuth.payload?.currentUser ?? "Guest",
      };
    case "USER_LOGOUT":
      return {
        ...stateAuth,
        loggedIn: actionAuth.payload?.loggedIn ?? false,
        currentUser: null,
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
