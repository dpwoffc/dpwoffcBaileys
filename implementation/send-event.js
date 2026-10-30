export async function sendEvent(sock, jid, eventMessage, sendOptions = {}) {
  return sock.sendMessage(jid, { eventMessage }, sendOptions);
}
