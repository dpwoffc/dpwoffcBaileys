export async function sendStatusMention(sock, text, mentions = []) {
  return sock.sendStatusMention({ text }, mentions);
}
