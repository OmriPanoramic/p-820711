import { Resend } from 'resend';
import { render } from '@react-email/render';
import DemoRequestEmail from './emails/DemoRequestEmail';
import UpgradeRequestEmail from './emails/UpgradeRequestEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailTemplate {
  subject: string;
  html: string;
}

type FormTypes = 'demo' | 'upgrade';

const emailTemplates = {
  demo: async (data): Promise<EmailTemplate>  => {
    const html = await render(DemoRequestEmail(data));
    return {
      subject: 'New Demo Request',
      html,
    };
  },
  upgrade: async (data): Promise<EmailTemplate>  => {
    const html = await render(UpgradeRequestEmail(data));
    return {
      subject: 'New Upgrade Request',
      html,
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
      from: 'noreply@panoramicpower.com',
      to: 'panproductmarketing@centrica.com',
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