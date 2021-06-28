const minSizePassword = 3;

const validEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const cpfIsValid = (cpf) => /^\d{3}.\d{3}.\d{3}-\d{2}$/.test(cpf);
const validPassword = (password) => password && password.length >=    minSizePassword;

module.exports = {
  validEmail,
  cpfIsValid,
  validPassword,
}