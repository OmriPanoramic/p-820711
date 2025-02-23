const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

const emailTemplates = {
  demo: (data) => ({
    subject: 'New Demo Request',
    html: `
      <h2>New Demo Request</h2>
      <p><strong>Full Name:</strong> ${data.fullName}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Account:</strong> ${data.account}</p>
      <p><strong>Partner:</strong> ${data.partner}</p>
    `
  }),
  upgrade: (data) => ({
    subject: 'New Upgrade Request',
    html: `
      <h2>New Upgrade Request</h2>
      <p><strong>Full Name:</strong> ${data.fullName}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Account/Site Name:</strong> ${data.accountName}</p>
      <p><strong>Support Partner:</strong> ${data.supportPartner}</p>
      <p><strong>Additional Information:</strong> ${data.moreInfo || 'N/A'}</p>
    `
  })
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

    const template = emailTemplates[formType]?.(formData);
    
    if (!template) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid form type' })
      };
    }

    const data = await resend.emails.send({
      from: 'guy.tzaban@centrica.com',
      to: 'guy.tzaban@centrica.com', // Email where you want to receive notifications
      subject: template.subject,
      html: template.html,
      reply_to: formData.email
    });

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
}