export async function sendContacts(sock, jid, displayName, contacts, sendOptions = {}) {
  return sock.sendMessage(jid, { contacts: { displayName, contacts } }, sendOptions);
}
