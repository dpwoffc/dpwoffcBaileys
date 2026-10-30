export async function sendForward(sock, jid, message, sendOptions = {}) {
  return sock.sendMessage(
    jid,
    { forward: message, forwardingScore: 1, isForwarded: true },
    sendOptions,
  );
}
