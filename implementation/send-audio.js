export async function sendAudio(sock, jid, audio, contentOptions = {}, sendOptions = {}) {
  return sock.sendMessage(jid, { audio, ...contentOptions }, sendOptions);
}
