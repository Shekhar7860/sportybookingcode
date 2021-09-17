export const validateEmail = (email) => {
  //Validates the email address
  var emailRegex =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  //Validates the phone number
  var phoneRegex = /^(\+91-|\+91|0)?\d{10}$/; // Change this regex based on requirement
  return phoneRegex.test(phone);
};

export const checkifOnlyNumbers = (name) => {
  let isnum = /^\d+$/.test(name);
  return isnum;
};

export const validatePassword = (password) => {
  let passwordValidate =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,16}$/.test(
      password
    );
  return passwordValidate;
};
