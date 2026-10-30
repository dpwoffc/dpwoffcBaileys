export async function sendList(sock, jid, text, title, sections, buttonText = "Pilih", contentOptions = {}, sendOptions = {}) {
  const button = {
    name: "single_select",
    buttonParamsJson: JSON.stringify({ title: buttonText, sections }),
  };
  return sock.sendMessage(
    jid,
    {
      interactiveMessage: {
        title: text,
        footer: contentOptions.footer || "",
        buttons: [button],
        header: contentOptions.header ?? title ?? "",
      },
    },
    sendOptions,
  );
}
