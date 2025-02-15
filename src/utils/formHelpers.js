export const INITIAL_FORM_STATE = {
  name: "",
  surname: "",
  email: "",
  message: "",
};

export const VALIDATION_RULES = {
  name: {
    pattern: /^[A-Za-z]{2,}$/,
    message:
      "Name must contain at least 2 letters and no spaces or special characters",
  },
  surname: {
    pattern: /^[A-Za-z]{3,}$/,
    message:
      "Surname must contain at least 3 letters and no spaces or special characters",
  },
  email: {
    pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: "Please enter a valid email address",
  },
  message: {
    pattern: /^.{10,500}$/s,
    message: "Message must be between 10 and 500 characters",
  },
};
