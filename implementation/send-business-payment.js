export async function sendBusinessPayment(sock, jid, template, bankDetails = {}, sendOptions = {}) {
  return sock.sendMessage(
    jid,
    { businessPaymentMessage: { template, ...bankDetails } },
    sendOptions,
  );
}
