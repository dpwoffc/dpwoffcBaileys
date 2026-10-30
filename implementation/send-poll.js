export async function sendPoll(sock, jid, name, values, selectableCount = 1, sendOptions = {}) {
  return sock.sendMessage(
    jid,
    { poll: { name, values, selectableCount } },
    sendOptions,
  );
}
