export async function sendReaction(sock, jid, messageKey, emoji, sendOptions = {}) {
  return sock.sendMessage(jid, { react: { key: messageKey, text: emoji } }, sendOptions);
}
