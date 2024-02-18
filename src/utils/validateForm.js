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

export const validateForm = (email, password, fullName) => {
  const errorMessage = {
    email: null,
    password: null,
  };
  errorMessage.email = isValidEmail(email);
  errorMessage.password = isValidPassword(password);

  return errorMessage;
};
