'use server';

import nodemailer from 'nodemailer';

export default async function sendEmail({ name, email, tel, doubt, cnpj }: any) {
  const transporter = nodemailer.createTransport({
    host: 'stmp.gmail.com',
    port: 587,
    service: 'gmail',
    auth: {
      user: 'gui@gmail.com', // Seu endereço de e-mail
      pass: '' // Sua senha de e-mail
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailOptions = {
    from: 'gui@gmail.com',
    to: 'gui@gmail.com',
    subject: 'Work',
    html: `
    <body style="background-color: black; color: white; font-family: Arial, sans-serif;">
        <div style="max-width: 37.5rem; margin: 0 auto; padding: 1.25rem;">
            <h1>Resposta de Contato</h1>
            <p>Segue abaixo as informações recebidas:</p>
            <ul>
                <li><strong>Nome:</strong> ${name}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Tipo de Serviço:</strong> ${tel}</li>
                <li><strong>Mensagem:</strong> ${doubt}</li>
                <li><strong>Mensagem:</strong> ${cnpj}</li>
            </ul>
        </div>
    </body>
    `
  };

  const response = await transporter.sendMail(mailOptions);
  console.log(response);
}
