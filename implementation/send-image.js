export async function sendImage(sock, jid, image, contentOptions = {}, sendOptions = {}) {
  return sock.sendMessage(jid, { image, ...contentOptions }, sendOptions);
}
