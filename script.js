// script.js
const contactForm = document.getElementById("contactForm");
const contactList = document.getElementById("contactList");

let contacts = [];

function addContact(name, phone) {
  contacts.push({ name, phone });
  displayContacts();
}

function displayContacts() {
  contactList.innerHTML = "";
  contacts.forEach((contact, index) => {
    const contactItem = document.createElement("div");
    contactItem.textContent = `Name: ${contact.name}, Phone: ${contact.phone}`;
    contactList.appendChild(contactItem);
  });
}

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameInput = document.getElementById("nameInput");
  const phoneInput = document.getElementById("phoneInput");
  addContact(nameInput.value, phoneInput.value);
  nameInput.value = "";
  phoneInput.value = "";
});

displayContacts();

