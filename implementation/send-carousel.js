export async function sendCarousel(sock, jid, body, cards, contentOptions = {}, sendOptions = {}) {
  return sock.sendMessage(
    jid,
    {
      interactiveMessage: {
        body: typeof body === "string" ? { text: body } : body,
        footer: contentOptions.footer ? { text: contentOptions.footer } : undefined,
        header: contentOptions.header || { title: "", hasMediaAttachment: false },
        carouselMessage: { cards, messageVersion: 1, carouselCardType: 1 },
      },
    },
    sendOptions,
  );
}
