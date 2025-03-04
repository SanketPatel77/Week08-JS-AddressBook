const Contact = require("./Contact");
const AddressBook = require("./AddressBook");

let addressBook = new AddressBook();

let contact1 = new Contact(
  "John",
  "Doe",
  "123 Main St",
  "Springfield",
  "IL",
  "62704",
  "123-456-7890",
  "john.doe@example.com"
);
let contact2 = new Contact(
  "Jane",
  "Smith",
  "456 Elm St",
  "Boston",
  "MA",
  "02108",
  "987-654-3210",
  "jane.smith@example.com"
);

addressBook.addContact(contact1);
addressBook.addContact(contact2);

console.log("All Contacts:\n", addressBook.displayContacts());

addressBook.deleteContact("Jane", "Smith");
console.log("\nAfter Deleting Jane Smith:\n", addressBook.displayContacts());
