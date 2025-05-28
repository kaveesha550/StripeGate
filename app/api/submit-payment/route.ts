import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { plan, amount, cryptoAmount, cryptoCurrency, transactionId, customerEmail, customerName } = data

    // In a production environment, you would:
    // 1. Store this information in a database
    // 2. Send an email notification to the admin (you)
    // 3. Potentially send a confirmation email to the customer

    // Example of sending an email to the admin (you would implement this with an email service)
    console.log(`
      New payment submission:
      Plan: ${plan}
      Amount: $${amount} (${cryptoAmount} ${cryptoCurrency})
      Transaction ID: ${transactionId}
      Customer: ${customerName} (${customerEmail})
      
      This would be sent to: hikkaduwagefrancis@gmail.com
    `)

    return NextResponse.json({ success: true, message: "Payment information received" })
  } catch (error) {
    console.error("Error processing payment:", error)
    return NextResponse.json({ success: false, message: "Failed to process payment" }, { status: 500 })
  }
}
