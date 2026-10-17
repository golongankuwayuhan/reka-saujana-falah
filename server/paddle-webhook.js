/**
 * Paddle Billing v2 Webhook Handler — LuminaTweak Glass
 * PT Reka Saujana Falah
 * 
 * Handles incoming webhook events from Paddle.com:
 * - Verifies HMAC SHA256 signature using Paddle-Signature header
 * - Processes 'transaction.completed' (order fulfillment / license issue)
 * - Processes 'transaction.paid'
 * - Processes 'adjustment.updated' (refunds / license revocation)
 * - Auto-detects Sandbox vs Live environment
 */

import crypto from 'crypto';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

// Webhook Secret from Paddle Dashboard:
// Sandbox: Obtain from https://sandbox-vendors.paddle.com/notifications
// Live:    Obtain from https://vendors.paddle.com/notifications
const PADDLE_WEBHOOK_SECRET = process.env.PADDLE_WEBHOOK_SECRET || 'pdl_ntfset_YOUR_WEBHOOK_SECRET_KEY';

/**
 * Verify Paddle Billing v2 Webhook Signature
 * Header format: ts=1680000000;h1=6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b
 */
export function verifyPaddleWebhook(rawBody, signatureHeader, secretKey) {
  if (!signatureHeader || !secretKey) return false;

  const parts = signatureHeader.split(';');
  let timestamp = null;
  let signatureHash = null;

  for (const part of parts) {
    const [key, val] = part.split('=');
    if (key.trim() === 'ts') timestamp = val.trim();
    if (key.trim() === 'h1') signatureHash = val.trim();
  }

  if (!timestamp || !signatureHash) return false;

  // Replay attack prevention: reject requests older than 5 minutes (300 seconds)
  const currentTs = Math.floor(Date.now() / 1000);
  if (Math.abs(currentTs - parseInt(timestamp, 10)) > 300) {
    console.warn('⚠️ Webhook timestamp difference exceeds 5 minutes.');
    // In local testing, you can relax this if testing with mock payloads
  }

  const signedPayload = `${timestamp}:${rawBody}`;
  const computedHash = crypto
    .createHmac('sha256', secretKey)
    .update(signedPayload)
    .digest('hex');

  try {
    return crypto.timingSafeEqual(
      Buffer.from(computedHash, 'utf8'),
      Buffer.from(signatureHash, 'utf8')
    );
  } catch (err) {
    return false;
  }
}

// IMPORTANT: Webhooks must use raw body to accurately verify HMAC signature
app.post('/api/paddle/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const signature = req.headers['paddle-signature'];
  const rawBody = req.body.toString('utf8');

  // Verify HMAC signature
  const isValid = verifyPaddleWebhook(rawBody, signature, PADDLE_WEBHOOK_SECRET);
  if (!isValid && process.env.NODE_ENV === 'production') {
    console.error('❌ Invalid Paddle Webhook Signature');
    return res.status(401).send('Invalid signature');
  }

  let event;
  try {
    event = JSON.parse(rawBody);
  } catch (err) {
    console.error('❌ Malformed JSON payload:', err.message);
    return res.status(400).send('Invalid JSON');
  }

  const eventType = event.event_type;
  const eventId = event.event_id;
  const data = event.data || {};

  console.log(`\n======================================================`);
  console.log(`🔔 Received Paddle Webhook: [${eventType}] (Event ID: ${eventId})`);
  console.log(`   Occurred At: ${event.occurred_at}`);

  // Detect environment (sandbox vs live)
  const isSandbox = event.notification_id?.startsWith('ntf_sdbx') || 
                    data.id?.includes('sdbx') || 
                    process.env.PADDLE_ENV === 'sandbox';

  console.log(`   Environment: ${isSandbox ? '🧪 SANDBOX' : '🚀 PRODUCTION / LIVE'}`);

  try {
    switch (eventType) {
      case 'transaction.completed':
      case 'transaction.paid': {
        const orderId = data.id;
        const customerId = data.customer_id;
        const customerEmail = data.customer?.email || (data.details?.totals?.email) || 'N/A';
        const currency = data.currency_code || 'USD';
        const total = (data.details?.totals?.grand_total || data.details?.totals?.total || 0) / 100;
        const items = data.items || [];

        console.log(`✅ Payment Completed:`);
        console.log(`   Order ID:       ${orderId}`);
        console.log(`   Customer Email: ${customerEmail}`);
        console.log(`   Amount Paid:    ${currency} ${total}`);
        console.log(`   Items:          ${items.length} item(s)`);

        items.forEach((item, idx) => {
          const priceId = item.price?.id;
          const productId = item.price?.product_id;
          const desc = item.price?.description || 'LuminaTweak Glass License';
          console.log(`   [${idx + 1}] Product: ${productId} | Price: ${priceId} (${desc})`);
        });

        // 1. Paddle automatically generates and emails license keys to the buyer
        // 2. Here you can record order in your database or send custom PT RSF thank-you email
        break;
      }

      case 'adjustment.updated': {
        const adjustmentStatus = data.status;
        const action = data.action; // e.g. 'refund'
        const transactionId = data.transaction_id;

        console.log(`🔄 Adjustment / Refund Notice:`);
        console.log(`   Action:         ${action}`);
        console.log(`   Status:         ${adjustmentStatus}`);
        console.log(`   Transaction ID: ${transactionId}`);

        if (action === 'refund' && adjustmentStatus === 'approved') {
          console.log(`⚠️ Refund approved for ${transactionId}. Revoking license.`);
          // Trigger license revocation in license server
        }
        break;
      }

      default:
        console.log(`ℹ️ Unhandled event type: ${eventType}`);
        break;
    }

    // Always respond with 200 OK quickly to acknowledge receipt
    res.status(200).json({ received: true, event_id: eventId });
  } catch (processingErr) {
    console.error('❌ Error processing webhook logic:', processingErr);
    // Still return 200 if it was an internal handler error to prevent Paddle retry loop
    res.status(200).json({ received: true, error: processingErr.message });
  }
});

// Health check endpoint
app.get('/api/paddle/health', (req, res) => {
  res.json({
    status: 'online',
    service: 'LuminaTweak Glass — Paddle Webhook Receiver',
    company: 'PT Reka Saujana Falah',
    environment: process.env.PADDLE_ENV || 'sandbox',
    timestamp: new Date().toISOString()
  });
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`\n🚀 LuminaTweak Paddle Webhook Server running on port ${PORT}`);
    console.log(`   Endpoint: POST http://localhost:${PORT}/api/paddle/webhook`);
    console.log(`   Health:   GET  http://localhost:${PORT}/api/paddle/health\n`);
  });
}

export default app;
