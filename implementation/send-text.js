export async function sendText(sock, jid, text, contentOptions = {}, sendOptions = {}) {
  return sock.sendMessage(jid, { text, ...contentOptions }, sendOptions);
}
