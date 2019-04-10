module.exports = class loginRequestModel {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.json = JSON.stringify({ username, password });
  }
};
