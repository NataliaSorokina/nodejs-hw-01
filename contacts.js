const { v4 } = require('uuid');
const fs = require('fs/promises');
const path = require('path');

const contactsPath = path.resolve('./db/contacts.json');


async function listContacts() {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data); 
  return contacts;
}


async function getContactById(contactId) {
  const allcontacts = await listContacts();
  const contactById = allcontacts.find(contact => contact.id === Number(contactId));
  if (!contactById) {
    return;
  }
  return contactById;
};


async function removeContact(contactId) {
  const allcontacts = await listContacts();  
  const newContacts = allcontacts.filter(contact => contact.id !== Number(contactId));
  fs.writeFile(contactsPath, JSON.stringify(newContacts));  
  return newContacts;
};

async function addContact(name, email, phone) {
  const allcontacts = await listContacts();
  const newContact = {"id": v4(), name, email, phone};
  allcontacts.push(newContact);
  fs.writeFile(contactsPath, JSON.stringify(allcontacts));
  return allcontacts;
}


module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
};