import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const message = await prisma.contactMessage.create({
      data: {
        name: body.name,
        email: body.email,
        subject: body.subject,
        message: body.message,
      },
    });

    await resend.emails.send({
      from: "NovaFlow <onboarding@resend.dev>",
      to: "hmarki2309@gmail.com", 
      subject: `New Contact: ${body.subject}`,
      html: `
        <h2>New Contact Message</h2>

        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Subject:</strong> ${body.subject}</p>

        <hr>

        <p>${body.message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message,
    });
  } catch (error) {
    console.error("CONTACT ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to create message",
      },
      {
        status: 500,
      }
    );
  }
}