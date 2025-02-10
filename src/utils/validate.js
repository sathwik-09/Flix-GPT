export const checkValidData = (email, password) => {
  const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if(!isValidEmail) return 'Invalid Email';
  if(!isValidPassword) return 'Invalid Password';
  return null;
}