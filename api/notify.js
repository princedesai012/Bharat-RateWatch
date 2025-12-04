export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { city, country, ip, device, os, page, mapsLink } = req.body;

    // Location Text banao (Agar GPS link hai toh wo dikhao, nahi toh City)
    let locationString = `🌍 **Approx Location:** ${city}, ${country}`;
    if (mapsLink) {
      locationString = `📍 **EXACT LOCATION:** [Open Map](${mapsLink})\n(City: ${city}, ${country})`;
    }

    const message = `
🚨 **NEW VISITOR ALERT!**
---------------------------
${locationString}
gf **IP:** ${ip}
📱 **Device:** ${device}
💻 **OS:** ${os}
📄 **Page:** ${page}
🔗 **Site:** Bharat Rate Watch
---------------------------
⏰ Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `;

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return res.status(500).json({ error: 'Server Config Error' });
    }

    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
        disable_web_page_preview: true
      })
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error("Telegram Error:", error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
