export async function sendSticker(sock, jid, sticker, sendOptions = {}) {
  return sock.sendMessage(jid, { sticker }, sendOptions);
}
