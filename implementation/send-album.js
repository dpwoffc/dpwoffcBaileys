export async function sendAlbum(sock, jid, items, sendOptions = {}) {
  return sock.sendMessage(jid, { albumMessage: items }, sendOptions);
}
