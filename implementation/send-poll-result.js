export async function sendPollResult(sock, jid, pollResultMessage, sendOptions = {}) {
  return sock.sendMessage(jid, { pollResultMessage }, sendOptions);
}
