import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { name, email, organisation, message, audience } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    await resend.emails.send({
      from: 'Wadmore <support@wadmore.com.au>',
      to: 'matt.linn@wadmore.com.au',
      replyTo: email,
      subject: `Wadmore Contact: ${audience || 'General'} - ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #384275; padding: 24px; border-radius: 12px 12px 0 0;">
            <h2 style="color: white; margin: 0;">New Contact Form Submission</h2>
          </div>
          <div style="background: #F7F8FA; padding: 24px; border: 1px solid #E4E7EB; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6C7A96; width: 120px;">Name</td>
                <td style="padding: 8px 0; color: #2C2D33; font-weight: 500;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6C7A96;">Email</td>
                <td style="padding: 8px 0; color: #2C2D33; font-weight: 500;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6C7A96;">Organisation</td>
                <td style="padding: 8px 0; color: #2C2D33; font-weight: 500;">${organisation || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6C7A96;">Interested in</td>
                <td style="padding: 8px 0; color: #2C2D33; font-weight: 500;">${audience || 'Not specified'}</td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #E4E7EB; margin: 16px 0;" />
            <p style="color: #6C7A96; margin: 0 0 8px 0; font-size: 14px;">Message</p>
            <p style="color: #2C2D33; margin: 0; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="color: #6C7A96; font-size: 12px; text-align: center; margin-top: 16px;">
            Reply directly to this email to respond to ${name}
          </p>
        </div>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ success: false, error: 'Failed to send message' });
  }
}
