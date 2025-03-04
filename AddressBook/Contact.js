class Contact {
  constructor(
    firstName,
    lastName,
    address,
    city,
    state,
    zip,
    phoneNumber,
    email
  ) {
    if (!this.validateName(firstName)) throw new Error("Invalid First Name!");
    if (!this.validateName(lastName)) throw new Error("Invalid Last Name!");
    if (!this.validateAddress(address)) throw new Error("Invalid Address!");
    if (!this.validateAddress(city)) throw new Error("Invalid City!");
    if (!this.validateAddress(state)) throw new Error("Invalid State!");
    if (!this.validateZip(zip)) throw new Error("Invalid ZIP Code!");
    if (!this.validatePhoneNumber(phoneNumber))
      throw new Error("Invalid Phone Number!");
    if (!this.validateEmail(email)) throw new Error("Invalid Email!");

    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }

  toString() {
    return `Name: ${this.firstName} ${this.lastName}, Address: ${this.address}, City: ${this.city}, 
    State: ${this.state}, Zip: ${this.zip}, Phone: ${this.phone}, Email: ${this.email}`;
  }

  validateName(name) {
    let namePattern = /^[A-Z][a-zA-Z]{3,}$/;
    return namePattern.test(name);
  }

  validateAddress(value) {
    let addressPattern = /^[A-Za-z0-9\s]{2,}$/;
    return addressPattern.test(value);
  }

  validateZip(zip) {
    let zipPattern = /^\d{6}(-\d{4})?$/;
    return zipPattern.test(zip);
  }

  validatePhoneNumber(phone) {
    let phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
  }

  validateEmail(email) {
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }
}
export default Contact;
