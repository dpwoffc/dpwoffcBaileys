# Baileys message implementations

Folder ini berisi fungsi siap pakai untuk mengirim tiap jenis pesan melalui socket Baileys. Setiap `send-*.js` mengekspor satu fungsi. Fungsi menerima `sock` dan `jid`, lalu meneruskan konten ke `sock.sendMessage`.

## Contoh

```js
import { sendText, sendImage, sendPoll, sendInteractive } from "./implementation/index.js";

await sendText(sock, jid, "Halo!");
await sendImage(sock, jid, { url: "./gambar.jpg" }, { caption: "Foto" });
await sendPoll(sock, jid, "Pilih", ["A", "B"]);

await sendInteractive(sock, jid, {
  title: "Info",
  buttons: [
    {
      name: "cta_url",
      buttonParamsJson: JSON.stringify({ display_text: "Buka situs", url: "https://example.com" }),
    },
  ],
});
```

Argumen `contentOptions` mengatur field pesan tambahan seperti caption, mimetype, atau mentions. `sendOptions` diteruskan sebagai argumen ketiga ke `sock.sendMessage`, misalnya untuk quoted message.

Beberapa tipe pesan khusus hanya dapat dipakai bila akun, chat, dan aplikasi WhatsApp mendukungnya. Fungsi-fungsi ini membungkus format Baileys; mereka tidak menambahkan dukungan protokol yang tidak tersedia di WhatsApp.
