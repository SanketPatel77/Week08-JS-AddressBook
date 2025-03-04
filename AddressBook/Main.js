import Contact from "./Contact.js";
import AddressBook from "./AddressBook.js";

let addressBook = new AddressBook(); // reference of AddressBook class

// create contacts
let contact1 = new Contact(
  "Ankit",
  "Bhardwaj",
  "123 Main St",
  "Lucknow",
  "UP",
  "627004",
  "8425693000",
  "ankit@example.com"
);
let contact2 = new Contact(
  "Sanket",
  "Patel",
  "456 Elm St",
  "Bhopal",
  "MP",
  "462041",
  "9874589071",
  "sanket@example.com"
);

let contact3 = new Contact(
  "Uday",
  "Kourav",
  "219 Raj Samrat",
  "Jabalpur",
  "Bihar",
  "462965",
  "9879089071",
  "uday@example.com"
);

// adding contact object to array
addressBook.addContact(contact1);
addressBook.addContact(contact2);
addressBook.addContact(contact3);

// method to search by name and edit details
addressBook.editDetails("Sanket", "patel", {
  firstName: "Bhupendra",
  lastName: "singh",
  phoneNumber: "8435216790",
  email: "sanket.patel@gmail.com",
});

// find number of contacts in addressbook before deletion
console.log(addressBook.getContactCount());

//  display contacts before deletion
console.log("All Contacts:\n", addressBook.displayContacts());

// delete contact
addressBook.deleteContact("Sanket", "patel");

// find number of contacts in addressbook after deletion
console.log(addressBook.getContactCount());

// display all contacts after deletion
console.log("All Contacts:\n", addressBook.displayContacts());

// search the person by city name
console.log("Person from city", addressBook.searchByCity("Lucknow"));

// search the perosn by state name
console.log("Person from state", addressBook.searchByState("MP"));

// view person by city name
console.log("View by City :" + addressBook.viewByCity("Bhopal"));

// view person by state name
console.log("Vies by State :" + addressBook.viewByState("Bihar"));
