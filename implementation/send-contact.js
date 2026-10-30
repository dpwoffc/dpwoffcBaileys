export async function sendContact(sock, jid, displayName, phone, sendOptions = {}) {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${displayName}`,
    `TEL;type=CELL;type=VOICE;waid=${String(phone).replace(/\D/g, "")}:${phone}`,
    "END:VCARD",
  ].join("\n");
  return sock.sendMessage(
    jid,
    { contacts: { displayName, contacts: [{ vcard }] } },
    sendOptions,
  );
}
