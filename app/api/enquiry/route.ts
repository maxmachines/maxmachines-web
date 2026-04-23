import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  const { name, company, phone, email, machineInterest, message } =
    await req.json();

  const subject = `New Enquiry — ${machineInterest || "General"} from ${name}`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background:#0f0f0f;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f0f0f;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#1a1a1a;border-radius:16px;border:1px solid rgba(234,179,8,0.25);overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1a1500 0%,#1a1a1a 100%);padding:32px 36px;border-bottom:1px solid rgba(234,179,8,0.2);">
              <p style="margin:0 0 8px;color:#eab308;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;">Max Machine Tools</p>
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:900;line-height:1.3;">New Enquiry Received</h1>
              <p style="margin:8px 0 0;color:#eab308;font-size:15px;font-weight:700;">${machineInterest || "General Enquiry"}</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 36px;">
              <table width="100%" cellpadding="0" cellspacing="0">

                ${row("Name", name)}
                ${row("Company", company || "—")}
                ${row("Phone", phone)}
                ${row("Email", email)}
                ${row("Machine Interest", machineInterest || "—")}
                ${
                  message
                    ? `
                <tr>
                  <td style="padding:0 0 20px;">
                    <p style="margin:0 0 6px;color:#eab308;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Message</p>
                    <div style="background:#0f0f0f;border:1px solid rgba(234,179,8,0.12);border-radius:10px;padding:14px 16px;">
                      <p style="margin:0;color:#e5e5e5;font-size:14px;line-height:1.7;white-space:pre-wrap;">${escapeHtml(message)}</p>
                    </div>
                  </td>
                </tr>`
                    : ""
                }

              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#111111;border-top:1px solid rgba(234,179,8,0.12);padding:20px 36px;text-align:center;">
              <p style="margin:0;color:#525252;font-size:12px;">This enquiry was submitted via <a href="https://maxmachines.in" style="color:#eab308;text-decoration:none;">maxmachines.in</a></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Max Machine Tools <max@maxmachines.in>",
      to: ["max@maxmachines.in"],
      subject,
      html,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    return NextResponse.json({ error: err }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

function row(label: string, value: string) {
  return `
  <tr>
    <td style="padding:0 0 18px;">
      <p style="margin:0 0 4px;color:#eab308;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">${label}</p>
      <p style="margin:0;color:#ffffff;font-size:15px;font-weight:600;">${escapeHtml(value)}</p>
    </td>
  </tr>`;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
