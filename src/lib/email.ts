import { site } from "@/lib/site";

/**
 * Production origin. Email clients block SVG and inline data-URI images, so the
 * header logo points at the hosted PNG app icon (served at /apple-icon.png).
 * The text wordmark sits beside it so the header still reads as branded even if
 * a client blocks remote images.
 */
const BASE_URL = "https://fortifypest.ca";
const LOGO_URL = `${BASE_URL}/apple-icon.png`;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

type ContactEmailInput = {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  /** Human label, e.g. "Quote request" or "Contact message". */
  sourceLabel: string;
};

/** Builds the branded HTML email plus a plain-text fallback (better inboxing). */
export function renderContactEmail({
  name,
  email,
  phone,
  message,
  sourceLabel,
}: ContactEmailInput): { html: string; text: string } {
  const receivedAt = new Intl.DateTimeFormat("en-CA", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "America/Winnipeg",
  }).format(new Date());

  const row = (label: string, valueHtml: string) => `
    <tr>
      <td style="padding:13px 18px;background:#f8fafc;border-bottom:1px solid #eef2f7;font-size:11px;font-weight:700;color:#033562;text-transform:uppercase;letter-spacing:0.6px;vertical-align:top;white-space:nowrap;">${label}</td>
      <td style="padding:13px 18px;border-bottom:1px solid #eef2f7;font-size:14px;color:#0f1d2e;line-height:1.55;">${valueHtml}</td>
    </tr>`;

  const rows = [
    row("Name", escapeHtml(name)),
    row(
      "Email",
      `<a href="mailto:${escapeHtml(email)}" style="color:#3e9940;text-decoration:none;font-weight:600;">${escapeHtml(email)}</a>`,
    ),
    phone
      ? row(
          "Phone",
          `<a href="tel:${escapeHtml(phone)}" style="color:#3e9940;text-decoration:none;font-weight:600;">${escapeHtml(phone)}</a>`,
        )
      : "",
    message
      ? row("Message", escapeHtml(message).replace(/\r?\n/g, "<br>"))
      : "",
  ].join("");

  const html = `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${sourceLabel}</title></head>
<body style="margin:0;padding:0;background:#f1f5f9;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:14px;overflow:hidden;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;box-shadow:0 10px 34px rgba(3,53,98,0.10);">
        <!-- Header -->
        <tr><td style="background:#033562;padding:24px 32px;">
          <table role="presentation" cellpadding="0" cellspacing="0"><tr>
            <td style="padding-right:14px;vertical-align:middle;">
              <img src="${LOGO_URL}" width="46" height="46" alt="Fortify Pest Control" style="display:block;border-radius:12px;border:0;outline:none;">
            </td>
            <td style="vertical-align:middle;">
              <div style="color:#ffffff;font-size:20px;font-weight:800;letter-spacing:-0.3px;line-height:1;">FORTIFY</div>
              <div style="color:#84d07d;font-size:11px;font-weight:700;letter-spacing:3px;margin-top:4px;">PEST CONTROL INC.</div>
            </td>
          </tr></table>
        </td></tr>
        <tr><td style="height:4px;background:#56b351;font-size:0;line-height:0;">&nbsp;</td></tr>
        <!-- Body -->
        <tr><td style="padding:30px 32px 6px;">
          <div style="font-size:12px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;color:#3e9940;">${escapeHtml(sourceLabel)}</div>
          <h1 style="margin:8px 0 6px;font-size:22px;line-height:1.25;color:#033562;font-weight:800;">New enquiry from ${escapeHtml(name)}</h1>
          <p style="margin:0 0 22px;color:#64748b;font-size:14px;line-height:1.55;">Someone just reached out through the fortifypest.ca website. Their details are below — simply reply to this email to respond to them directly.</p>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8edf3;border-radius:10px;overflow:hidden;">${rows}</table>
          <table role="presentation" cellpadding="0" cellspacing="0" style="margin:24px 0 4px;"><tr>
            <td style="border-radius:9px;background:#56b351;">
              <a href="mailto:${escapeHtml(email)}" style="display:inline-block;padding:13px 28px;font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;">Reply to ${escapeHtml(name)}</a>
            </td>
          </tr></table>
        </td></tr>
        <!-- Footer -->
        <tr><td style="padding:22px 32px 28px;border-top:1px solid #eef2f7;">
          <p style="margin:0;color:#94a3b8;font-size:12px;line-height:1.7;">
            <strong style="color:#64748b;">${escapeHtml(site.name)}</strong> &middot; ${escapeHtml(site.address.full)}<br>
            Sent automatically from the website contact form &middot; Received ${receivedAt}
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  const text = `${sourceLabel.toUpperCase()} — ${site.name}

Name:    ${name}
Email:   ${email}
Phone:   ${phone || "—"}

Message:
${message || "—"}

----
Reply directly to this email to respond to ${name}.
Received ${receivedAt} · Sent from the fortifypest.ca website.`;

  return { html, text };
}
