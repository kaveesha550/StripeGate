import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, message } = data

    // In a production environment, you would use a service like SendGrid, Nodemailer, etc.
    // For demonstration purposes, we'll simulate sending an email

    console.log(`
      New contact form submission:
      Name: ${name}
      Email: ${email}
      Message: ${message}
      
      This would be sent to: hikkaduwagefrancis@gmail.com
    `)

    // Here you would integrate with an email service
    // This is where you would add your email sending logic
    // For example with Nodemailer or another email service

    return NextResponse.json({ success: true, message: "Email sent successfully" })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 })
  }
}
