// Array to store contacts
let contacts = [];

// Function to display contacts
const displayContacts = () => {
  const contactList = document.getElementById('contactList');
  contactList.innerHTML = '';
  contacts.forEach((contact, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${contact.name} - ${contact.phone} 
      <button class="edit-btn" data-id="${index}">Edit</button> 
      <button class="delete-btn" data-id="${index}">Delete</button>`;
    contactList.appendChild(listItem);
  });
};

// Function to add a new contact
const addContact = (name, phone) => {
  contacts.push({ name, phone });
  displayContacts();
};

// Event listener for the form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('nameInput').value;
  const phone = document.getElementById('phoneInput').value;
  addContact(name, phone);
  contactForm.reset();
});

// Paste the provided edit and delete functionalities here
// Ensure to integrate the functions into the event listeners

