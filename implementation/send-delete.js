export async function sendDelete(sock, jid, messageKey, sendOptions = {}) {
  return sock.sendMessage(jid, { delete: messageKey }, sendOptions);
}
