const fs = require('fs/promises');
const contactsPath = require('./contactsPath');
const listContacts = require('./listContacts');

async function removeContact(contactId) {
  const allcontacts = await listContacts();  
  const newContacts = allcontacts.filter(contact => contact.id !== Number(contactId));
  fs.writeFile(contactsPath, JSON.stringify(newContacts));  
  return newContacts;
};

module.exports = removeContact;