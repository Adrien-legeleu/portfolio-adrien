import { AdrienEmail } from "@/emails/AdrienEmail";
import { Resend } from "resend";
console.log(process.env.RESEND_API_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const {
      firstname,
      lastname,

      email,
      tel,
      message,
    } = await request.json();

    if (!firstname || !lastname || !email || !tel) {
      return new Response(
        JSON.stringify({ error: "Tous les champs sont requis." }),
        { status: 400 }
      );
    }
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["adrienlegeleu@gmail.com"],

      subject: firstname + " vous a envoyé un message",
      react: AdrienEmail({
        firstName: firstname,
        lastName: lastname,
        email,
        tel,
        message,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
