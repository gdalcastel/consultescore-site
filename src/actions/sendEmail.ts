'use server';

import nodemailer from 'nodemailer';

export default async function sendEmail({ name, email, tel, doubt, cnpj }: any) {
  const transporter = nodemailer.createTransport({
    host: 'stmp.gmail.com',
    port: 587,
    service: 'gmail',
    auth: {
      user: process.env.AUTH_NODEMAILER_GMAIL_USER,
      pass: process.env.AUTH_NODEMAILER_GMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailOptions = {
    from: process.env.AUTH_NODEMAILER_GMAIL_USER,
    to: process.env.AUTH_NODEMAILER_GMAIL_USER,
    subject: `ConsulteScore - ${doubt ? `'Formulário site' : ${doubt} - ${name}` : `'Formulário site' : ${name}`} `,
    html: `
      <body style="background-color: white; color: black; font-family: Arial, sans-serif;">
        <div style="max-width: 37.5rem; padding: 1.25rem;">
            <h1>Resposta de Contato</h1>
            <p>Segue abaixo as informações recebidas:</p>
            <ul>
                <li><strong>Nome:</strong> ${name}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>tel:</strong> ${tel}</li>
                <li><strong>cnpj:</strong> ${cnpj}</li>
                <li><strong>Dúvida:</strong> ${doubt}</li>
            </ul>
        </div>
      </body>
    `
  };

  const response = await transporter.sendMail(mailOptions);
  console.log('response', response);
  return response;
}
