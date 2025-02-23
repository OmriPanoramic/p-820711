const { Resend } = require('resend');
const { renderAsync } = require('@react-email/render');

// Import the email templates
const { default: DemoRequestEmail } = require('../../src/emails/DemoRequestEmail');
const { default: UpgradeRequestEmail } = require('../../src/emails/UpgradeRequestEmail');

const resend = new Resend(process.env.RESEND_API_KEY);

const emailTemplates = {
  demo: async (data) => {
    const html = await renderAsync(DemoRequestEmail(data));
    return {
      subject: 'New Demo Request',
      html
    };
  },
  upgrade: async (data) => {
    const html = await renderAsync(UpgradeRequestEmail(data));
    return {
      subject: 'New Upgrade Request',
      html
    };
  }
};

exports.handler = async function(event, context) {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { formType, formData } = JSON.parse(event.body);

    if (!formType || !formData) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing form type or data' })
      };
    }

    const templateFn = emailTemplates[formType];
    
    if (!templateFn) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid form type' })
      };
    }

    const template = await templateFn(formData);

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'guy.tzaban@centrica.com',
      subject: template.subject,
      html: template.html,
      reply_to: formData.email
    });

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
}