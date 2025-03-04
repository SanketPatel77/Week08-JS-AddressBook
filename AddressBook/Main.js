import Contact from "./Contact.js";
import AddressBook from "./AddressBook.js";

let addressBook = new AddressBook(); // reference of AddressBook class

// create contacts
let contact1 = new Contact(
  "John",
  "Doe",
  "123 Main St",
  "Springfield",
  "IL",
  "62704",
  "8425693000",
  "john.doe@example.com"
);
let contact2 = new Contact(
  "Jane",
  "Smith",
  "456 Elm St",
  "Boston",
  "MA",
  "02108",
  "9874589071",
  "jane.smith@example.com"
);

// adding contact object to array
addressBook.addContact(contact1);
addressBook.addContact(contact2);

// method to search by name and edit details
addressBook.editDetails("Jane", "smith", {
  firstName: "Sanket",
  lastName: "patel",
  phoneNumber: "8435216790",
  email: "sanket.patel@gmail.com",
});

// find number of contacts in addressbook before deletion
console.log(addressBook.getContactCount());

//  display contacts before deletion
console.log("All Contacts:\n", addressBook.displayContacts());

// delete contact
addressBook.deleteContact("john", "Doe");

// find number of contacts in addressbook after deletion
console.log(addressBook.getContactCount());

// display all contacts after deletion
console.log("All Contacts:\n", addressBook.displayContacts());
