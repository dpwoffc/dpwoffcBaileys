export async function sendEdit(sock, jid, messageKey, text, contentOptions = {}, sendOptions = {}) {
  return sock.sendMessage(jid, { text, edit: messageKey, ...contentOptions }, sendOptions);
}
