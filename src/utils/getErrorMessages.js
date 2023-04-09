export const getErrorMessages = (errorCode) => {
  let result = "";
  switch (errorCode) {
    case "ERROR_EMAIL_ALREADY_IN_USE":
    case "account-exists-with-different-credential":
    case "email-already-in-use":
      result = "Email already used. Go to login page.";
      break;
    case "ERROR_WRONG_PASSWORD":
    case "wrong-password":
      result = "Wrong email/password combination.";
      break;
    case "ERROR_USER_NOT_FOUND":
    case "user-not-found":
      result = "No user found with this email.";
      break;
    case "ERROR_USER_DISABLED":
    case "user-disabled":
      result = "User disabled.";
      break;
    case "ERROR_TOO_MANY_REQUESTS":
    case "operation-not-allowed":
      result = "Too many requests to log into this account.";
      break;
    case "ERROR_OPERATION_NOT_ALLOWED":
      result = "Server error, please try again later.";
      break;
    case "ERROR_INVALID_EMAIL":
    case "invalid-email":
      result = "Email address is invalid.";
      break;
    default:
      result = "Login failed. Please try again.";
      break;
  }
  return result;
};
