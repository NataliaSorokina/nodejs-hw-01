const fs = require('fs/promises');
const contactsPath = require('./contactsPath');
const { v4 } = require('uuid');
const listContacts = require('./listContacts');

async function addContact(name, email, phone) {
  const allcontacts = await listContacts();
  const newContact = {"id": v4(), name, email, phone};
  allcontacts.push(newContact);
  fs.writeFile(contactsPath, JSON.stringify(allcontacts));
  return allcontacts;
};

module.exports = addContact;