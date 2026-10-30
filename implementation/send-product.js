export async function sendProduct(sock, jid, productMessage, sendOptions = {}) {
  return sock.sendMessage(jid, { productMessage }, sendOptions);
}
