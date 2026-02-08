class User {
  constructor(
    name,
    lastNameP,
    lastNameM,
    username,
    birthDate,
    address,
    phone,
    email,
    password,
    role = "cliente"
  ) {
    this.name = name;
    this.lastNameP = lastNameP;
    this.lastNameM = lastNameM;
    this.username = username;
    this.birthDate = birthDate;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}

module.exports = User;
