import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message, phone, course, schedule } = await req.json();
    console.log("in the try block trying to send email");
    // Setup SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // SSL
      auth: {
        user: process.env.SMTP_SENDER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_SENDER}>`,
      to: process.env.SMTP_RECEIVER,
      subject: `Willing to enroll in ${course}`,
      html: `
        <h2>Dear Sir, I want to enroll in the ${course} course and my prefered schedule is ${schedule}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
