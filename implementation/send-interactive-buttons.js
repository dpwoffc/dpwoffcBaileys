export async function sendInteractiveButtons(sock, jid, text, interactiveButtons, contentOptions = {}, sendOptions = {}) {
  return sock.sendMessage(
    jid,
    { text, interactiveButtons, ...contentOptions },
    sendOptions,
  );
}
