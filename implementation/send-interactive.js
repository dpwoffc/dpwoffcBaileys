export async function sendInteractive(sock, jid, interactiveMessage, sendOptions = {}) {
  return sock.sendMessage(jid, { interactiveMessage }, sendOptions);
}
