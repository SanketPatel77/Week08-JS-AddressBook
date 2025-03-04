import Contact from "./Contact.js"; // Import Contact class

class AddressBook {
  // create array
  constructor() {
    this.contacts = [];
  }

  // method to add contact object in array
  addContact(contact) {
    if (this.hasDuplicate(contact.firstName, contact.lastName)) {
      throw new Error("Contact with this name already exists.");
    }
    this.contacts.push(contact);
  }

  // method to display contacts
  displayContacts() {
    return this.contacts.map((contact) => contact.toString()).join("\n");
  }

  // Function to find and edit a contact
  editDetails(firstName, lastName, newDetails) {
    let contact = this.contacts.find(
      (contact) =>
        contact.firstName.toLowerCase() === firstName.toLowerCase() &&
        contact.lastName.toLowerCase() === lastName.toLowerCase()
    );

    if (contact) {
      Object.assign(contact, newDetails);
      console.log(`Contact updated successfully:\n`, contact);
    } else {
      console.log("Contact not found.");
    }
  }

  // method to search by name and delte contact form array
  deleteContact(firstName, lastName) {
    let index = this.contacts.findIndex(
      (contact) =>
        contact.firstName.toLowerCase() === firstName.toLowerCase() &&
        contact.lastName.toLowerCase() === lastName.toLowerCase()
    );
    if (index !== -1) {
      this.contacts.splice(index, 1);
      console.log(`Contact ${firstName} ${lastName} deleted successfully`);
    } else {
      console.log("Contact not found");
    }
  }

  // method to get count of contacts in addressbook
  getContactCount() {
    return this.contacts.reduce((count) => count + 1, 0);
  }

  // method to ensure find duplicate entry
  hasDuplicate(firstName, lastName) {
    return (
      this.contacts.filter(
        (contact) =>
          contact.firstName.toLowerCase() === firstName.toLowerCase() &&
          contact.lastName.toLowerCase() === lastName.toLowerCase()
      ).length > 0
    );
  }

  // method to search person in particular city
  searchByCity(city) {
    return this.contacts.filter(
      (contact) => contact.city.toLowerCase() === city.toLowerCase()
    );
  }

  // method to search person in particular state
  searchByState(state) {
    return this.contacts.filter(
      (contact) => contact.state.toLowerCase() === state.toLowerCase()
    );
  }
}
// Exporting the AddressBook class
export default AddressBook;
