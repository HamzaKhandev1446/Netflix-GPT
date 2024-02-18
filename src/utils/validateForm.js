export const isValidEmail = (email) => {
  const isEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  return !isEmail ? "Email ID is not Valid" : null;
};

export const isValidPassword = (password) => {
  const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );
  return !isPassword ? "Password is not Valid" : null;
};

export const isValidFullName = (fullName) => {
  const isFullName = /^[A-Za-z][A-Za-z0-9_]{7,16}$/.test(fullName);
  return !isFullName || fullName.length === 0 ? "Full Name is not Valid" : null;
};

export const validateForm = (email, password, fullName) => {
  const errorMessage = {
    email: null,
    password: null,
    fullName: null,
  };
  errorMessage.email = isValidEmail(email);
  errorMessage.password = isValidPassword(password);
  if (fullName === undefined) {
    errorMessage.fullName = null;
  } else {
    errorMessage.fullName = isValidFullName(fullName);
  }
  return errorMessage;
};
