import type { APIRoute } from 'astro';

// Este endpoint corre no servidor (Vercel). Precisa do adaptador @astrojs/vercel.
export const prerender = false;

const TO = 'guilavourar@gmail.com';
const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const json = (body: object, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

export const POST: APIRoute = async ({ request }) => {
  let data: Record<string, string>;
  try {
    data = await request.json();
  } catch {
    return json({ error: 'Pedido inválido.' }, 400);
  }

  // Campo escondido: se vier preenchido, é um bot. Responde "ok" sem enviar.
  if (data.website) return json({ ok: true });

  const name = String(data.name ?? '').trim().slice(0, 100);
  const email = String(data.email ?? '').trim().slice(0, 150);
  const message = String(data.message ?? '').trim().slice(0, 3000);

  if (!name || !/^\S+@\S+\.\S+$/.test(email) || message.length < 10) {
    return json({ error: 'Dados em falta ou inválidos.' }, 400);
  }

  const key = import.meta.env.RESEND_API_KEY;
  if (!key) return json({ error: 'Servidor sem chave de envio.' }, 500);

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: import.meta.env.CONTACT_FROM || 'Lavoura Design <onboarding@resend.dev>',
      to: [TO],
      reply_to: email,
      subject: `Nova mensagem de ${name} (lavouradesign.com)`,
      html: `<p><strong>Nome:</strong> ${esc(name)}</p>
             <p><strong>Email:</strong> ${esc(email)}</p>
             <p><strong>Mensagem:</strong></p>
             <p>${esc(message).replace(/\n/g, '<br>')}</p>`,
    }),
  });

  if (!res.ok) return json({ error: 'Falha ao enviar.' }, 502);
  return json({ ok: true });
};
