import Contact from "./Contact.js"; // Import Contact class

class AddressBook {
  // create array
  constructor() {
    this.contacts = [];
  }

  // method to add contact object in array
  addContact(contact) {
    this.contacts.push(contact);
  }

  // method to display contacts
  displayContacts() {
    return this.contacts.map((contact) => contact.toString()).join("\n");
  }
}
// Exporting the AddressBook class
export default AddressBook;
