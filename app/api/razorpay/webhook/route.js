import { validateWebhookSignature } from "razorpay/dist/utils/razorpay-utils";

export async function POST(req) {
  try {
    const data = await req.text();
    console.log("Received webhook payload:", data);
    const signature = req.headers["x-razorpay-signature"];
    console.log("Received webhook signature:", signature);
    const isValid = validateWebhookSignature(
      JSON.stringify(data),
      signature,
      process.env.RAZORPAY_KEY_SECRET
    );
    if (!isValid) {
      console.error("Invalid webhook signature");
      return Response.json(
        { message: "invalid webhook signature" },
        { status: 400 }
      );
    }
    // Process the webhook payload
    return Response.json({ received: true });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return Response.json(
      { message: "error processing webhook" },
      { status: 500 }
    );
  }
}
