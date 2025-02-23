const { Resend } = require('resend');
const { render } = require('@react-email/render');

// Import the email templates
const DemoRequestEmail = require('./emails/DemoRequestEmail');
const UpgradeRequestEmail = require('./emails/UpgradeRequestEmail');

const resend = new Resend(process.env.RESEND_API_KEY);

const emailTemplates = {
  demo: async (data) => {
    const html = await render(DemoRequestEmail(data), {
        pretty: true,
      });
    return {
      subject: 'New Demo Request',
      html,
      react: DemoRequestEmail(data)
    };
  },
  upgrade: async (data) => {
    const html = await render(UpgradeRequestEmail(data), {
        pretty: true,
      });
    return {
      subject: 'New Upgrade Request',
      html,
      react: UpgradeRequestEmail(data)
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
      //html: template.html,
      react: template.react,
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