export async function sendLocation(sock, jid, degreesLatitude, degreesLongitude, contentOptions = {}, sendOptions = {}) {
  return sock.sendMessage(
    jid,
    { location: { degreesLatitude, degreesLongitude, ...contentOptions } },
    sendOptions,
  );
}
