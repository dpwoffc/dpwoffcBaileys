export async function sendVideo(sock, jid, video, contentOptions = {}, sendOptions = {}) {
  return sock.sendMessage(jid, { video, ...contentOptions }, sendOptions);
}
