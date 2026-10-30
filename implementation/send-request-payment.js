export async function sendRequestPayment(sock, jid, amount, currency, note, from, sendOptions = {}) {
  return sock.sendMessage(
    jid,
    { requestPaymentMessage: { amount, currency, note, from } },
    sendOptions,
  );
}
