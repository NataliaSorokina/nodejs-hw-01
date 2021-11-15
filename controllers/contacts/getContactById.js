const fs = require('fs/promises');
const listContacts = require('./listContacts');

async function getContactById(contactId) {
  const allcontacts = await listContacts();
  const contactById = allcontacts.find(contact => contact.id === Number(contactId));
  if (!contactById) {
    return;
  }
  return contactById;
};

module.exports = getContactById;