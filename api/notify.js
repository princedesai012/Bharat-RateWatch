// api/notify.js
export default async function handler(req, res) {
  // Sirf POST request allow karenge
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { city, country, ip, device, os, page } = req.body;

    // Message Design
    const message = `
🚨 **NEW VISITOR ALERT!**
---------------------------
🌍 **Location:** ${city}, ${country}
📍 **IP:** ${ip}
📱 **Device:** ${device}
💻 **OS:** ${os}
📄 **Page:** ${page}
🔗 **Site:** Bharat Rate Watch
---------------------------
⏰ Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `;

    // Telegram API Call (Server-side se, toh token safe rahega)
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error("Missing Env Vars");
      return res.status(500).json({ error: 'Server Config Error' });
    }

    const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;

    await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown'
      })
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error("Telegram Error:", error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
