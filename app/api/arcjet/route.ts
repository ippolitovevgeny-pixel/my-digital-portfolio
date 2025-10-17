import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/next";
import { NextResponse } from "next/server";

const aj = arcjet({
  key: process.env.ARCJET_KEY!, // Get your site key from https://app.arcjet.com
  characteristics: ["userId"], // Track requests by a custom user ID
  rules: [
    // Protect against common attacks with Arcjet Shield
    shield({
      mode: "LIVE", // will block requests. Use "DRY_RUN" to log only
    }),
    // Create a bot detection rule
    detectBot({
      mode: "LIVE", // will block requests. Use "DRY_RUN" to log only
      // configured with a list of bots to allow from
      // https://arcjet.com/bot-list
      allow: [], // "allow none" will block all detected bots
    }),
    // Create a token bucket rate limit. Other algorithms are supported.
    tokenBucket({
      mode: "LIVE",
      refillRate: 5, // refill 5 tokens per interval
      interval: 10, // refill every 10 seconds
      capacity: 10, // bucket maximum capacity of 10 tokens
    }),
  ],
});

export async function GET(req: Request) {
  const userId = "user123"; // Replace with your authenticated user ID
  const decision = await aj.protect(req, { userId, requested: 5 }); // Deduct 5 tokens from the bucket
  console.log("Arcjet decision", decision);

  if (decision.isDenied()) {
    if (decision.reason.isRateLimit()) {
      return NextResponse.json(
        {
          error: "Too Many Requests",
          reason: decision.reason,
        },
        {
          status: 429,
        }
      );
    } else if (decision.reason.isBot()) {
      return NextResponse.json(
        {
          error: "Forbidden - Bot Detected",
          reason: decision.reason,
        },
        {
          status: 403,
        }
      );
    } else {
      return NextResponse.json(
        {
          error: "Forbidden",
          reason: decision.reason,
        },
        {
          status: 403,
        }
      );
    }
  }

  return NextResponse.json({
    message: "Hello world",
    decision: decision,
  });
}

export async function POST(req: Request) {
  const userId = "user456"; // Replace with your authenticated user ID
  const decision = await aj.protect(req, { userId, requested: 5 });

  if (decision.isDenied()) {
    if (decision.reason.isRateLimit()) {
      return NextResponse.json(
        {
          error: "Too Many Requests",
          reason: decision.reason,
        },
        {
          status: 429,
        }
      );
    } else if (decision.reason.isBot()) {
      return NextResponse.json(
        {
          error: "Forbidden - Bot Detected",
          reason: decision.reason,
        },
        {
          status: 403,
        }
      );
    } else {
      return NextResponse.json(
        {
          error: "Forbidden",
          reason: decision.reason,
        },
        {
          status: 403,
        }
      );
    }
  }

  return NextResponse.json({
    message: "POST request successful",
    decision: decision,
  });
}
