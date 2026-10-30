export async function sendDocument(sock, jid, document, fileName, mimetype, contentOptions = {}, sendOptions = {}) {
  return sock.sendMessage(
    jid,
    { document, fileName, mimetype, ...contentOptions },
    sendOptions,
  );
}
