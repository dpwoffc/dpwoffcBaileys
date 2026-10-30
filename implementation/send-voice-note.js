export async function sendVoiceNote(sock, jid, audio, contentOptions = {}, sendOptions = {}) {
  return sock.sendMessage(
    jid,
    { audio, mimetype: "audio/ogg; codecs=opus", ptt: true, ...contentOptions },
    sendOptions,
  );
}
