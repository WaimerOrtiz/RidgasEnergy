'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContact(formData: FormData) {
  const nombre = formData.get('nombre') as string;
  const empresa = formData.get('empresa') as string;
  const correo = formData.get('correo') as string;
  const telefono = formData.get('telefono') as string;
  const mensaje = formData.get('mensaje') as string;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Ridgas Energy <waimer.ortiz@ridgasenergy.com>',
      to: ['waimer.ortiz@ridgasenergy.com'],
      subject: `Nuevo Lead: ${nombre} - ${empresa || 'Independiente'}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #0B1F3A; border-bottom: 2px solid #F5B400; padding-bottom: 10px;">Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Empresa:</strong> ${empresa || 'No especificada'}</p>
          <p><strong>Correo:</strong> ${correo}</p>
          <p><strong>Teléfono:</strong> ${telefono || 'No especificado'}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p><strong>Mensaje:</strong></p>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${mensaje}</p>
          <footer style="margin-top: 20px; font-size: 12px; color: #666;">
            Enviado desde el formulario de contacto de RidgasEnergy.com
          </footer>
        </div>
      `,
    });

    if (error) {
      console.error('Error enviando correo:', error);
    } else {
      console.log('Correo enviado con éxito:', data);
    }
  } catch (err) {
    console.error('Error inesperado:', err);
  }
}


